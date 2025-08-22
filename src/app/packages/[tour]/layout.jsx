'use client';

import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

export default function BlogsLayout({children}) {

    const { tour } = useParams();        // ← get dynamic route param (string)
    const [tours, setTours] = useState([]);
    
    // fetch all posts once (demo)
    useEffect(() => {
      fetch('/packages.json')
        .then(res => res.json())
        .then(data => setTours(data))
        .catch(err => console.error('Dummy Data fetching error', err));
    }, []); // ← run once
  
    // pick the one post by id
    const selected = useMemo(
      () => tours.find(p => String(p.id) === String(tour)) || null,
      [tours, tour]
    );
  
    if (!selected) return <div>Loading…</div>;

    return(
        <>
            <div className='px-5 xl:px-30 py-4 text-gray-500 flex gap-1'>
                <a className='focus:text-red-600' href="/packages">Packages</a>
                <span>{">"}</span>
                <a className='focus:text-red-600' href="">{selected.package}</a>
            </div>

            <div>
                {children}
            </div>
        </>
    )
}