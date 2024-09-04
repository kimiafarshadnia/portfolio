'use client';
import Link from 'next/link';
import * as React from 'react';
import { useState } from "react";
import { MenuItem } from 'Types';   
import { Menu } from 'Constants';
import { Icon } from 'Components';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { usePathname } from 'next/navigation';
import { faBars } from '@fortawesome/free-solid-svg-icons';

type Anchor = 'bottom';

export const MobileMenu = () => {
    const pathname = usePathname();
    const [state, setState] = useState({
        bottom: false,
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
            <ul className='flex flex-row items-center w-full justify-evenly py-5'>
                {
                    Menu.map((item: MenuItem) => {
                        const isActive = pathname.endsWith(item.address)
                        return (
                            <li key={item.id}>
                                <Link href={item.address} className="flex flex-col items-center gap-2 font-light">
                                    <Icon iconName={item.iconName} className='text-white'/>
                                    <span className={`text-xs ${isActive ? 'bg-lavender bg-clip-text text-transparent' : 'dark:text-white'}`}>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </Box>
    );

    return (
        <div className='sm:hidden'>
            {(['bottom'] as const).map((anchor) => (
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