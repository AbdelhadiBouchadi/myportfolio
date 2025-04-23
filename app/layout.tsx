import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './provider';
import ActiveSectionContextProvider from '@/context/active-section-context';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export const metadata: Metadata = {
  title: "Abdelhadi's Portfolio",
  description:
    'FullStack Web Developer Based in Morocco with expertise in Javascript, Typescript, React, Node.js, Next.js, Tailwind CSS ',
  keywords: [
    'Full Stack Development',
    'Web Development',
    'UI/UX Design',
    'React',
    'Node.js',
    'TypeScript',
    'Next.js',
  ],
  authors: [
    {
      name: 'Abdelhadi',
      url: 'https://www.abdelhadev.com/',
    },
  ],
  creator: 'Abdelhadi',
  publisher: 'Abdelhadi',
  alternates: {
    canonical: 'https://abdelhadev.com',
  },
  openGraph: {
    title: 'Abdelhadev | Portfolio',
    description:
      'FullStack Web Developer Based in Morocco with expertise in Javascript, Typescript, React, Node.js, Next.js, Tailwind CSS ',
    url: 'https://www.abdelhadev.com',
    siteName: "Abdelhadi's Portfolio",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abdelhadi | Fullstack Web Developer Based in Morocco',
        type: 'image/png',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ActiveSectionContextProvider>
            {children}
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
