import Link from 'next/link';
import { Menu } from 'Constants';
import { Icon } from 'Components';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {

    const footerMenu = Menu.filter((item) => item.title !== 'Home');
    const icons = [
        {
            id: 0,
            name: faGithub
        },
        {
            id: 1,
            name: faLinkedinIn
        },
        {
            id: 2,
            name: faTelegram
        },
        {
            id: 3,
            name: faEnvelope
        }
    ]

    return (
        <footer>
            <div className='container mx-auto flex flex-col gap-6'>
                <div className='bg-[#2A2A2A] h-px'></div>
                <div className='w-full py-5 flex flex-col-reverse md:flex-row justify-center items-center md:items-baseline md:justify-between gap-6 md:gap-0'>
                    <div className='flex flex-col justify-center items-center md:justify-normal md:items-baseline gap-6'>
                        <div>brand</div>
                        <p>© {(new Date().getFullYear())} All rights reserved</p>
                    </div>
                    <div className='flex flex-col items-center justify-center md:items-end md:justify-end gap-6'>
                        <nav>
                            <ul className='flex items-center gap-6 flex-wrap'>
                                {
                                    footerMenu.map((item) => (
                                        <li key={item.id} className='text-base font-semibold'>
                                            <Link href={item.address}>{item.title}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                        <div>
                            <ul className='flex items-center gap-6'>
                                {
                                    icons.map((icon) => (

                                        <li key={icon.id} className='bg-lavender flex items-center justify-center rounded-full w-9 h-9'>
                                            <Icon iconName={icon.name} size='lg' className='text-white' />
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
