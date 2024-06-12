'use client'
import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'Constants';
import { MobileMenu, Icon } from 'Components';
import { usePathname } from 'next/navigation';
import { faCloudMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
	// const { isActiveScroll } = useScroll();
	// const [openMenu, toggleMenu] = useToggleState(false);
	// const handleChange = (value: string) => {
	// 	console.log(`selected ${value}`);
	// };
	const [darkMode, setDarkMode] = useState(false)
	const pathname = usePathname();
	const darkModeHandler = () => {
		setDarkMode(!darkMode)
		document.body.classList.toggle("dark");
	}
	return (
		<header className='shadow-lg bg-white dark:bg-darkMode dark:text-white w-full fixed z-20'>
			<div className='container mx-auto'>
				<div className='w-full py-5 flex justify-between items-center'>
					<div className='pl-5 md:pl-0 flex items-center gap-4'>
						<span>brand</span>

						<div className='lg:hidden'>
							<div className='flex flex-col items-center justify-center'>
								<button type='button'
									onClick={darkModeHandler}
									className='bg-lavender rounded-full flex items-center justify-center p-1 w-8 h-8'
								>
									<Icon iconName={darkMode ? faSun : faCloudMoon} size='lg' className="text-white" />
								</button>
							</div>
						</div>
					</div>
					<nav className='hidden lg:block'>
						<ul className='flex items-center gap-16'>
							{
								Menu.map((item) => {
									const isActive = pathname.endsWith(item.address)
									return (
										< li key={item.id} className='text-base font-semibold'>
											<Link href={item.address} className={`${isActive ? 'bg-lavender bg-clip-text text-transparent' : ''}`}>	{item.title}
											</Link>
										</li>
									)
								})
							}
						</ul>
					</nav>

					<MobileMenu />
				</div>
				<div className='hidden lg:block pl-5 md:pl-0 absolute'>
					<div className='flex flex-col items-center justify-center'>
						<div className='h-10 border-l border-dashed border-sky-600 w-px border-2 '></div>
						<button type='button'
							onClick={darkModeHandler}
							className='bg-lavender rounded-full flex items-center justify-center p-1 w-11 h-11'
						>
							<Icon iconName={darkMode ? faSun : faCloudMoon} size='xl' className="text-white" />
						</button>
					</div>
				</div>
			</div>
		</header >
	);
};
