import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display"
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Doce Aventuras | Histórias Bíblicas em 3D",
  description:
    "Série animada em 3D com histórias bíblicas doces, alegres e cheias de aventura para TikTok, Instagram e YouTube.",
  openGraph: {
    title: "Doce Aventuras | Histórias Bíblicas em 3D",
    description:
      "Episódios curtos, doces e cheios de alegria que conectam o público às histórias bíblicas de forma leve e divertida.",
    url: "https://agentic-8c81f126.vercel.app",
    siteName: "Doce Aventuras",
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Doce Aventuras | Histórias Bíblicas em 3D",
    description:
      "Episódios rápidos, doces e divertidos que despertam curiosidade para assistir o próximo capítulo.",
    creator: "@doceaventuras"
  }
};

export const viewport = {
  themeColor: "#4BA3FF"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSans.variable} ${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen w-full bg-twilight/50 text-white">{children}</div>
      </body>
    </html>
  );
}
