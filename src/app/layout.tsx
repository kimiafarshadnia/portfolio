import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "Components";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kimia Farshadnia | Personal Portfolio",
  description: "Kimia is a Front-End Developer with 5 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.svg" sizes="any" />
      </head>
      <body className="bg-white dark:bg-darkMode dark:text-white overflow-x-hidden scroll-smooth duration-500">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
