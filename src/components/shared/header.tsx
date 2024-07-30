'use client'
import Link from 'next/link';
import { Menu } from 'Constants';
import { usePathname } from 'next/navigation';
import { MobileMenu, ThemeToggle } from 'Components';

export const Header = () => {
	const pathname = usePathname();
	return (
		<header className='shadow-lg bg-transparent backdrop-blur-xl dark:text-white w-full fixed top-0 z-40  transition-colors duration-500'>
			<div className='container mx-auto'>
				<div className='w-full py-4 flex justify-between items-center'>
					<div className='pl-5 md:pl-0 flex items-center gap-4'>
						<Link href='/' className='w-auto flex flex-shrink-0 '>
							<img src="/images/logo.png" alt="logo" className='w-10 h-10' />
						</Link>
						<div className='lg:hidden'>
							<ThemeToggle />
						</div>
					</div>

					<nav className='hidden lg:block'>
						<ul className='flex items-center gap-16'>
							{
								Menu.map((item) => {
									const isActive = pathname.endsWith(item.address)
									return (
										< li key={item.id} className='text-base font-semibold'>
											<Link href={item.address} className='dark:text-gray-300 hover:text-black text-gray-500 hover:dark:text-white duration-200'>
												{item.title}
											</Link>
										</li>
									)
								})
							}
						</ul>
					</nav>

					<div className='hidden lg:block pr-5 md:pr-0'>
						<ThemeToggle />
					</div>
					
					<MobileMenu />
				</div>
			</div>
		</header >
	);
};
