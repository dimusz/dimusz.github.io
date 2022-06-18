import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import cv from '../../Photos/cv.pdf'
import UpButton from '../../Components/UpButton/upButton'
import './cv.css'


function Cv() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))


    return (
        <div className='main'>
            {isMobile ?
                (<>{''} <div>

                    <a href={cv} download="cv.pdf"><button className='cv-button-mobile'>Download</button>  </a>
                </div>
                    <div><UpButton /></div>{''}</>)
                :
                (<><div>

                    <a href={cv} download="cv.pdf"><button className='cv-button'>Download</button>  </a>
                </div>
                    <div><UpButton /></div></>)}

        </div>
    )
}

export default Cv