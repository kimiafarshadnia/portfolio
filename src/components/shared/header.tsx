'use client'
import Link from 'next/link';
import { Menu } from 'Constants';
import { MobileMenu } from './MobileMenu';
export const Header = () => {
	// const { isActiveScroll } = useScroll();
	// const [openMenu, toggleMenu] = useToggleState(false);
	// const handleChange = (value: string) => {
	// 	console.log(`selected ${value}`);
	// };
	

	return (
		<header className='shadow-lg'>
			<div className='container mx-auto'>
				<div className='w-full py-5 flex justify-between items-center'>
					<div className='pl-5 md:pl-0'>
						brand
					</div>
					<nav className='hidden lg:block'>
						<ul className='flex items-center gap-16'>
							{
								Menu.map((item) => (
									<li key={item.id} className='text-base font-semibold'
									>
										<Link href={item.address} className="bg-lavender bg-clip-text text-transparent">	{item.title}
										</Link>
									</li>
								))
							}
						</ul>
					</nav>
					<MobileMenu />
				</div>
			</div>
		</header>
	);
};
