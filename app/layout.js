import { Sora, Inter } from "next/font/google";
import MotionProvider from "./components/MotionProvider";
import "./globals.css";

const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"Lumicast","description":"Webinar eksklusif","url":"https://lumicast.pintuweb.com","inLanguage":"id"};

export const metadata = {
  metadataBase: new URL("https://lumicast.pintuweb.com"),
  title: "Lumicast — Webinar Eksklusif untuk Masa Depanmu",
  description: "Lumicast: menerangi pikiran, memperluas wawasan — webinar eksklusif untuk masa depanmu.",
  applicationName: "Lumicast",
  keywords: ["webinar", "webinar eksklusif", "kelas online", "pengembangan diri"],
  authors: [{ name: "Lumicast" }],
  creator: "Lumicast",
  publisher: "Lumicast",
  alternates: { canonical: "https://lumicast.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://lumicast.pintuweb.com",
    siteName: "Lumicast",
    title: "Lumicast — Webinar Eksklusif untuk Masa Depanmu",
    description: "Lumicast: menerangi pikiran, memperluas wawasan — webinar eksklusif untuk masa depanmu.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Lumicast — Webinar Eksklusif untuk Masa Depanmu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumicast — Webinar Eksklusif untuk Masa Depanmu",
    description: "Lumicast: menerangi pikiran, memperluas wawasan — webinar eksklusif untuk masa depanmu.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${sora.variable} ${inter.variable} antialiased`}>
        <MotionProvider>{children}</MotionProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
