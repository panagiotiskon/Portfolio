import { Geist, Geist_Mono, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Panagiotis's Portfolio",
  description: 'Discover my digital playground.',
  openGraph: {
    title: "Panagiotis's Portfolio",
    description: 'Discover my digital playground',
    url: 'https://panagiotis-kontoeidis.com',
    siteName: "Panagiotis's Portfolio",
    images: [
      {
        url: 'https://raw.githubusercontent.com/panagiotiskon/Portfolio/master/public/PK.png',
        width: 1200,
        height: 627,
        alt: "Preview of Panagiotis's Portfolio",
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Panagiotis's Portfolio",
    description: 'Discover my my digital playground',
    images: ['/PK.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="./PK-icon.png" />
        <title>Panagiotis&#39;s Portfolio</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetBrainsMono} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
