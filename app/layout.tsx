import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const SITE_CONFIG = {
  name: "QRCode Inteligente",
  tagline: "Nunca mais jogue dinheiro fora reimprimindo materiais",
  description: "Mude o destino do seu link quantas vezes quiser sem precisar trocar o QRCode físico. A solução definitiva de QRCodes dinâmicos para o seu negócio.",
} as const

export const CONTACT_LINKS = {
  instagram: "https://instagram.com/autoorcode",
  whatsapp: "https://wa.me/5511999999999",
  termsOfUse: "/termos-de-uso",
  privacyPolicy: "/politica-privacidade",
} as const

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: ["QR Code", "imóveis", "corretores", "placas de venda", "QR dinâmico"],
  authors: [{ name: "Placa QRCode" }],
  icons: {
    icon: "/logo-qrcode.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID!} gtmScriptUrl={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_URL!} />

      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
