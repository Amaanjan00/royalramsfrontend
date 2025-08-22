'use client'
import { useParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

export default function PackageDetails({params}) {

    const {tour} = useParams()
    const [pack, setPack] = useState([])

    useEffect(() => {
        fetch('/packages.json')
        .then((res) => res.json())
        .then((data) => setPack(data))
        .catch((err) => ("Error in fetching dummy data in [tour]/page", err))
    }, [])

    const tourpackages = useMemo(() => 
        pack.find(p => String(p.id) === String(tour)) || null,
        [pack, tour]
    );

    if (!tourpackages) return <div>Loading…</div>;

    return(
        <>
            <div className="xl:px-30 px-5">
                <div className="mb-10">
                    <h1 className="text-3xl font-extrabold">{tourpackages.package}</h1>
                    <h2 className="text-gray-600 border-gray-400 w-fit px-2 py-1 text-[12px] rounded-2xl mt-2 bg-gray-200">Most Booked</h2> 
                </div>

                <div className="hidden bg-white z-10 p-5 h-fit w-full shadow-[0px_1px_64px_-5px_rgba(0,_0,_0,_0.1)] rounded-2xl xl:flex justify-start items-center mb-5">
                    <h1 className="px-10 text-2xl font-bold">{tourpackages.type}</h1>
                    <h1 className="px-10 text-2xl font-bold">{tourpackages.tourduration}</h1>
                    <h1 className="px-10 ml-auto font-extrabold text-4xl text-green-600"><span className="text-red-600">AED</span> {tourpackages.price}</h1>
                </div>

                <div className="w-full h-fit flex flex-col xl:flex-row gap-4 mb-20">
                    <div className="w-full p-5 bg-white shadow-[0px_4px_56px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl flex flex-col gap-5">

                        <div className="w-full h-full">
                            <img className="w-full rounded-2xl" src="https://placehold.co/700x400" alt="" />
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-7">Package Details</h2>
                            <h3 className="text-[20px] font-medium mb-3">Tour Itenarary</h3>
                
                            <div className="mb-7">
                                {tourpackages.itenarary.map((i) => {
                                    return <p key={i} className="mb-2">🟣 {i}</p>
                                })}
                            </div>

                            <p className="text-gray-400 text-[18px]">We will confirm your pickup time after booking. Please provide your hotel details.</p>
                        </div>

                        <div className="bg-white text-[18px] xl:text-2xl shadow-[0px_4px_8px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl p-5">
                            <div className="flex border-b-1 border-gray-200 py-4">
                                <h3 className="pr-10 pl-2">Tour Duration</h3>
                                -
                                <p className="pl-10">{tourpackages.tourduration}</p>
                            </div>
                            <div className="flex border-b-1 border-gray-200 py-4">
                                <h3 className="pr-10 pl-2">Tour Duration</h3>
                                -
                                <p className="pl-10">{tourpackages.freewifi}</p>
                            </div>
                            <div className="flex border-b-1 border-gray-200 py-4">
                                <h3 className="pr-10 pl-2">Tour Duration</h3>
                                -
                                <p className="pl-10">{tourpackages.included}</p>
                            </div>
                            <div className="flex border-b-1 border-gray-200 py-4">
                                <h3 className="pr-10 pl-2">Tour Duration</h3>
                                -
                                <p className="pl-10">{tourpackages.excluded}</p>
                            </div>
                            <div className="flex justify-center gap-5 items-center border-b-1 border-gray-200 py-4">
                                <img className="size-10" src="/suv.png" alt="" />
                                <p className="text-red-500">Travel with SUV</p>
                            </div>
                        </div>

                    </div>


                    <div className="xl:w-140 h-fit p-5 bg-white shadow-[0px_4px_56px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl">
                        <form className="flex flex-col gap-5" action="">

                            <h1 className="px-4 text-2xl text-red-600 font-bold">Enter Your Details</h1>

                            <div className="h-fit px-4 py-2 bg-white shadow-[0px_4px_56px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl">
                                <input
                                    className="w-full focus:outline-none" 
                                    type="text"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div className="h-fit px-4 py-2 bg-white shadow-[0px_4px_56px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl">
                                <input 
                                    className="w-full focus:outline-none" 
                                    type="text"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="h-fit px-4 py-2 bg-white shadow-[0px_4px_56px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl">
                                <input 
                                    className="w-full focus:outline-none" 
                                    type="text"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <div className="h-fit px-4 py-2 bg-white shadow-[0px_4px_56px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl">
                                <input 
                                    className="w-full focus:outline-none" 
                                    type="text"
                                    placeholder="Whatsapp Number"
                                />
                            </div>
                            <div className="h-fit px-4 py-2 bg-white shadow-[0px_4px_56px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl">
                                <input 
                                    className="w-full focus:outline-none" 
                                    type="text"
                                    placeholder="Country"
                                />
                            </div>
                            <div className="h-fit px-4 py-2 bg-white shadow-[0px_4px_56px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl">
                                <input 
                                    className="w-full focus:outline-none" 
                                    type="date"
                                    placeholder="Date of travel"
                                />
                            </div>
                            <div className="h-fit px-4 py-2 bg-white shadow-[0px_4px_56px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl">
                                <input 
                                    className="w-full focus:outline-none" 
                                    type="number"
                                    placeholder="Number of Individuals"
                                />
                            </div>
                            <div className="h-fit px-4 py-2 bg-white shadow-[0px_4px_56px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl">
                                <input 
                                    className="w-full focus:outline-none" 
                                    type="text"
                                    placeholder="Pickup Location"
                                />
                            </div>
                            <div className="h-fit px-4 py-2 bg-white shadow-[0px_4px_56px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl">
                                <textarea
                                    rows={5} 
                                    className="w-full focus:outline-none" 
                                    type="text"
                                    placeholder="Your Message"
                                />
                            </div>

                            <button className="bg-red-600 font-extrabold text-white text-2xl rounded-[10px] py-2">Book Now</button>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}