'use client'
import { useEffect, useState } from 'react';
import { CardProject } from "Components";
import projects from '../../data/project.json';

export const Project = () => {
    
    const allProject = projects.length
    const [posts, setPosts] = useState([])
    const [postPerPage, setPostPerPage ] = useState(4)
    const [page , setPage ] = useState(1)

    useEffect(() => {
        setPosts(projects.slice(0, page * postPerPage))
    }, [page])
    return (
        <div className="container mx-auto" id='works'>
            <div className="flex flex-col items-center justify-center text-center gap-8">
                <h2 className="bg-lavender bg-clip-text text-transparent font-bold text-3xl sm:text-5xl pb-2">Projects</h2>
                <p className="px-5 text-primary font-normal md:w-[600px] dark:text-white">Explore my diverse range of front-end projects, showcasing creativity and technical expertise.</p>

                <div className='relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 px-5'>
                    {
                        posts.map((post) => (
                            <div key={post.id} className='flex justify-center'>
                                <CardProject  project={post} />
                            </div>
                        ))
                    }
                </div>
                <button type="button" className="w-fit md:w-[223px] text-xs sm:text-sm md:text-base bg-black dark:bg-white rounded-s-full rounded-e-full dark:text-black text-white font-semibold py-2 md:py-3 px-6" onClick={()=> setPage(page + 1)}>load more</button>
            </div>
        </div>
    )
}