import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, inquiryType, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill out all required fields." },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Construct submission log / payload
    const submission = {
      id: `inq_${Date.now()}`,
      name,
      email,
      inquiryType: inquiryType || "General Inquiry",
      message,
      timestamp: new Date().toISOString(),
    };

    // Log the inquiry on the server
    console.log("[GramWave Contact Form Submission]:", submission);

    // Optional webhook or email transport hook (if RESEND_API_KEY or Webhook URL configured)
    if (process.env.CONTACT_WEBHOOK_URL) {
      try {
        await fetch(process.env.CONTACT_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submission),
        });
      } catch (err) {
        console.error("Failed to forward contact webhook:", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received successfully.",
        submissionId: submission.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try emailing directly." },
      { status: 500 }
    );
  }
}
