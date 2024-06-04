'use client';
import Link from 'next/link';
import * as React from 'react';
import { Icon } from 'Components';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { Menu } from '@/src/constants';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { usePathname } from 'next/navigation';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import { faBars } from '@fortawesome/free-solid-svg-icons';

type Anchor = 'left';

export const MobileMenu = () => {
    const pathname = usePathname();
    const [state, setState] = React.useState({
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
            className="dark:bg-[#2B2B2B]"
        >
            <List>
                {
                    Menu.map((item) => {
                        const isActive = pathname.endsWith(item.address)
                        return (
                            <ListItem key={item.id} >
                                <ListItemButton>
                                    <ListItemIcon>
                                        < li key={item.id} className='text-base font-semibold'>
                                            <Link href={item.address} className={`${isActive ? 'bg-lavender bg-clip-text text-transparent' : 'dark:text-white'}`}>	
                                            {item.title}
                                            </Link>
                                        </li>
                                    </ListItemIcon>

                                </ListItemButton>
                            </ListItem>
                        )
                    })
                }
            </List>
        </Box>
    );

    return (
        <div className='lg:hidden'>
            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
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