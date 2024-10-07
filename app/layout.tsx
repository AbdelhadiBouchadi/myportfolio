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
  title: 'Abdelhadi Portfolio',
  description: 'FullStack Web Developer Based in Morocco',
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
