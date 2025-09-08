import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Whatsapp from "@/Components/Whatsapp";

// 1) Viewport must be its own export
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  // Optional extras you can add:
  // maximumScale: 5,
  // userScalable: true,
  // viewportFit: 'cover',
  // themeColor: '#000000',
};

// 2) Keep the rest in `metadata` (without viewport)

export const metadata = {
  metadataBase: new URL('https://www.royalramstourism.com'),
  title: {
    default: 'Royal Rams Tourism LLC | Dubai and Abu Dhabi Tours Services',
    template: '%s | Royal Rams Tourism LLC',
  },
  description:
    'Royal Rams Tourism delivers premium UAE travel with luxury transport & personalized tours, creating unforgettable experiences for every explorer.',
  keywords: ['Royal Rams Tourism LLC'],
  authors: [{ name: 'SW-THEMES' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.royalramstourism.com/',
    siteName: 'Royal Rams Tourism LLC - +971507904850',
    title: 'Royal Rams Tourism LLC',
    description:
      'Royal Rams Tourism delivers premium UAE travel with luxury transport & personalized tours, creating unforgettable experiences for every explorer.',
    images: [
      {
        url: 'https://www.royalramstourism.com/img/logo/royal-rams-tourism-llc1727532724.webp',
        width: 380,
        height: 379,
        type: 'image/png',
        alt: 'Royal Rams Tourism LLC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@RoyalRamsTourism',
    title: 'Royal Rams Tourism LLC',
    description:
      'Royal Rams Tourism delivers premium UAE travel with luxury transport & personalized tours, creating unforgettable experiences for every explorer.',
    images: [
      'https://www.royalramstourism.com/img/logo/royal-rams-tourism-llc1727532724.webp',
    ],
  },
  other: {
    'article:publisher':
      'https://www.facebook.com/people/Royal-Rams-Tourism-LLC/61560255591622/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },

  //USE the below code to activate /public/site.webmanifest
  // manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Royal Rams Tourism LLC",
    url: "https://www.royalramstourism.com",
    logo:
      "https://www.royalramstourism.com/img/logo/royal-rams-tourism-llc1727532724.webp",
    areaServed: ["Dubai", "Abu Dhabi", "United Arab Emirates"],
    sameAs: [
      "https://www.facebook.com/people/Royal-Rams-Tourism-LLC/61560255591622/",
    ],
    telephone: "+971507904850",
    description:
      "Premium UAE travel with luxury transport and personalized tours.",
  };

  return (
    <html lang="en">

      <head>
        <link rel="icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
      </head>


      <body className="flex flex-col min-h-screen">

        <div className="h-full w-full bg-blue-900 flex items-center justify-center text-white p-2">
          <h1>50% off on all tour packages! <span className="underline"><a href="/packages">Book Now</a></span></h1>
        </div>

        <header className="sticky top-0 z-50"><Header /></header>

        <main className="flex-grow min-h-screen">{children}</main>

        <footer className="bottom-0"><Footer /></footer>

        <Whatsapp/>

      </body>


    </html>
  );
}
