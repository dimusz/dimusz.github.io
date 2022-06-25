import React from 'react'
import photo from '../../Photos/photo.jpeg'
import './HomeDesktop.css'

function HomeDesktop() {
    return (
            <div id='main-home'>
                <div id='main-text'>
                    <h1 id='home-h1'>Salut, sunt<br /> Lucian Dina-Muszuriak</h1>
                    <h3 id='home-h3'>Sunt front-end developer <br />specializat in realizarea de site-uri si web-apps</h3>
                </div>
                <img id='home-img' src={photo} alt="Poza cu mine" srcSet='' />
            </div>      
    )
}

export default HomeDesktop