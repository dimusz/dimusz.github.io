import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import HeaderMobile from '../../Small Components/Header Mobile/HeaderMobile';
import HeaderDesktop from '../../Small Components/Header Desktop/HeaderDesktop';


function Header() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <div id='header-body'>
            {isMobile ?
                <HeaderMobile />
                :
                <HeaderDesktop />
            }
        </div>)
}
export default Header