import Link from 'next/link';
import { clx } from 'Utils';
import { Menu } from 'Constants';

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
					<div>
						brand
					</div>
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
				</div>
			</div>
		</header>
	);
};
