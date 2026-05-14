import serverEntry from "../dist/server/index.js";

const server = serverEntry?.default ?? serverEntry;

function toWebRequest(req) {
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers.host || req.headers["host"] || "localhost";
  const url = `${protocol}://${host}${req.url}`;
  const headers = new Headers();

  for (const [key, value] of Object.entries(req.headers || {})) {
    if (Array.isArray(value)) {
      value.forEach((item) => headers.append(key, item));
    } else if (value !== undefined) {
      headers.set(key, String(value));
    }
  }

  return new Request(url, {
    method: req.method,
    headers,
    body: req.method === "GET" || req.method === "HEAD" ? null : req,
  });
}

export default async function handler(req, res) {
  const request = toWebRequest(req);
  const response = await server.fetch(request);

  res.status(response.status);
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  const buffer = Buffer.from(await response.arrayBuffer());
  res.end(buffer);
}
