import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import { PageChrome } from "@/components/layout/PageChrome";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "North Cove Builders | Custom Homes in West Michigan",
  description:
    "North Cove Builders creates personal, boutique custom homes across Hudsonville and surrounding West Michigan communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.variable} ${dmSerif.variable} antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <PageChrome>{children}</PageChrome>
      </body>
    </html>
  );
}
