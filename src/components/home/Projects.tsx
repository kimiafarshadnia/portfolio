'use client'
import { useEffect } from 'react';
import { CardProject } from "Components";
import projects from '../../data/project.json';
import useEmblaCarousel from 'embla-carousel-react'

export const Projects = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel()

    useEffect(() => {
        if (emblaApi) {
          console.log(emblaApi.slideNodes())
        }
      }, [emblaApi])

    return (
        <div className="container mx-auto">
            <div className="flex flex-col justify-center gap-8">
                <h2 className="px-5 bg-lavender bg-clip-text text-transparent font-bold text-3xl sm:text-5xl pb-2 w-fit">Projects</h2>
                <p className="px-5 text-primary font-normal md:w-[600px] dark:text-white">Explore my diverse range of front-end projects, showcasing creativity and technical expertise.</p>

               
                    <div className="embla" ref={emblaRef}>
                        <div className="embla__container pl-5 sm:pl-0">
                            {
                                projects.map((post) => (
                                    <div key={post.id} className='embla__slide'>
                                        <CardProject project={post} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                
            </div>
        </div>
    )
}