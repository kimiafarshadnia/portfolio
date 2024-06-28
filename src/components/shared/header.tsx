'use client'
import Link from 'next/link';
import { Menu } from 'Constants';
import { MobileMenu, ThemeToggle } from 'Components';
import { usePathname } from 'next/navigation';


export const Header = () => {

	const pathname = usePathname();

	return (
		<header className='shadow-lg bg-transparent backdrop-blur-xl dark:text-white w-full fixed z-50'>
			<div className='container mx-auto'>
				<div className='w-full py-5 flex justify-between items-center'>
					<div className='pl-5 md:pl-0 flex items-center gap-4'>
						<span>brand</span>
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
											<Link href={item.address} className={`${isActive ? 'bg-lavender font-semibold bg-clip-text text-transparent' : ''}`}>
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
