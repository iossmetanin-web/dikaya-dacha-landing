import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Дикая Дача — Участки и дома рядом с Екатеринбургом",
  description:
    "Земельные участки в сосновом лесу всего в 52 км от Екатеринбурга. Дома из контейнеров под ключ. Тихое место, чистый воздух, природа.",
  keywords: [
    "участки",
    "Екатеринбург",
    "дача",
    "дом из контейнеров",
    "СНТ",
    "сосновый лес",
    "земля",
  ],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Дикая Дача — Ваш участок рядом с природой",
    description:
      "Земельные участки от 350 000 ₽ и дома от 1 250 000 ₽ в сосновом лесу, 52 минуты от Екатеринбурга",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${dmSans.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}