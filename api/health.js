module.exports = function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  res.status(200).json({
    ok: true,
    service: "fireflies-backbone",
    environment: process.env.VERCEL_ENV || "development",
    timestamp: new Date().toISOString()
  });
};
