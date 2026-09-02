export default function handler(request, response) {
  response.setHeader("Cache-Control", "no-store");

  response.status(200).json({
    ok: true,
    service: "fireflies-backbone",
    environment: process.env.VERCEL_ENV || "development",
    timestamp: new Date().toISOString()
  });
}
