'use client';

import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

export default function BlogsLayout({children}) {

    const { blogpost } = useParams();        // ← get dynamic route param (string)
      const [posts, setPosts] = useState([]);
    
      // fetch all posts once (demo)
      useEffect(() => {
        fetch('https://dummyjson.com/posts')
          .then(res => res.json())
          .then(data => setPosts(data.posts))
          .catch(err => console.error('Dummy Data fetching error', err));
      }, []); // ← run once
    
      // pick the one post by id
      const selected = useMemo(
        () => posts.find(p => String(p.id) === String(blogpost)) || null,
        [posts, blogpost]
      );
    
      if (!selected) return <div>Loading…</div>;

    return(
        <>
            <div className='xl:px-30 px-5 py-4 text-gray-500 flex gap-1'>
                <a className='focus:text-red-600' href="/blog">blogs</a>
                <span>{">"}</span>
                <a className='focus:text-red-600' href="">{selected.title}</a>
            </div>

            <div>
                {children}
            </div>
        </>
    )
}