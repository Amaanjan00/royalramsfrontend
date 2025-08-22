// app/blog/[blogpost]/page.jsx
'use client';

import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

export default function BlogPost() {
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
  const selected = useMemo(() => 
    posts.find(p => String(p.id) === String(blogpost)) || null,
    [posts, blogpost]
  );

  if (!selected) return <div>Loading…</div>;

  return (
    <>
        <div className='py-5 xl:px-30 px-5 flex flex-col gap-5'>
            <div>
                <h1 className='text-4xl'>{selected.title}</h1>
            </div>

            <div className='flex flex-col gap-4'>

                <div className="flex gap-3">
                    {selected.tags.map((tag) => {
                        return(
                            <button key={tag} className="bg-blue-500 px-2 py-1 text-white rounded-[10px]">{tag}</button>
                        )
                    })}
                </div>

            </div>
            
            <p>{selected.body}</p>
        </div>
    </>
  );
}
