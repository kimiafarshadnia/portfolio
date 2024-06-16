import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "Components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kimia Farshadnia",
  description: "Kimia Farshadnia Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-darkMode dark:text-white overflow-x-hidden">
        <Header />
        <main>
          <ToastContainer />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
