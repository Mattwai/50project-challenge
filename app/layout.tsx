import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "50project-challenge",
  description: "50 B2B Saas Projects in 50 Days",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
