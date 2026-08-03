import type { Metadata } from "next";
import "./globals.css";
import HeaderNavigation from "@/components/header/header";
import FooterSection from "@/components/footer/footer";

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
      <body className="min-h-full flex flex-col">
        <HeaderNavigation />
        <main className="flex-1">{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
