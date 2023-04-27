import React from "react";
import s from './index.module.css'


export default function ProjectCard({ title, url, git_hub_link, project_img, technologies }) {
 
  return (
    <div className={s.project_card}>
        <a className={s.project_title} href={ url } target="blank">{ title }</a>

        <img src={ project_img } alt="#" className={s.project_img}/>

        <p className={s.project_text}>
          <span>Technologies:</span> { technologies }
        </p>
        <a className={s.project_github} href={ git_hub_link } target="blank">GitHub</a>
    </div>
  );
}
