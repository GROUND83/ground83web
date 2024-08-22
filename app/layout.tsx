import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "그라운드83 | digital agency",
  description: "digital agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="bg-black">
      <Head>
        <meta
          name="google-site-verification"
          content="k0n57kkvjhQM0_FIrGZ__zlXC9DQrHYd0IoIhoSmdEU"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
