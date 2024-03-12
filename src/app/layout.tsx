import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Optimized App with JS Mastery",
  description: "First Project with js mastery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
