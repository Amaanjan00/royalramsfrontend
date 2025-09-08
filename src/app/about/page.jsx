

export default function About() {
    return(
        <>
            <div className="bg-white flex flex-col">


                <div className="h-full bg-white flex flex-col-reverse xl:flex-row justify-between items-center xl:gap-10 xl:px-35 xl:py-15">

                    <div className="flex p-5 flex-col gap-3 w-full">
                        <h2 className="uppercase text-gray-600 w-full text-[18px]">About Us</h2>
                        <h1 className="text-4xl font-extrabold text-blue-900 mb-3">Royal Rams Tourism</h1>
                        <p className="text-2xl text-blue-600">At <b>Royal Rams Tourism,</b> we believe travel should be more than ticking destinations off a list</p>
                        <p className="text-[18px]"> 
                            It should be a journey filled with discovery, excitement, and meaningful memories. 
                            Based in the heart of the UAE, we specialize in <b>curated travel experiences</b> that combine world-class attractions, authentic cultural insights, and exceptional service.
                        </p>
                        <p className="text-[18px]">Whether it’s a full-day Abu Dhabi city tour from Dubai, an awe-inspiring visit to the Sheikh Zayed Grand Mosque, a thrilling adventure at Ferrari World, or a serene stroll along the Abu Dhabi Corniche, our tours are designed to connect you with the soul of the Emirates.</p>
                    </div>

                    <div className="w-full flex h-full shadow-2xl xl:shadow-blue-600">
                        <img className="object-cover" src="/aboutustop.png" alt="" />
                    </div>

                </div>

                <div className="flex flex-col-reverse xl:flex-row-reverse xl:pl-25 xl:pr-15 xl:py-20 justify-around items-center w-full xl:gap-20 pb-8 bg-blue-900">
                    <div className="flex w-full flex-col gap-3 p-5 xl:p-0 text-white">
                        <h2 className="text-3xl font-bold text-blue-900 mb-3 rounded-4xl bg-white w-fit px-4 py-2">Our Story</h2>
                        <p>Royal Rams Tourism was founded with a single vision – to transform the way travelers experience the UAE. Our team of passionate travel experts has explored every corner of the region, handpicking landmarks, hidden gems, and exclusive experiences to ensure your journey is seamless and unforgettable.</p>
                        <p>We understand that every traveler is unique. Some seek cultural immersion, others crave adventure, and many want a perfect blend of both. That’s why we offer private SUV tours, small-group excursions, luxury itineraries, and flexible packages – all designed to meet your travel style.</p>
                    </div>
                    <div className="w-full flex h-full">
                        <img className="w-full h-full object-cover" src="/aboutustop.png" alt="" />
                    </div>
                </div>

                <div className="flex flex-col gap-3 xl:pl-25 xl:pr-15 xl:py-5">
                    <h2 className="xl:text-7xl text-5xl font-bold text-blue-900 text-center mt-15 mb-3">Our Mission & Values</h2>
                    <p className="text-center text-[18px] xl:text-4xl font-bold px-7 text-gray-700">Our mission is to provide affordable luxury and exceptional service while showcasing the UAE’s rich history, modern marvels, and breathtaking landscapes.</p>
                    <div className="mt-5 text-blue-700 uppercase p-5">
                        <ul className="bg-white justify-center flex flex-col gap-3">
                            <li className="flex justify-start items-center gap-3 bg-white hover:bg-amber-400 hover:text-white transition-all duration-300 rounded-2xl p-5 shadow-blue-200 shadow-lg">
                                <img className="size-10" src="/authentic.png" alt="" />
                                <p>Authenticity – Genuine experiences that celebrate Emirati culture and heritage.</p>
                            </li>
                            <li className="flex justify-start items-center gap-3 bg-white hover:bg-amber-400 hover:text-white transition-all duration-300 rounded-2xl p-5 shadow-blue-200 shadow-lg">
                                <img className="size-10" src="/comfort.png" alt="" />
                                <p>Comfort & Convenience – Hassle-free bookings, instant confirmation, and skip-the-line access to popular attractions.</p>
                            </li>
                            <li className="flex justify-start items-center gap-3 bg-white hover:bg-amber-400 hover:text-white transition-all duration-300 rounded-2xl p-5 shadow-blue-200 shadow-lg">
                                <img className="size-10" src="/custom.png" alt="" />
                                <p>Personalization – Tailor-made tours that reflect your interests and pace.</p>
                            </li>
                            <li className="flex justify-start items-center gap-3 bg-white hover:bg-amber-400 hover:text-white transition-all duration-300 rounded-2xl p-5 shadow-blue-200 shadow-lg">
                                <img className="size-10" src="/excellence.png" alt="" />
                                <p>Excellence – A commitment to creating memories that stay with you long after the journey ends.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-3 xl:pl-25 xl:pr-15 xl:py-5 p-5">
                    <h2 className="text-3xl font-bold text-blue-900 mb-3">What We Offer</h2>

                    <div className="inline-flex flex-col xl:flex-row xl:gap-15 gap-10 mb-10 text-[18px]">
                        <div className="flex flex-col gap-3">
                            <a href="/tours/abu-dhabi-city-tour"><h3 className="text-[1.3em] text-white py-2 px-4 mb-3 w-fit bg-blue-900">Abu Dhabi City Tours</h3></a>
                            <p>Step into the cultural heart of the UAE with tours that include:</p>
                            <ul className="list-disc list-inside flex flex-col gap-2">
                                <li>Sheikh Zayed Grand Mosque – An architectural masterpiece of peace and spirituality.</li>
                                <li>Qasr Al Watan Presidential Palace – A journey through history, craftsmanship, and Emirati pride.</li>
                                <li>Emirates Palace & Corniche – Iconic landmarks of elegance and scenic beauty.</li>
                                <li>Ferrari World Yas Island – A thrilling addition for families and adventure seekers.</li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-3">
                            <a href="/tours/desert-safari"><h3 className="text-[1.3em] text-white py-2 px-4 mb-3 w-fit bg-blue-900">Desert Adventures</h3></a>
                            <p>For travelers seeking excitement, our Desert Safari Dubai packages offer:</p>
                            <ul className="list-disc list-inside flex flex-col gap-2">
                                <li>Dune bashing, sandboarding, and camel trekking.</li>
                                <li>Traditional Bedouin-style desert camps with live entertainment.</li>
                                <li>Starlit dining featuring authentic Middle Eastern flavors.</li>
                            </ul>
                        </div>

                    </div>

                    <p className="text-2xl xl:px-40 text-center text-blue-500">Choose from full-day tours from Dubai, private excursions, or combo packages that blend culture, heritage, and entertainment.</p>

                </div>

                <div className="flex w-full flex-col xl:p-15 p-5 gap-3 bg-blue-100 mt-15">
                    <h2 className="text-5xl text-center font-bold text-blue-900 mb-3">Why Choose Us?</h2>
                    <ul className="flex flex-col xl:flex-row gap-5 mt-5">
                        <li className="w-full px-5 font-extrabold text-[18px] border-4 py-2 rounded-2xl border-amber-400">Over 500+ glowing reviews from travelers worldwide.</li>
                        <li className="w-full px-5 font-extrabold text-[18px] border-4 py-2 rounded-2xl border-amber-400">Expertly crafted itineraries with clear inclusions and transparent pricing.</li>
                        <li className="w-full px-5 font-extrabold text-[18px] border-4 py-2 rounded-2xl border-amber-400">Flexible cancellation policies and secure booking options.</li>
                        <li className="w-full px-5 font-extrabold text-[18px] border-4 py-2 rounded-2xl border-amber-400">Passionate travel team dedicated to exceeding expectations.</li>
                    </ul>
                </div>

                <div className="flex flex-col xl:flex-row h-full w-full">
                    <div className="flex w-full flex-col xl:p-15 p-5 gap-3 bg-blue-100">
                        <h2 className="text-3xl font-bold text-blue-900 mb-3">Luxury & VIP Experiences</h2>
                        <p>Enjoy chauffeured transfers, custom itineraries, and VIP entry to key attractions – perfect for honeymooners, business travelers, or those who simply love to travel in style.</p>
                    </div>

                    <div className="flex w-full flex-col xl:p-15 p-5 gap-3 bg-blue-100">
                        <h2 className="text-3xl font-bold text-blue-900 mb-3">Our Promise to You</h2>
                        <p>Traveling with Royal Rams Tourism means more than just sightseeing. It means experiencing the UAE through its stories, traditions, and modern wonders – in a way that feels personal, seamless, and inspiring.</p>
                        <p>Whether it’s your first trip to the Emirates or your fifth, we promise to make it unforgettable.</p>
                    </div>
                </div>

            </div>
            
            <p className="text-white xl:text-center bg-amber-500 text-5xl px-8 py-10 flex flex-col gap-7 text-shadow-2xs font-extrabold">Book your next journey with Royal Rams Tourism <span className="text-2xl">Let’s create memories that last a lifetime.</span></p>
        </>
    )
}