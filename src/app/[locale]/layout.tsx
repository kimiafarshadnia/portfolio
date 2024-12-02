import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "Components";
import { ReactNode } from 'react';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kimia Farshadnia | Personal Portfolio",
  description: "Kimia is a Front-End Developer with 5 years of experience.",
}

type Props = {
  children : ReactNode;
  params: {locale : string}
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  const messages = await getMessages();
  return (
    <html lang={locale} translate="no">
      <head>
        <link rel="icon" href="/images/logo.svg" sizes="any" />
      </head>
      <body className="bg-white dark:bg-darkMode dark:text-white overflow-x-hidden scroll-smooth duration-500">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className='flex flex-col justify-between h-lvh'>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
