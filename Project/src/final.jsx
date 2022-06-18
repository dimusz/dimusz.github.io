import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import Home from './Pages/Home/home'
import Projects from './Pages/Projects/projects'
import Cv from './Pages/Cv/cv'

export default function Final() {

    return (
        <div>
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

