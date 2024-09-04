"use client";

import Link from "next/link";
import { Menu } from "Constants";
import { usePathname } from "next/navigation";
import { MobileMenu, ThemeToggle } from "Components";

export const Header = () => {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-50 w-full bg-slate-100/20 dark:bg-slate-800/20 shadow-lg backdrop-filter backdrop-blur-lg dark:text-white duration-500">
			<div className="container mx-auto">
				<div className="flex justify-between items-center w-full py-4">
					<div className="flex items-center gap-4 pl-5 md:pl-0">
						<Link href="/" className="flex flex-shrink-0">
							<img src="/images/logo.svg" alt="logo" className="w-10 h-10" />
						</Link>
						<div className="sm:hidden">
							<ThemeToggle />
						</div>
					</div>
					<nav className="hidden sm:block">
						<ul className="flex items-center gap-16">
							{Menu.map((item) => {
								const isActive = pathname.endsWith(item.address);
								return (
									<li key={item.id} className="text-base font-semibold">
										<Link
											href={item.address}
											className={`duration-200 ${
												isActive
													? "text-black dark:text-white"
													: "text-gray-500 dark:text-gray-300 hover:text-black hover:dark:text-white"
											}`}
										>
											{item.title}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
					<div className="hidden lg:block pr-5 md:pr-0">
						<ThemeToggle />
					</div>
					<MobileMenu />
				</div>
			</div>
		</header>
	);
};
