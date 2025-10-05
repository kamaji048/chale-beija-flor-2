import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chalé Beija-Flor – refúgio aconchegante",
  description: "O Chalé Beija-Flor é um refúgio roxinho e acolhedor cercado pela natureza. Reserve pelo WhatsApp ou Booking.",
  openGraph: {
    title: "Chalé Beija-Flor",
    description: "Refúgio aconchegante na natureza, perfeito para relaxar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-[--cream] text-[--foreground]">
        {children}
      </body>
    </html>
  );
}
