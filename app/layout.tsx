import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";


const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // Add required weights
  variable: '--font-josefin-sans', // Optional: for CSS custom property
});

export const metadata: Metadata = {
  title: 'Boycott – Raise Your Voice for Palestine by What You Don’t Buy',
  description: 'Discover and support ethical alternatives. Boycott lets you take a stand by the products you avoid.',
  icons: {
    icon: '/favicon.ico', // or '/favicon.png'
  },
  keywords: ['boycott', 'ethical shopping', 'boycott items', 'ethical consumerism', 'boycott list'],
  metadataBase: new URL('https://boycottitems.com'),
  openGraph: {
    title: 'Boycott – Raise Your Voice for Palestine by What You Don’t Buy',
    description: 'Discover and support ethical alternatives. Boycott lets you take a stand by the products you avoid.',
    url: 'https://boycottitems.com',
    siteName: 'Boycott',
    // images: [
    //   {
    //     url: 'https://boycottitems.com/og-image.jpg', // Replace with your actual OG image
    //     width: 1200,
    //     height: 630,
    //     alt: 'Boycott Items – Ethical Choices',
    //   },
    // ],
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Boycott – Raise Your Voice by What You Don’t Buy',
  //   description: 'Discover and support ethical alternatives. Boycott lets you take a stand by the products you avoid.',
  //   images: ['https://boycottitems.com/og-image.jpg'],
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefinSans.className}
      >
        {children}
      </body>
    </html>
  );
}
