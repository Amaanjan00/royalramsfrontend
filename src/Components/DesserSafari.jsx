'use client'
import { useEffect, useRef, useState } from "react"
import Button from "./Button"
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

export default function DesserSafari() {

    const [packages, setPackages] = useState([])

    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
        scrollRef.current.scrollBy({
            left: direction === "left" ? -200 : 200,
            behavior: "smooth",
        });
        }
    };

    useEffect(() => {
        fetch('/packages.json')
        .then((res) => res.json())
        .then((data) => setPackages(data))
        .catch((err) => console.log("Error in fetching Packages", err))
    }, [])

    return(
        <>
            <div className="relative flex flex-col gap-5 max-w-full">
                <div className="flex gap-3 items-center justify-center md:pt-15">
                    <img className="h-15 w-15" src="/desertsafari.png" alt="" />
                    <h1 className="text-2xl xl:text-5xl text-center font-bold">Desert Safari</h1>
                </div>

                <button onClick={() => scroll("left")} className="bg-purple-400 h-10 w-10 rounded-full absolute left-0 bottom-70 ml-5 flex justify-center items-center"><ArrowLeftCircle /></button>

                <div ref={scrollRef} className="flex gap-10 overflow-x-scroll snap-x snap-mandatory scrollbar-hide p-5 pb-15 md:px-20 md:pb-20">

                    {packages.map((p, index) => {
                    return(
                        <div key={index} className="shrink-0 h-fit w-fit xl:w-100 rounded-2xl flex flex-col overflow-clip shadow-2xl">
                        <img className="object-cover aspect-auto h-70" src="https://placehold.co/600x400" alt="" />
                        <div className="p-5 flex flex-col gap-3">
                            <h2 className="text-2xl">{p.package}</h2>
                            <p className="text-[18px]">{p.description}</p>
                            <div className="flex justify-between items-center">
                            <Button link={`/packages/${p.id}`}/>
                            <p className="font-bold text-2xl text-green-500">AED {p.price}</p>
                            </div>
                        </div>
                        </div>
                    )
                    })}
                </div>

                <button onClick={() => scroll("right")} className="bg-purple-400 h-10 w-10 rounded-full absolute right-0 bottom-70 mr-5 flex justify-center items-center"><ArrowRightCircle /></button>

            </div>
        </>
    )
}