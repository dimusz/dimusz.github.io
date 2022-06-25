import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import './HeaderDesktop.css'

function HeaderDesktop() {
    let navigate = useNavigate()

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
        <div id='header-desktop'>
            <div>
                {buttons.map((buttonApp) => {
                    const { description, path } = buttonApp;
                    return (
                        <Button id="header-desktop-buttons" key={description}
                            onClick={() => navigate(path)}>{description}</Button>);
                })}</div>

            {/* aici voi pune butonul pentru comutare limba site */}
            {/* <div id="second-part">
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
export default HeaderDesktop