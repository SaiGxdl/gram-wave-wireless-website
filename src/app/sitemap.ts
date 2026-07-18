import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gramwavewireless.in";
  const routes = [
    "",
    "/adaptive-wave",
    "/research-ip",
    "/roadmap",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-07-18"),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/privacy") || route.startsWith("/terms") || route.startsWith("/disclaimer") ? 0.3 : 0.8,
  }));
}
