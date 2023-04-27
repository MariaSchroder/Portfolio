import React from "react";
import s from './index.module.css'
import { projects_data } from '../../data/projects_data'
import ProjectCard from "../ProjectCard/index";


export default function ProjectsСontainer() {
  
  return (
    <div className={s.projects} id="projects">
      <h3 className={s.projects_title}>Projects</h3>
      
      <div className={s.projects_container}>
        {
          projects_data.map(el => <ProjectCard key={el.id} {...el} />)
        }
      </div>
        
    </div>
  );
}
