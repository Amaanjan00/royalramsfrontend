import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return(
        <>
        <div className="relative flex flex-col z-50 lg:flex-row lg:justify-between justify-center items-center gap-25 px-10 lg:px-20 py-15 bg-[#001233] text-white">
            <div className='flex lg:flex-row flex-col gap-25 text-[16px] font-bold'>

                <div className="gap-3 flex lg:items-start items-center flex-col">
                    <h1 className='text-[#e09900] text-[18px]'>OUR SERVICES</h1>
                    <ul className='items-center lg:items-start flex flex-col gap-1 text-[16px]'>
                        <li className='hover:text-[#e09900]'><Link href={"/umrahpackage"}>Umrah Packages</Link></li>
                        <li className='hover:text-[#e09900]'><Link href={"/dubaipackage"}>Dubai Packages</Link></li>
                        <li className='hover:text-[#e09900]'><Link href={""}>Flight Booking</Link></li>
                        <li className='hover:text-[#e09900]'><Link href={""}>Visa Assistance</Link></li>
                        <li className='hover:text-[#e09900]'><Link href={"/chaufferservice"}>Chauffeur service</Link></li>
                        <li className='hover:text-[#e09900]'><Link href={""}>Hotel Stay</Link></li>
                        <li className='hover:text-[#e09900]'><Link href={""}>Transport</Link></li>
                        <li className='hover:text-[#e09900]'><Link href={""}>Group Booking</Link></li>
                        <li className='hover:text-[#e09900]'><Link href={""}>24/7 Support</Link></li>
                    </ul>
                </div>

                <div className="gap-3 flex lg:items-start items-center flex-col">
                    <h1 className='text-[#e09900] text-[18px]'>HELP</h1>
                    <ul className='items-center lg:items-start flex flex-col gap-1 text-[16px]'>
                        <li className='hover:text-[#e09900]'><a href="tel:+971521601190">Customer Care</a></li>
                        <li className='hover:text-[#e09900]'><Link href={"/termsandconditions"}>Refund Policy</Link></li>
                        <li className='hover:text-[#e09900]'><Link href={"/termsandconditions"}>Terms & Conditions</Link></li>
                        <li className='hover:text-[#e09900]'><Link href={"/privacypolicy"}>Privacy Poilicy</Link></li>
                    </ul>
                </div>
                
                <div className="gap-3 flex lg:items-start items-center flex-col">
                    <h1 className='text-[#e09900] text-[18px]'>ABOUT</h1>
                    <ul className='items-center lg:items-start flex flex-col gap-1 text-[16px]'>
                        <li className='hover:text-[#e09900]'><Link href={'/contact'}>Contact Us</Link></li>
                        <li className='hover:text-[#e09900]'><Link href={'/about'}>About Us</Link></li>
                        <li className='hover:text-[#e09900]'><Link href={''}>License & Registration</Link></li>
                    </ul>
                </div>

                <div className="gap-3 flex lg:items-start items-center flex-col">
                    <h1 className='text-[#e09900] text-[18px]'>REVIEW US AT</h1>
                    <ul className='items-center lg:items-start flex flex-col gap-1 text-[16px]'>
                        <li className='hover:text-[#e09900]'>
                            <Link href={'/contact'}><img src="/tripadvisor.png" className="w-50" /></Link>
                            <Link href={'/contact'}><img src="/trustpilot.png" className="w-50" /></Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <Image 
                    src="/logo.webp"
                    alt="Royal Rams Tourism"
                    width={300}
                    height={100}
                    priority
                    className="object-contain brightness-0 invert-100"
                />
            </div>
        </div>

        <div className="flex items-center lg:justify-between lg:flex-row flex-col gap-5 mt-[1px] py-5 lg:px-20 bg-[#001233] text-gray-400 text-[14px]">
            <div className="flex lg:flex-row flex-col items-center gap-1">
                <p>Got a question? Contact: </p>
                <a className="text-[#e09900]" href="mailto:info@royalramstourism.com">info@royalramstourism.com</a>
            </div>

            <p>All rights reserved &copy; 2025 Royal Rams Tourism L.L.C</p>
        </div>
        </>
    )
}