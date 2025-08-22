'use client'

import { useState } from "react";

export default function Header() {

    const [head, setHead] = useState(false)
    
    const handleClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    };

    return(
        <>
            <div className='hidden top-0 bg-white shadow-2xs items-center xl:flex w-full justify-between px-0 xl:px-20'>

                <a href="/" className='flex justify-center items-center p-4 w-50'>
                    <img className='object-fill' src="/logo.png" alt="" />
                </a>

                <nav>
                    <ul className='hidden xl:flex gap-3 text-black'>
                        <li className='flex shrink-0 hover:bg-amber-400 px-2 py-1 rounded-[10px] transition-all duration-400'><a href="/tours/dubai-city-tour">Dubai City Tour</a></li>
                        <li className='flex shrink-0 hover:bg-amber-400 px-2 py-1 rounded-[10px] transition-all duration-400'><a href="/tours/abu-dhabi-city-tour">Abu Dhabi City Tour</a></li>
                        <li className='flex shrink-0 hover:bg-amber-400 px-2 py-1 rounded-[10px] transition-all duration-400'><a href="/tours/sightseeing-tours">Sightseeing Tours</a></li>
                        <li className='flex shrink-0 hover:bg-amber-400 px-2 py-1 rounded-[10px] transition-all duration-400'><a href="/tours/sea-odyssey">Sea Odyssey</a></li>
                        <li className='flex shrink-0 hover:bg-amber-400 px-2 py-1 rounded-[10px] transition-all duration-400'><a href="/tours/desert-safari">Desert Safari</a></li>
                        <li className='flex shrink-0 hover:bg-amber-400 px-2 py-1 rounded-[10px] transition-all duration-400'><a href="/tours/combo-adventures">Combo Adventures</a></li>
                        <li className='flex shrink-0 hover:bg-amber-400 px-2 py-1 rounded-[10px] transition-all duration-400'><a href="/blog">Blogs</a></li>
                    </ul>
                </nav>

                <div className='hidden md:flex gap-4 justify-center items-center'>
                    <a href="tel:+971507904850" className='flex justify-center items-center p-2 bg-transparent border-2 size-10 rounded-full'><img src="/phone.png" alt="" /></a>
                    <div className='flex justify-center items-center p-2 bg-transparent border-2 size-10 rounded-full'><img src="/cart.png" alt="" /></div>
                </div>
            </div>

            <div className='xl:hidden top-0 z-40 bg-white shadow-2xs items-center flex w-full justify-between pr-4'>
                <div className='flex justify-center items-center p-4 w-50'>
                    <img className='object-fill' src="/logo.png" alt="" />
                </div>

                <div onClick={() => setHead(true)} className='flex gap-4 justify-center items-center'>
                    <div className='flex justify-center items-center bg-transparent size-9'><img src="/menu.png" alt="" /></div>
                </div>
            </div>

            {
                head &&

                <div className='fixed top-0 bg-white h-full w-full z-999999'>

                    <div className='my-0 h-full flex flex-col justify-between'>
                        <div>
                            <div className='flex justify-between pl-2'>
                                <img className='w-50 object-contain' src='/logo.png' alt="" />
                                <div className='px-8 py-10'>
                                    <svg onClick={() => setHead(false)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" fill='#00000' height="40" viewBox="0 0 50 50">
                                        <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                                    </svg>
                                </div>
                            </div>

                            <div className='bg-white/50 backdrop-blur-2xl rounded-2xl shadow-2xl m-4'>
                                <nav className='p-10'>
                                    <ul className='flex flex-col text-gray-500 text-[18px] font-bold gap-10 uppercase'>
                                        <li onClick={handleClick}><a href="/tours/">Home</a></li>
                                        <li onClick={handleClick}><a href="/tours/dubai-city-tour">Dubai City Tour</a></li>
                                        <li onClick={handleClick}><a href="/tours/abu-dhabi-city-tour">Abu Dhabi City Tour</a></li>
                                        <li onClick={handleClick}><a href="/tours/sightseeing-tours">Sightseeing Tours</a></li>
                                        <li onClick={handleClick}><a href="/tours/sea-odyssey">Sea Odyssey</a></li>
                                        <li onClick={handleClick}><a href="/tours/desert-safari">Desert Safari</a></li>
                                        <li onClick={handleClick}><a href="/tours/combo-adventures">Combo Adventures</a></li>
                                        <li onClick={handleClick}><a href="/blog">Blogs</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div className='p-4 mb-5 text-gray-500'>

                            <div>
                                <div className="flex flex-col gap-1">
                                    <p>Got a question? Contact: </p>
                                    <a className="text-yellow-500" href="mailto:info@royalramstourism.com">info@royalramstourism.com</a>
                                </div>

                                <p>All rights reserved &copy; 2025 Royal Rams Tourism L.L.C</p>
                            </div>
                        </div>
                    </div>

                </div>
            }
        </>
    )
}