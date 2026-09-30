import { SITE } from "@/lib/siaran";

export default function sitemap() {
  const now = new Date();
  return [
    { url: SITE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/jadwal-siaran`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE}/cek-perangkat`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
