import React from 'react'
import cv from '../../Photos/cv.pdf'
import './CvDesktop.css'

function CvDesktop() {
    return (
        <div id='main-cv'>
            <div id='cv-text'>
                <h1 id='cv-h1'>Lucian Dina-Muszuriak</h1>
                <h2 id='cv-h2'>Experienta profesionala : 2014 - prezent Administrator si Buyer la SC Dina &amp;&nbsp; Muszuriak SRL</h2>
                <h2 id='cv-h2'>Studii: 2022 Curs FrontEnd Developer, SIIT Timisoara</h2>
                <h2 id='cv-h2'>Studii: 2012-2013 Bursa Erasmus la Universitatea din Szeged, Ungaria</h2>
                <h2 id='cv-h2'>Studii: 2012-2014 Universitatea de Vest din Timisoara 
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Facultatea de Litere, Istorie si Teologie
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sectia Limbi si Literaturi
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Specializarea Rusa-Engleza</h2>
                <h2 id='cv-h2'>Studii: 2002-2006 Liceul de Posta si Telecomunicatii Timisoara</h2>
            </div>
            <a href={cv} download="cv.pdf"><button id='cv-button'>Download</button>  </a>
        </div>
    )
}
export default CvDesktop