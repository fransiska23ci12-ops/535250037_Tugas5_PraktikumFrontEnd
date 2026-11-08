import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kopi Senja | Coffee Shop",
  description:
    "Nikmati pengalaman kopi terbaik bersama Kopi Senja.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
