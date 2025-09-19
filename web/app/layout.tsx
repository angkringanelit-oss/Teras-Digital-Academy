import type { Metadata } from 'next';
import './globals.css';
import Layout from '../src/components/Layout';
import { Poppins, Nunito } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const nunito = Nunito({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TerDig Academy',
  description: 'Bimbel Digital & Sanggar Seni Pertama yang Pakai AI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable} ${nunito.variable}`}>
      <head>
      </head>
      <body className="font-body bg-white text-slate-800 antialiased">
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}