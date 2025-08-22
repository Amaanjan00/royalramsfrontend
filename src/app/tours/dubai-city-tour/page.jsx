'use client'
import Button from "@/Components/Button"
import { useEffect, useState } from "react"

export default function DubaiCityTourPage() {

    const [packages, setPackages] = useState([])
    
    useEffect(() => {
        fetch('/packages.json')
        .then((res) => res.json())
        .then((data) => setPackages(data))
        .catch((err) => console.log("Error in fetching Packages", err))
    }, [])

    return(
        <>
            <div className="flex flex-col gap-5 max-w-full">

                <div className="flex gap-3 items-center justify-center md:pt-15">
                    <img className="h-15 w-15" src="/tour.png" alt="" />
                    <h1 className="text-2xl xl:text-5xl text-center font-bold">Dubai City Tour</h1>
                </div>

                <div className="flex gap-10 overflow-x-scroll snap-x snap-mandatory scrollbar-hide p-5 pb-15 md:px-20 md:pb-20">

                    {packages.map((card, index) => {
                    return(
                        <div key={index} className="shrink-0 h-fit w-fit xl:w-100 rounded-2xl flex flex-col overflow-clip shadow-2xl">
                        <img className="object-cover aspect-auto h-70" src="https://placehold.co/600x400" alt="" />
                        <div className="p-5 flex flex-col gap-3">
                            <h2 className="text-2xl">{card.package}</h2>
                            <p className="text-[18px]">{card.description}</p>
                            <div className="flex justify-between items-center">
                            <Button link={`/packages/${card.id}`}/>
                            <p className="font-bold text-2xl text-green-500">AED {card.price}</p>
                            </div>
                        </div>
                        </div>
                    )
                    })}
                </div>

            </div>
        </>
    )
}