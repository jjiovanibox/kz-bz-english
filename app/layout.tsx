import type { Metadata } from "next";
import localFont from "next/font/local";
import MenuBar from "../components/MenuBar";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "親しみやすい英会話教室のホームページ",
  description: "親しみやすい英会話教室のホームページ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-light-blue text-dark-gray`}
      >
        <header className="p-4 bg-white shadow-md">
          <h1 className="text-3xl font-bold">ビバリーママのENGLISHカフェ へようこそ！</h1>
          <MenuBar />
        </header>
        <main className="p-4">
          {children}
        </main>
        <footer className="p-4 bg-white shadow-md text-center">
          <p className="text-sm">© 2025 ビバリーママのENGLISHカフェ. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}