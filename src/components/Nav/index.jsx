import React from "react";
import s from './index.module.css'
import ms_logo from '../../media/ms_logo.png'


export default function Nav() {
  return (
    <header className={s.header} id="top">
        
        <div className={s.nav_container}>
          <img src={ms_logo} alt="logo" />

          <nav className={s.nav}>
            <p><a href="#about_me">About me</a></p>
            <p><a href="#projects">Projects</a></p>
            <p><a href="#contacts">Contacts</a></p>
         </nav>
        </div>

    </header>
  );
}

