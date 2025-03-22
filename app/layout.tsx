import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import MenuBar from "../components/MenuBar";
import "./globals.css";
import { AppBar, Box, Container, CssBaseline, Toolbar, Typography } from '@mui/material';

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
  title: "ビバリーママのENGLISHカフェ",
  description: "ビバリーママのENGLISHカフェの公式サイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="title" content={metadata.title as string ?? ''} />
        <meta name="description" content={metadata.description ?? ''} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CssBaseline />
        <AppBar position="static" className="header" sx={{ backgroundColor: '#ffe4e1' }} elevation={1}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
              <Link href="/" className="fuwamoko">ビバリーママ<span className="small-font">の</span><span className="fuwamoko2">ＥＮＧＬＩＳＨ</span><span className="fuwamoko"></span>カフェ<span className="small-font">へ</span>ようこそ</Link>
            </Typography>
            <MenuBar className="corporate-logo" />
          </Toolbar>
        </AppBar>
        <Container component="main" sx={{ py: 4 }}>
          {children}
        </Container>
        <Box component="footer" sx={{ py: 4, textAlign: 'center', bgcolor: 'background.paper' }}>
          <Typography variant="body2" color="textSecondary">
            © 2025 ビバリーママのENGLISHカフェ. All rights reserved.
          </Typography>
        </Box>
      </body>
    </html>
  );
}