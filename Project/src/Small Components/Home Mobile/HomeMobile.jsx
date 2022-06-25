import React from 'react'
import photo from '../../Photos/photo.jpeg'
import './HomeMobile.css'

function HomeMobile() {
    return (
        <div id='main-mobile'>
            <img id='mobile-photo' src={photo} alt="Poza cu mine" srcSet='' />
            <div id='mobile-text'>
                <h4 id='home-h4'>Salut, sunt<br /> Lucian Dina-Muszuriak</h4>
                <h6 id='home-h6'>Sunt front-end developer <br />specializat in realizarea<br />de site-uri si web-apps</h6>
            </div>
        </div>
    )
}

export default HomeMobile