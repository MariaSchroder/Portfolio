import React from "react";
import s from './index.module.css'
import photo from '../../media/photo.png'


export default function AboutMe() {
  
  return (
    <section className={s.about_me_section} id="about_me">
      <div className={s.about_me}>
        <p className={s.about_me_img}>
          <img src={photo} alt="Maria Schroeder"/>
        </p>

        <div className={s.about_me_info}>
          <p className={s.about_me_text}>  
            <span>&#128075;</span> Hi there, <br /> 
            <span className={s.name_text}>I'm Maria</span> 
          </p>
          <p className={[s.line_info, s.line, s.type, s.line_info_media].join(' ')}> Frontend developer</p>
          
          {/* <p className={s.name_text}> Frontend developer</p> */}
          
          <p className={s.about_me_text}>And I want to help make the internet a more creative, accessible, and better place.</p>
          <p className={s.about_me_text}>I like doing interesting and modern projects whit clean code.</p>
          <p className={s.about_me_text}>This is my little space on Internet where you can always find me and my work.</p>
        </div>
      </div>
    </section>
  );
}
