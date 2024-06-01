import Link from 'next/link';
import { Menu } from 'Constants';
export const Footer = () => {
    return (
        <footer>
            <div className='container mx-auto flex flex-col gap-7'>
                <div className='h-1 bg-[#2A2A2A]'></div>
                <div className='w-full py-5 flex justify-between items-center'>
                    <div>
                        brand
                    </div>
                    <div className='flex flex-col items-center'>
                        <nav>
                            <ul className='flex items-center gap-16'>
                                {
                                    Menu.map((item) => (
                                        <li key={item.id} className='text-base font-semibold'>
                                            <Link href={item.address}>{item.title}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                        <div>
                            <ul>
                                <li className='bg-lavender flex items-center justify-center rounded-full w-9 h-9'>
                                   
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
