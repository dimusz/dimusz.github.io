import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import FooterMobile from '../../Small Components/Footer  Mobile/FooterMobile'
import FooterDesktop from '../../Small Components/Footer Desktop/FooterDesktop'

function Footer() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <div>
            {isMobile ? <FooterMobile /> : <FooterDesktop />}
        </div>
    )
}
export default Footer