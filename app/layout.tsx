import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Imran Tel | Monteur Vidéo",
  description:
    "Imran Tel — Monteur vidéo basé à Paris. Post-production, étalonnage, motion graphics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${cormorant.variable} h-full`}
    >
      <body className="min-h-full bg-[#0a0a0a] font-[var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
