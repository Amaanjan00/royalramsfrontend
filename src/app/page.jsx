import ComboAdventures from "@/Components/ComboAdventures";
import DesserSafari from "@/Components/DesserSafari";
import SeaOdyssey from "@/Components/SeaOdyssey";
import SightseeingTours from "@/Components/SightseeingTours";
import Image from "next/image";

export const metadata = {
  // Absolute URLs are safest for canonicals/OG
  title: 'Royal Rams Tourism LLC | Dubai and Abu Dhabi Tours Services',
  description:
    'Royal Rams Tourism delivers premium UAE travel with luxury transport & personalized tours, creating unforgettable experiences for every explorer.',
  alternates: {
    canonical: 'https://www.royalramstourism.com',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.royalramstourism.com',
    siteName: 'Royal Rams Tourism LLC - +971507904850',
    title: 'Royal Rams Tourism LLC | Dubai and Abu Dhabi Tours Services',
    description:
      'Royal Rams Tourism delivers premium UAE travel with luxury transport & personalized tours, creating unforgettable experiences for every explorer.',
    images: [
      {
        // Use a *wide* hero/cover image if you have one (1200×630 recommended)
        url: 'https://www.royalramstourism.com/images/og/home-1200x630.webp',
        width: 1200,
        height: 630,
        alt: 'Luxury UAE tours, transport, and experiences by Royal Rams Tourism',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@RoyalRamsTourism',
    title: 'Royal Rams Tourism LLC | Dubai and Abu Dhabi Tours Services',
    description:
      'Premium UAE travel with luxury transport and personalized tours.',
    images: [
      'https://www.royalramstourism.com/images/og/home-1200x630.webp',
    ],
  },
};

export default function Home() {

  return (
    <>
      <div className="relative h-[75vh] w-full">
        <div className="h-full w-full">
          <video className="h-full w-full object-cover" loop autoPlay muted src="/dubai.mp4" preload="auto"></video>
        </div>
        <div className='absolute top-0 w-full h-full bg-gradient-to-t from-gray-700/90'></div>
        <div className='absolute text-white bottom-0 inset-x-0 p-10 lg:inset-x-20 lg:bottom-20 text-center items-center flex flex-col gap-5'>
            <h1 className='text-4xl uppercase md:normal-case lg:text-5xl font-extrabold'>Your Swift Tour Awaits with</h1>
            <p className='text-[18px] uppercase md:normal-case lg:text-2xl'>Expert Guides & Transportation</p>
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row justify-center items-center">
        <a href='https://www.tripadvisor.com/UserReviewEdit-g295424-d28410378-Royal_Rams_Tourism-Dubai_Emirate_of_Dubai.html'>
          <Image 
            src="/tripadvisor.png"
            alt="Tripadvisor"
            width={300}
            height={100}
            priority
            className="object-contain h-auto w-auto"
          />
        </a>

        <a href="https://www.trustpilot.com/review/royalramstourism.com">
          <Image 
            src="/trustpilot.png"
            alt="Trustpilot"
            width={300}
            height={100}
            priority
            className="object-contain h-auto w-auto"
          />
        </a>
      </div>

      <div className="h-full w-full xl:px-20 py-10 flex justify-center items-center">
        <div className="bg-white flex flex-col xl:flex-row justify-between items-start xl:items-center px-12 py-6 rounded-2xl xl:rounded-full gap-5 md:gap-0 border-amber-400 xl:text-2xl border-5">
          <div className="h-auto w-auto flex justify-center items-center gap-2">
            <img className="h-15 w-15" src="/money.png" alt="" />
            <h2>Unbeatable Prices</h2>
          </div>
          <div className="h-auto w-auto flex justify-center items-center gap-2">
            <img className="h-15 w-15" src="/customer-service.png" alt="" />
            <h2>24/7 Customer Help</h2>
          </div>
          <div className="h-auto w-auto flex justify-center items-center gap-2">
            <img className="h-15 w-15" src="/booking.png" alt="" />
            <h2>Instant Reservation</h2>
          </div>
          <div className="h-auto w-auto flex justify-center items-center gap-2">
            <img className="h-15 w-15" src="/diamond.png" alt="" />
            <h2>Luxury Amenities</h2>
          </div>
          <div className="h-auto w-auto flex justify-center items-center gap-2">
            <img className="h-15 w-15" src="/wifi.png" alt="" />
            <h2>WIFI Comming Soon</h2>
          </div>
        </div>
      </div>

      <SightseeingTours/>
      <SeaOdyssey/>
      <DesserSafari/>
      <ComboAdventures/>

    </>
  );
}
