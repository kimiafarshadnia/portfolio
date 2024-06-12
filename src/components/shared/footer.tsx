import Link from 'next/link';
import { Icon } from 'Components';
import { Menu, Social } from 'Constants';

export const Footer = () => {

    const footerMenu = Menu.filter((item) => item.title !== 'Home');

    return (
        <footer className='dark:bg-darkMode dark:text-white px-5 md:px-0'>
            <div className='container mx-auto flex flex-col gap-6'>
                <div className='bg-[#2A2A2A] h-px'></div>
                <div className='w-full pb-6 flex flex-col-reverse md:flex-row justify-center items-center md:items-baseline md:justify-between gap-6 md:gap-0'>
                    <div className='flex flex-col justify-center items-center md:justify-normal md:items-baseline gap-6'>
                        <div>
                            brand
                        </div>
                        <p>© {(new Date().getFullYear())} All rights reserved</p>
                    </div>
                    <div className='flex flex-col items-center justify-center md:items-end md:justify-end gap-6'>
                        <nav>
                            <ul className='flex items-center gap-6 flex-wrap'>
                                {
                                    footerMenu.map((item) => (
                                        <li key={item.id} className='text-base font-semibold'>
                                            <Link href={item.address} className='hover:scale-110 duration-300 hover:bg-lavender hover:bg-clip-text hover:text-transparent'>{item.title}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                        <div>
                            <ul className='flex items-center gap-6'>
                                {
                                    Social.map((item) => (
                                        <li key={item.id} className='bg-lavender hover:scale-110 duration-300 flex items-center justify-center rounded-full w-9 h-9'>
                                            <Link href={item.href} target='_blank'>
                                                <Icon iconName={item.name} size='lg' className='text-white' />
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
