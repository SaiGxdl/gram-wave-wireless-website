import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, inquiryType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill out all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const submission = {
      id: `inq_${Date.now()}`,
      name,
      email,
      inquiryType: inquiryType || "General Inquiry",
      message,
      timestamp: new Date().toISOString(),
    };

    console.log("[GramWave Contact Form Submission]:", submission);

    let delivered = false;

    // 1. Resend Email Dispatch (if RESEND_API_KEY is configured in Vercel / .env)
    if (process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || "GramWave Portal <onboarding@resend.dev>",
            to: [process.env.CONTACT_EMAIL || "founder@gramwavewireless.in"],
            subject: `[GramWave Inquiry] ${inquiryType}: ${name}`,
            html: `
              <h2>New Inquiry Submitted</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Type:</strong> ${inquiryType}</p>
              <p><strong>Message:</strong></p>
              <blockquote style="background:#f4f4f4;padding:12px;border-left:4px solid #3b82f6;">${message}</blockquote>
              <p><small>Submitted at ${submission.timestamp}</small></p>
            `,
          }),
        });

        if (resendRes.ok) {
          delivered = true;
        } else {
          console.error("Resend API response:", await resendRes.text());
        }
      } catch (err) {
        console.error("Failed to deliver email via Resend:", err);
      }
    }

    // 2. Webhook Forwarding (Zapier / Make / Formspree / Discord / Slack)
    if (process.env.CONTACT_WEBHOOK_URL) {
      try {
        const webhookRes = await fetch(process.env.CONTACT_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submission),
        });
        if (webhookRes.ok) {
          delivered = true;
        }
      } catch (err) {
        console.error("Failed to forward contact webhook:", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        delivered,
        message: delivered
          ? "Inquiry sent directly to our inbox."
          : "Inquiry logged. Note: Add RESEND_API_KEY or CONTACT_WEBHOOK_URL to your environment variables for automated email notifications.",
        submissionId: submission.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please email directly." },
      { status: 500 }
    );
  }
}
