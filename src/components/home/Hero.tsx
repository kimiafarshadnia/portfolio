import React from 'react';
import Link from 'next/link';
import {useTranslations} from 'next-intl';

export const Hero = () => {
    const t  = useTranslations();
    return (
        <div className="container mx-auto px-5 flex justify-center">
            <div className='hidden sm:flex w-full absolute justify-center items-center top-[20rem]'>
                <div className='w-[300px] h-[300px] rounded-full bg-lavender opacity-50 blur-2xl relative animation2'></div>
            </div>
            <div className="w-full flex flex-col xl:flex-row-reverse gap-12 items-center justify-center xl:justify-between text-center xl:text-start z-10">
                <div className="flex items-center justify-center w-[250px] h-[250px] xl:w-[500px] xl:h-[500px] flex-shrink-0">
                    <img src="/images/developer.png" alt="developer" className="rounded-full xl:rounded-lg" />
                </div>
                <div className='flex flex-col gap-10'>
                    <h1 className="w-full pb-6 text-center xl:text-left text-5xl sm:text-6xl xl:text-7xl font-bold bg-lavender bg-clip-text text-transparent capitalize">{t('hero.title')}</h1>
                    <p className="xl:w-[500px] text-primary xl:text-lg font-normal dark:text-white">
                        {t('hero.description')}
                    {/* <span className="text-secondary dark:text-white capitalize font-medium text-center xl:text-left">front-end developer</span> */}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-normal xl:items-start gap-6">
                        <Link href={'#get-in-touch'}>
                            <button type="button" className="w-fit xl:w-[223px] text-xs sm:text-sm xl:text-base bg-black dark:bg-white hover:bg-gray-900 hover:dark:bg-gray-200 rounded-s-full rounded-e-full dark:text-black text-white font-semibold py-2 xl:py-3 px-6 transition-all duration-500">{t('button.getintouch')}</button>
                        </Link>

                        <button type="button" className="w-fit xl:w-[223px] text-xs sm:text-sm xl:text-base rounded-s-full rounded-e-full border border-secondary dark:border-white font-semibold py-2 xl:py-3 px-6 transition-all duration-500 bg-[#FFFFFF1A] hover:bg-[#FFFFFF4D]">
                            <a href="/kimiaFarshadnia.pdf" download="cv">{t('button.download')}</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}