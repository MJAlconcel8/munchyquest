import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Notification from '../app/components/Notification';
import Footer from "../app/components/Footer";
import Navbar from "../app/components/Navbar";
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
  title: "Create Next App",
  description: "Generated by create next app",
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
        <Notification/>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
