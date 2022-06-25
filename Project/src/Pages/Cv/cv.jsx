import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import './cv.css'
import CvDesktop from '../../Small Components/Cv Desktop/CvDesktop';
import CvMobile from '../../Small Components/Cv Mobile/CvMobile';

function Cv() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <div className='main'>{isMobile ? <CvMobile /> : <CvDesktop />} </div>
    )
}
export default Cv