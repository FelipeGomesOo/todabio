import type { Metadata } from "next";
import { Manrope, PT_Mono } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu/Menu";
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});
const ptMono = PT_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pt-mono",
});

export const metadata: Metadata = {
  title: "Toda.bio Maps",
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
        className={`${ptMono.variable} ${manrope.variable} antialiased flex flex-col h-screen`}
      >
        <Menu />
        <main className=" font-mono flex-1 flex">{children}</main>
      </body>
    </html>
  );
}
