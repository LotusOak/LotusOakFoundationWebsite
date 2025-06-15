import type { Metadata } from "next";
import { Crimson_Text, Inter } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

const crimsonText = Crimson_Text({
  variable: "--font-crimson-text",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Lotus Oak Foundation",
  description: "Enabling transformative impact through values-aligned philanthropy and regenerative stewardship. Blending traditional philanthropy with innovative social venture approaches.",
  keywords: "philanthropy, social venture, regenerative stewardship, donor advised funds, values-aligned giving",
  authors: [{ name: "Lotus Oak Foundation" }],
  creator: "Lotus Oak Foundation",
  publisher: "Lotus Oak Foundation",
  robots: "index, follow",
  openGraph: {
    title: "Lotus Oak Foundation",
    description: "Enabling transformative impact through values-aligned philanthropy and regenerative stewardship",
    url: "https://lotusoak.org",
    siteName: "Lotus Oak Foundation",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotus Oak Foundation",
    description: "Enabling transformative impact through values-aligned philanthropy and regenerative stewardship",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scroll">
      <body
        className={`${crimsonText.variable} ${inter.variable} antialiased no-scroll`}
      >
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
