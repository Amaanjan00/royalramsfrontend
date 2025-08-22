export default function ToursPagesLayout({children}) {
    return (
        <>
            <div>
                <div className="min-h-30 min-w-full mb-5 flex justify-center items-end bg-amber-500">
                    <h1 className="text-6xl p-10 font-bold text-white">Explore More. Spend Less. Book Instantly.</h1>
                </div>

                {children}
            </div>
        </>
    )
}