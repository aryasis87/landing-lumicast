import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata = {
  title: 'Lumicast — Webinar Eksklusif untuk Masa Depanmu',
  description: 'Lumicast: menerangi pikiran, memperluas wawasan — webinar eksklusif untuk masa depanmu.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${sora.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
