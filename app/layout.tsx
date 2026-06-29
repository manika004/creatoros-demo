import type { Metadata } from "next";
import { Bungee, Caveat, Poppins } from "next/font/google";
import "./globals.css";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee",
});

const caveat = Caveat({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-caveat",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "CreatorOS — AI Powered Creator Discovery & ROI Prediction",
  description: "AI-powered influencer discovery & campaign management",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bungee.variable} ${caveat.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}