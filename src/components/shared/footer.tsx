import Link from 'next/link';
import { withHttps } from 'Utils';
import { Icon } from 'Components';
import { Menu, Social } from 'Constants';

export const Footer = () => {

    const footerMenu = Menu.filter((item) => item.title !== 'Home');

    return (
        <footer className='dark:bg-darkMode dark:text-white px-5 md:px-0'>
            <div className='container mx-auto flex flex-col gap-6'>
                <div className='bg-gradient-to-r from-[#C6C6C600] via-[#C6C6C6] to-[#C6C6C600] h-px'></div>
                <div className='w-full pb-6 flex flex-col-reverse md:flex-row justify-center items-center md:items-baseline md:justify-between gap-6 md:gap-0'>
                    <div className='flex flex-col justify-center items-center md:justify-normal md:items-baseline gap-6'>
                        <div>
                            brand
                        </div>
                        <p>© {(new Date().getFullYear())} All rights reserved</p>
                    </div>
                    <div>
                        <ul className='flex items-center gap-6'>
                            {
                                Social.map((item) => (
                                    <li key={item.id} className='bg-lavender hover:scale-110 duration-300 flex items-center justify-center rounded-full w-9 h-9'>
                                        <Link href={withHttps(item.href)} target='_blank'>
                                            <Icon iconName={item.name} size='lg' className='text-white dark:text-darkMode' />
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};
