import React from "react";
import s from './index.module.css'
import gmail from './icons/gmail.png'
import github from './icons/github.png'
import linkedin from './icons/linkedin.png'
import telegram from './icons/telegram.png'
import whatsapp from './icons/whatsapp.png'


export default function Footer() {

  return (
    <div className={s.footer_container} id="contacts">

      <div className={s.icon_container}>
        <h4 className={s.contacts_title}>Contacts:</h4>

          <div className={s.mail}>
            <img src={gmail} alt="gmail"/>
            
            <a href="mailto:m.s.mariaschroder@gmail.com">m.s.mariaschroder@gmail.com</a>
          </div>
          
          <div className={s.social_media_box}>
            <div className={s.social_media_icon}>
              <a href="https://wa.me/491788819076" target="_blank" rel="noreferrer noopener">
                <img src={whatsapp} alt="whatsapp"/>
              </a>
            </div>

            <div className={s.social_media_icon}>
              <a href="https://telegram.im/@ms_MariaS" target="_blank" rel="noreferrer noopener">
                <img src={telegram} alt="telegram"/>
              </a>
            </div>

            <div className={s.social_media_icon}>
              <a href="https://www.linkedin.com/in/ms-mariaschroeder" target="_blank" rel="noreferrer noopener">
                <img src={linkedin} alt="linkedin"/>
              </a>
            </div>

            <div className={s.social_media_icon}>
              <a href="https://github.com/MariaSchroder" target="_blank" rel="noreferrer noopener">
                <img src={github} alt="github"/>
              </a>
            </div>
          
          </div>
      </div>
      
      <div className={s.icons_from_box}>
        
        <p className={s.icons_from_title}>Icons from: </p>
        <div className={s.icons_from}>
          <a href="https://www.flaticon.com/packs/social-media-163" target="_blank" rel="noreferrer noopener">Skills</a>
          <a href="https://github.com/tandpfun/skill-icons" target="_blank" rel="noreferrer noopener">Social Media</a>
        </div>
      
      </div>
    </div>
  );
}
