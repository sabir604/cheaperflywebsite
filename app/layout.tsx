import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { WebsiteShell } from "@/components/layout/WebsiteShell";
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
  title: "CheaperFly - Where Low Prices Meet High Altitudes",
  description: "Find the best flight deals worldwide. Book cheap flights, Umrah packages, and business class travel with CheaperFly.",
  icons: {
    icon: "/logos/1152489451image.png",
    apple: "/logos/1152489451image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <WebsiteShell>{children}</WebsiteShell>
      </body>
    </html>
  );
}
