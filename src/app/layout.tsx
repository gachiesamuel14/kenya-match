import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kenya Match – Location-Based Dating in Kenya",
  description:
    "Meet people near you in Nairobi, Mombasa, Kisumu, Kiambu and across Kenya. Location-based matchmaking with filters for county, age, interests, tribe and more.",
  keywords: [
    "Kenya dating",
    "Nairobi dating",
    "location based matchmaking",
    "Kenya match",
    "online dating Kenya",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-zinc-900">{children}</body>
    </html>
  );
}
