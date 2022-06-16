import React from 'react'
import cv from '../../Photos/cv.pdf'
import UpButton from '../../Components/UpButton/upButton'
import './cv.css'


function Cv() {
    return (
        <div class='main'>
            <div>
              
                <a href={cv} download="cv.pdf"><button class='cv-button'>Download</button>  </a>
            </div>
            <div><UpButton /></div>
        </div>
    )
}

export default Cv