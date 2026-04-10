import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Imran Tel | Monteur Vidéo Immobilier",
  description:
    "Monteur video base a Paris pour reels immobiliers, visites verticales et contenus premium prets a publier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${jakarta.variable} h-full`}>
      <body className="min-h-full bg-background font-[var(--font-inter)] text-foreground">
        {children}
      </body>
    </html>
  );
}
