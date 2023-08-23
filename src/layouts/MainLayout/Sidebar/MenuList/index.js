import React, {memo} from 'react';

// material-ui
import {Typography} from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import menuItems from "../menu-items";

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
    const navItems = menuItems.items.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item}/>;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return <>{navItems}</>;
};

export default memo(MenuList);
