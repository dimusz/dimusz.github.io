import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import LanguageIcon from '@mui/icons-material/Language';

import './header.css'
import { Menu, MenuItem } from '@mui/material';

function Header() {

    let navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }




    function handleMenuClick(path) {
        navigate(path);
        setAnchorEl(null);
    }

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


    const buttons = [
        {
            description: 'home',
            path: '/'
        },

        {
            description: 'projects',
            path: '/projects'
        },

        {
            description: 'cv',
            path: '/cv'
        },
    ]

    return (

        <div className='header-body'>
            {isMobile ?
                (<>{''} <IconButton
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
                            return (<MenuItem onClick={() => handleMenuClick(path)}>{menuTitle}</MenuItem>)
                        })}

                    </Menu>{''}</>)
                :
                (<>  <div className="main-part">
                    {buttons.map((buttonApp) => {

                        const { description, path } = buttonApp;
                        return (
                            <Button className='btn'
                                onClick={() => navigate(path)}>{description}</Button>);
                    })}</div></>)
            }



            {/* aici voi pune butonul pentru comutare limba site */}

            {/* <div className="second-part">
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={''}
                >
                    <LanguageIcon />
                </IconButton>

            </div> */}


        </div>)
}



export default Header