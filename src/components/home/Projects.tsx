'use client'
import 'swiper/css';
import 'swiper/css/free-mode';
import { CardProject } from "Components"
import { Pagination } from 'swiper/modules';
import projects from '../../data/project.json';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Project = () => {

    const breakpoints = {
        0: {
            slidesPerView: 1.3,
            spaceBetween: 20
        },
        450: {
            slidesPerView: 2.2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1020: {
            slidesPerView: 3.5,
            spaceBetween: 20
        }
    };

    return (
        <div className="container mx-auto" id='works'>
            <div className="flex flex-col items-center justify-center text-center gap-6">
                <h2 className="bg-lavender bg-clip-text text-transparent font-bold text-3xl sm:text-5xl pb-2">Projects</h2>
                <p className="px-5 text-primary font-normal md:w-[600px] dark:text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, mollitia sit incidunt exercitationem odit .</p>


                <Swiper
                    breakpoints={breakpoints}
                    centeredSlides={false}
                    spaceBetween={16}
                    pagination={{
                        type: 'fraction',
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <CardProject project={project} />
                        </SwiperSlide>

                    ))}
                </Swiper>


            </div>
        </div>
    )
}