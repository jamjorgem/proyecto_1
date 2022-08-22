import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Settings } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom'

const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return (<Home />)
        case 'TASK':
            return (<Home />)
        case 'Settings':
            return (<Settings />)

        default:
            return (<Home />)
    }
}


const MenuListItems = ({ list }) => {
    const location = useLocation();
    const history = useNavigate();

    const navigateTo = (path) => {
        history(path);
    }
    return (
        <List>
            {list.map(({ text, path, icon }, index) =>
            (
                <ListItem key={index} button onClick={() => navigateTo(path)}>
                    <ListItemIcon>
                        {getIcon(icon)}
                    </ListItemIcon>
                    <ListItemText
                        primary={text}>

                    </ListItemText>
                </ListItem>
            ))}
        </List>
    );
}

export default MenuListItems;
