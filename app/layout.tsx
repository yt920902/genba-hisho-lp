import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://genba-hisho-lp.vercel.app"),
  title: {
    default: "現場秘書 | 建設業向けAI事務サポート",
    template: "%s | 現場秘書",
  },
  description:
    "現場秘書は、建設業・設備業・リフォーム業向けに見積・請求・契約まわりの事務作業をラクにするAI事務サポートサービスです。",
  keywords: [
    "現場秘書",
    "建設業",
    "見積書",
    "請求書",
    "契約書",
    "AI事務",
    "リフォーム業",
    "設備業",
  ],
  openGraph: {
    title: "現場秘書 | 建設業向けAI事務サポート",
    description:
      "建設業の事務作業を、AIと人のサポートで軽くする。見積書・請求書・契約書・顧客管理の悩みをLINEで無料相談。",
    siteName: "現場秘書",
    locale: "ja_JP",
    type: "website",
    url: "https://genba-hisho-lp.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "現場秘書 | 建設業向けAI事務サポート",
    description:
      "建設業・設備業・リフォーム業向けのAI事務サポートサービス。",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F2742",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
