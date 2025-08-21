'use client'

export default function Header() {
    
    const handleClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    };

    return(
        <>
            <div className='fixed hidden top-0 z-40 bg-white shadow-2xs items-center xl:flex w-full justify-between px-20'>
                <div className='flex justify-center items-center p-4 w-50'>
                    <img className='object-fill' src="/logo.png" alt="" />
                </div>

                <nav>
                    <ul className='hidden xl:flex gap-6 text-black'>
                        <li className='flex shrink-0'><a href="/">Home</a></li>
                        <li className='flex shrink-0'><a href="/dubai-city-tour">Dubai City Tour</a></li>
                        <li className='flex shrink-0'><a href="/abu-dhabi-city-tour">Abu Dhabi City Tour</a></li>
                        <li className='flex shrink-0'><a href="/sightseeing-tours">Sightseeing Tours</a></li>
                        <li className='flex shrink-0'><a href="/sea-odyssey">Sea Odyssey</a></li>
                        <li className='flex shrink-0'><a href="/desert-safari">Desert Safari</a></li>
                        <li className='flex shrink-0'><a href="/combo-adventures">Combo Adventures</a></li>
                        <li className='flex shrink-0'><a href="/contact">Contact</a></li>
                    </ul>
                </nav>

                <div className='hidden md:flex gap-4 justify-center items-center'>
                    <div className='flex justify-center items-center p-2 bg-transparent border-2 size-10 rounded-full'><img src="/phone.png" alt="" /></div>
                    <div className='flex justify-center items-center p-2 bg-transparent border-2 size-10 rounded-full'><img src="/cart.png" alt="" /></div>
                </div>
            </div>

            <div className='fixed xl:hidden top-0 z-40 bg-white shadow-2xs items-center flex w-full justify-between px-4'>
                <div className='flex justify-center items-center p-4 w-50'>
                    <img className='object-fill' src="/logo.png" alt="" />
                </div>

                <div className='flex gap-4 justify-center items-center'>
                    <div className='flex justify-center items-center bg-transparent size-10'><img src="/menu.png" alt="" /></div>
                    <div className='flex justify-center items-center bg-transparent size-10'><img src="/menu.png" alt="" /></div>
                </div>
            </div>
        </>
    )
}