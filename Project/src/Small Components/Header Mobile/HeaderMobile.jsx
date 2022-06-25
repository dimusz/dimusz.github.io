import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem } from '@mui/material';
import './HeaderMobile.css'
//import LanguageIcon from '@mui/icons-material/Language';

function HeaderMobile() {
    let navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl)

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    function handleMenuClick(path) {
        navigate(path);
        setAnchorEl(null);
    }

    const menuItems = [
        {
            menuTitle: 'home',
            path: '/'
        },
        {
            menuTitle: 'projects',
            path: '/projects'
        },
        {
            menuTitle: 'cv',
            path: '/cv'
        },
    ]

    const lang = [
        {
            language: 'ro',
            page: '/'
        },
        {
            language: 'en',
            page: '/'
        },
        {
            language: 'py',
            page: '/'
        }
    ]

    return (
        <div id='header-mobile'> <IconButton id='icon'
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
        >
            <MenuIcon />
        </IconButton>
            <Menu
                id='menu-bar'
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                open={open}
                onClose={() => setAnchorEl(null)}>
                {menuItems.map((menuItems) => {
                    const { menuTitle, path } = menuItems;
                    return (<MenuItem id='menu-bar' key={menuTitle} onClick={() => handleMenuClick(path)}>{menuTitle}</MenuItem>)
                })}
            </Menu> <div><a id='contact' href="tel: 0040745590156">Contact</a></div> </div>)
}

export default HeaderMobile