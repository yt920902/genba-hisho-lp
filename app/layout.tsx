import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://genba-hisho-lp.vercel.app"),
  title: {
    default: "現場秘書 | LINEで始める建設業向けAI事務サポート",
    template: "%s | 現場秘書",
  },
  description:
    "現場秘書は、LINE相談から案件整理、返信案、見積補助、書類作成までを支える建設業・設備業・リフォーム業向けAI事務サポートです。",
  keywords: [
    "現場秘書",
    "建設業",
    "見積書",
    "請求書",
    "契約書",
    "AI事務",
    "LINE相談",
    "案件管理",
    "リフォーム業",
    "設備業",
  ],
  openGraph: {
    title: "現場秘書 | LINEで始める建設業向けAI事務サポート",
    description:
      "LINE相談から案件整理、返信案、見積補助まで。建設業の事務作業をAIと人のサポートで軽くします。",
    siteName: "現場秘書",
    locale: "ja_JP",
    type: "website",
    url: "https://genba-hisho-lp.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "現場秘書 | LINEで始める建設業向けAI事務サポート",
    description:
      "LINE相談から案件整理、返信案、見積補助まで支える建設業向けAI事務サポート。",
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
