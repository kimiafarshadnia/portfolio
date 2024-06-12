import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';

export const Hero = () => {
    return (
        <div className="container mx-auto px-5 md:px-0 pt-[150px]">
            <div className="w-full flex flex-col gap-12 items-center justify-center text-center">
                <div className="flex items-center justify-center w-[250px] h-[250px] flex-shrink-0">
                    <img src="/images/me.jpg" alt="me" className="w-full h-full rounded-full" />
                </div>
                {/* <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Hello,I’m Kimia Farshadnia')
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .pauseFor(2500)
                            .deleteAll()
                            .callFunction(() => {
                                console.log('All strings were deleted');
                            })
                            .start();
                        }}
                       
                /> */}
                <h1 className="text-5xl sm:text-6xl font-bold bg-lavender bg-clip-text text-transparent">Welcome to My World</h1>
                <p className="md:w-[500px] text-primary md:text-lg font-normal dark:text-white">I’m Kimia Farshadnia, a passionate <span className="text-secondary dark:text-white capitalize font-medium">front-end developer</span> dedicated to creating beautiful, user-friendly web experiences. Lets build something amazing together.</p>

                <div className="flex flex-row items-center justify-center gap-6">
                    <Link href={'/get-in-touch'}>
                        <button type="button" className="w-fit md:w-[223px] text-sm md:text-base bg-black dark:bg-white rounded-s-full rounded-e-full dark:text-black text-white font-semibold py-2 md:py-3 px-6">Get in Touch</button>
                    </Link>

                    <button type="button" className="w-fit md:w-[223px] text-sm md:text-base bg-transparent rounded-s-full rounded-e-full border border-secondary dark:border-white font-semibold py-2 md:py-3 px-6">
                        <a href="/Farshadnia-CV.pdf" download="cv">Download CV</a>
                    </button>
                </div>
            </div>
        </div>
    )
}