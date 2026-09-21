export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://landing-lumicast.vercel.app/sitemap.xml",
    host: "https://landing-lumicast.vercel.app",
  };
}
