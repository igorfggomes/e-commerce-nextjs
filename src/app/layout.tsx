import type { Metadata } from 'next';
import { Saira } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header/header';
import { DefaultProviders } from '@/components/default-providers';

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Torcedores.com',
  description:
    'E-commerce built with NextJS and TypeScript to consume GraphQL API.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <DefaultProviders>
          <Header />
          {children}
        </DefaultProviders>
      </body>
    </html>
  );
}
