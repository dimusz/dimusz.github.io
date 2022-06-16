import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import DateTime from '../Date/Time/dateTime'

import './footer.css'

function Footer() {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))



    return ( 
        <div class='footer-body'>
            {isMobile?(<>{''}
                <div class='mobile-footer'>
                    <div><DateTime/></div>
                    <div>Copyright 2022</div>
                    <div>Developed by dimusz</div>
                </div>{''}</>)
            
            
            :
            
            
            
            (<><div class='main-part'>
                <p><DateTime/></p>
                <p>Copyright 2022</p>
            </div><div class='second-part'>
                <p>Developed by dimusz</p>
            </div></>)}
            
            
        </div>
    )
}

export default Footer