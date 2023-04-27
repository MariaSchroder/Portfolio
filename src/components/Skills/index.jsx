import React from "react";
import s from './index.module.css'
import html from './icons/HTML.svg'
import css from './icons/CSS.svg'
import sass from './icons/Sass.svg'
import bootstrap from './icons/Bootstrap.svg'
import javascript from './icons/JavaScript.svg'
import react from './icons/React-Dark.svg'
import redux from './icons/Redux.svg'
import git from './icons/Git.svg'
import github from './icons/Github-Dark.svg'
import mongodb from './icons/MongoDB.svg'
import mysql from './icons/MySQL-Light.svg'
import figma from './icons/Figma-Dark.svg'
import vscode from './icons/VSCode-Dark.svg'


export default function Skills() {
  
  return (
      <div className={s.skills_container}>
  
        <p className={s.skills_title}>Skills</p>

        <div className={s.skills_img}>
          <img src={html} alt="HTML" />
          <img src={css} alt="CSS" />
          <img src={sass} alt="SASS" />
          <img src={bootstrap} alt="Bootstrap" />
          <img src={figma} alt="Figma" />
          <img src={javascript} alt="JavaScript" />
          <img src={react} alt="React" />
          <img src={redux} alt="Redux" />
          <img src={git} alt="Git" />
          <img src={github} alt="GutHub" />
          <img src={mongodb} alt="MongoDB" />
          <img src={mysql} alt="MySQL" />
          <img src={vscode} alt="VSCode" />
        </div>
      </div>
  );
}

