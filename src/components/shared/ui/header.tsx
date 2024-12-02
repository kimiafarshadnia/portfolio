"use client";

import { useMenu } from "Hooks";
import { MobileMenu, NavigationLink, ThemeToggle, LocaleSwitcher } from "Components";

export const Header = () => {
	const menu = useMenu();
	return (
		<header className="sticky top-0 z-50 w-full bg-white dark:bg-darkMode shadow-lg dark:text-white duration-500">
			<div className="container mx-auto">
				<div className="flex justify-between items-center w-full py-4">
					<div className="flex items-center gap-4 pl-5 md:pl-0">
						<NavigationLink href="/">
							<img src="/images/logo.svg" alt="logo" className="w-10 h-10" />
						</NavigationLink>
					</div>
					<nav className="hidden sm:block">
						<ul className="flex items-center gap-16">
							{menu.map((item) => {
								return (
									<li key={item.id} className="text-base font-semibold">
										<NavigationLink
											href={item.address}
										>
											{item.title}
										</NavigationLink>
									</li>
								);
							})}
						</ul>
					</nav>
					<div className="flex gap-3 items-center pr-5 md:pr-0">
						<LocaleSwitcher />
						<span className="text-gray-200 dark:text-gray-500">|</span>
						<div>
							<ThemeToggle />
						</div>
					</div>
					<MobileMenu />
				</div>
			</div>
		</header>
	);
};
