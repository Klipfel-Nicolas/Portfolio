import React, {useEffect, useState} from 'react';

import { projects, projectList } from "../../data/projects-data";
import Project from "./Project";
import ProjectInfos from './ProjectInfos';


const Projects = () => {

    const [index, setIndex] = useState(0)
    
    const { project0, project1, project2} = projects;
    const projectArray = [project0, project1, project2];
    console.log(projectArray[index])
    const infosTrigger = ()=>{
        //index project
        const currentIndex = document.querySelector('.projects-list .active').dataset.index;
        setIndex(currentIndex);

        const infosDiv = document.querySelector('.infos-project');
        const listProject = document.querySelector('.projects-list ul');
        const btnInfos = document.querySelector('.btn-info');
        
        
        infosDiv.classList.toggle('active');
        btnInfos.classList.toggle('active');
        //Remove active btn and div infos
        listProject.addEventListener('click', ()=> infosDiv.classList.remove('active'));
        window.addEventListener('keydown', ()=> infosDiv.classList.remove('active'));
        window.addEventListener('wheel', ()=> infosDiv.classList.remove('active'));
        listProject.addEventListener('click', ()=> btnInfos.classList.remove('active'));
        window.addEventListener('keydown', ()=> btnInfos.classList.remove('active'));
        window.addEventListener('wheel', ()=> btnInfos.classList.remove('active'));

    }

    function handleScript (id, source){
    
        if(document.querySelector(`#${id}`)){
            document.querySelector(`#${id}`).parentNode.removeChild(document.querySelector(`#${id}`));
        }
        let script = document.createElement("script");
        script.src = source;
        script.id = id;
        script.async = false
        document.body.appendChild(script);
    } 

    useEffect(() => {
        handleScript('tilt', "./scripts/tilt/vanilla-tilt.js");
        handleScript('anime', "./scripts/anime/lib/anime.min.js" )
        handleScript('pieces', "./scripts/pieces/dist/pieces.min.js" )
        handleScript('mypieces', "./scripts/mypiece/pieces.js" ) 
        
    }, []);    
   
    /*
    {Object.entries(projects).map((project, i)=>{
                                    if(i === index){
                                        
                                        return <ProjectInfos project={project1} key={i}/>   
                                    } 
                                    return null;                              
                                })}
    */
    
    return (
        <main className="projects-container js">
            <div className="pieces-slider">
                <Project project={project0} /> 
                <Project project={project1} /> 
                <Project project={project2} />
                
                <canvas className="pieces-slider__canvas"></canvas>

                <div className="projects-list">                    
                    <span className="handFont">&lt;ul class="projects-list"&gt;</span>
                    <ul>
                        {
                            projectList.projectName.map((project, i)=>{
                                const id = "id";
                                return (
                                    <li key={i} data-index={i} className="hover" >
                                        li 
                                        <span className="green">&nbsp; {id.split('').map((letter, i )=>{
                                                return(
                                                <span data-letter={Math.floor(Math.random() * 5) + 1  } key={i}>{letter}</span>
                                                )
                                            })}
                                        </span>
                                        <span className="white" data-letter="5">=</span>
                                        <span className="yellow">{project.split('').map((letter, i )=>{
                                                return(
                                                <span data-letter={Math.floor(Math.random() * 5) + 1  } key={i}>{letter}</span>
                                                )
                                            })}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <span className="handFont">&lt;/ul&gt;</span> 
                </div>
            </div>


            <article className="infos-project">
                
                <div className="infos-btn">
                    <span className="handFont">&lt;button&gt;</span>
                    <button
                        className='btn-info hover'
                        onClick= {()=>infosTrigger()}       
                    >
                    <span> </span>   
                    </button> 
                    <span className="handFont">&lt;/button&gt;</span>
                </div>
                
                    <div className="card-container">
                        <div 
                            className="infos-card" 
                            data-tilt 
                            data-tilt-max="25" 
                            data-tilt-speed="400" 
                            data-tilt-glare = "true"
                            data-tilt-max-glare="0.5"
                        >         
                            
                         <ProjectInfos project={projectArray[index]} key={index}/>                            
                            
                        </div>
                    </div>    
            </article>          
        </main>
    )
}

export default Projects;