import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import Cv from './Pages/Cv/Cv'
import './App.css'

export default function App() {

    return (
        <div id='app'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='projects' element={<Projects />} />
                <Route path='cv' element={<Cv />} />
            </Routes>
            <Footer />
        </div>
    );
}
