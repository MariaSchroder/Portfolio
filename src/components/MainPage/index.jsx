import React from "react";
import s from './index.module.css'
import { MdKeyboardArrowUp } from 'react-icons/md'
import Nav from "../Nav";
import AboutMe from "../AboutMe";
import Skills from "../Skills";
import ProjectsСontainer from "../ProjectsСontainer";
import Footer from "../Footer";

export default function MainPage () {
  
  return (
    <div className={s.main_container}>
        
        <Nav />
        <AboutMe /> 
        <Skills />
        <ProjectsСontainer />
        <Footer />

        <div className={s.arrow_box}>
            <a href="#top">
                <MdKeyboardArrowUp className={s.arrow}/>
            </a>
        </div>
        
    </div>
    );
}
