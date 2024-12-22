import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/font/font";

export const metadata: Metadata = {
  title: "Wateja app",
  description: "Une application de gestion de contact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
