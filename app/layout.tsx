import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'E-Commerce Store | Quality Products at Best Prices',
  description: 'Browse and shop quality products from our e-commerce store. Discover latest trends, exclusive offers, and fast delivery.',
  keywords: 'e-commerce, products, shopping, online store, buy online',
  metadataBase: new URL('https://ecommerce-store.netlify.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ecommerce-store.netlify.app',
    siteName: 'E-Commerce Store',
    title: 'E-Commerce Store | Quality Products at Best Prices',
    description: 'Browse and shop quality products from our e-commerce store.',
    images: [
      {
        url: 'https://ecommerce-store.netlify.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'E-Commerce Store',
      },
    ],
  },
  robots: 'index, follow',
  creator: 'E-Commerce Store',
  authors: [{ name: 'E-Commerce Store' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a73e8" />
        <link rel="preconnect" href="https://fakestoreapi.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'E-Commerce Store',
              url: 'https://ecommerce-store.netlify.app',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://ecommerce-store.netlify.app?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
