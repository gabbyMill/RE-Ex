export default function errorHandler(err, req, res, next) {
  if (!e.status) {
    return res.status(500).json({ error: "Internal server error" });
  } else {
    return res.status(err.status).json({ error: err.message });
  }
}
