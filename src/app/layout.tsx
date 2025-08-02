import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import FloatingButtons from "../components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Technovita Solution - E-commerce Growth & Digital Marketing Experts",
  description: "Transform your business with our comprehensive e-commerce solutions. We specialize in digital marketing, content creation, catalogue management, and brand development to accelerate your online growth.",
  keywords: ["e-commerce solutions", "digital marketing", "online business growth", "catalogue creation", "brand development", "content writing", "advertising experts", "e-commerce management"],
  authors: [{ name: "Technovita Solution" }],
  creator: "Technovita Solution",
  publisher: "Technovita Solution",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://technovitasolution.com",
    siteName: "Technovita Solution",
    title: "Technovita Solution - E-commerce Growth & Digital Marketing Experts",
    description: "Transform your business with our comprehensive e-commerce solutions. We specialize in digital marketing, content creation, catalogue management, and brand development.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Technovita Solution - E-commerce & Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technovita Solution - E-commerce Growth & Digital Marketing Experts",
    description: "Transform your business with our comprehensive e-commerce solutions. We specialize in digital marketing, content creation, catalogue management, and brand development.",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0066cc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
