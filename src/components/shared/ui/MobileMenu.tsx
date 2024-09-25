'use client';

import * as React from 'react';
import { useMenu } from "Hooks";
import { useState } from "react";
import { MenuItem } from 'Types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { usePathname } from 'next/navigation';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Icon, NavigationLink, ThemeToggle } from 'Components';

type Anchor = 'left';

export const MobileMenu = () => {
    const menu = useMenu();
    const pathname = usePathname();
    const [state, setState] = useState({
        left: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className="dark:bg-darkMode"
        >

            <ThemeToggle />

            <ul className='flex flex-col items-start gap-10 p-5 h-screen w-full'>
                {
                    menu.map((item: MenuItem) => {
                        const isActive = pathname.endsWith(item.address)
                        return (
                            <li key={item.id}>
                                <NavigationLink href={item.address}>
                                    <div className='flex gap-2 items-center'>
                                        <Icon iconName={item.iconName} className='text-white' />
                                        <span className={`text-xs ${isActive ? 'bg-lavender bg-clip-text text-transparent' : 'dark:text-white'}`}>{item.title}</span>
                                    </div>
                                </NavigationLink>
                            </li>
                        )
                    })
                }
            </ul>
        </Box>
    );

    return (
        <div className='sm:hidden'>
            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor} >
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <Icon iconName={faBars} size='xl' className='text-gray-500 dark:text-white' />
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}