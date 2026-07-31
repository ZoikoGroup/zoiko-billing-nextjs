import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zoiko Billing | Clarity from invoice to payment",
  description: "Connected invoicing, payments, reconciliation, and reporting for modern finance teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
