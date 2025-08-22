'use client'
import { useEffect, useState } from "react"

export default function Blog() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data.posts))
        .catch((err) => console.log("Dummy Data fetching error", err))
    });

    if (!posts) {
        console.log("No Posts Were Fetched", posts);
    }

    return(
        <>

            <div className="min-h-30 min-w-full mb-5 flex justify-center items-end bg-amber-500">
                <h1 className="text-6xl p-10 font-bold text-white">Blogs</h1>
            </div>

            <div className="flex flex-col gap-5 mt-10">

                <div className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-10 overflow-x-scroll snap-x snap-mandatory scrollbar-hide p-5 pb-15 md:px-20 md:pb-20">
                    {posts.map((p) => {
                        return(
                            <div key={p.id} className="shrink-0 h-fit w-fit xl:w-100 rounded-2xl flex flex-col overflow-clip shadow-2xl">
                                <a href={`/blog/${p.id}`} >

                                    <img className="object-cover aspect-auto h-70" src="https://placehold.co/600x400" alt="" />

                                    <div className="flex flex-col text-[18px] gap-2 px-5 py-5">
                                        <h1 className="min-h-20">{p.title}</h1>
                                        <button className="text-white text-[18px] bg-black px-4 py-1 w-fit rounded-2xl cursor-pointer">Read More</button>
                                    </div>


                                </a>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}