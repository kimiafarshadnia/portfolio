import React from 'react';
import Link from 'next/link';

export const Hero = () => {
    return (
        <div className="container mx-auto px-5 md:px-0 pt-[150px] flex justify-center">
            <div className='w-full absolute flex justify-center items-center top-[10rem]'>
                <div className='w-[300px] h-[300px] rounded-full bg-lavender opacity-50 blur-2xl relative animation2'></div>
            </div>
            <div className="w-full flex flex-col md:flex-row-reverse gap-12 items-center justify-center md:justify-between text-center md:text-start z-10">
                <div className="flex items-center justify-center w-[250px] h-[250px] md:w-[500px] md:h-[500px] flex-shrink-0">
                    <img src="/images/me.jpg" alt="me" className="rounded-full md:rounded-lg" />
                </div>
                <div className='flex flex-col gap-12'>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-lavender bg-clip-text text-transparent">Welcome to My World</h1>
                    <p className="md:w-[500px] text-primary md:text-lg font-normal dark:text-white">I’m Kimia Farshadnia, a passionate <span className="text-secondary dark:text-white capitalize font-medium text-center md:text-left">front-end developer</span> dedicated to creating beautiful, user-friendly web experiences. Lets build something amazing together.</p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-normal md:items-start gap-6">
                        <Link href={'/get-in-touch'}>
                            <button type="button" className="w-fit md:w-[223px] text-xs sm:text-sm md:text-base bg-black dark:bg-white rounded-s-full rounded-e-full dark:text-black text-white font-semibold py-2 md:py-3 px-6">Get in Touch</button>
                        </Link>

                        <button type="button" className="w-fit md:w-[223px] text-xs sm:text-sm md:text-base bg-transparent rounded-s-full rounded-e-full border border-secondary dark:border-white font-semibold py-2 md:py-3 px-6 transition-all duration-500">
                            <a href="/Farshadnia-CV.pdf" download="cv">Download CV</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}