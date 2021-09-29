import React, {useContext} from 'react';
import {IoLogoGithub} from 'react-icons/io';

import LanguageContext from '../../components/LanguageContext';


const ProjectInfos = props => {
   
    const language = useContext(LanguageContext);
    const { technos, description, number, github } = props.project;

    return (
            <div className="infos-content" data-tilt >
            
                <h5>0{number}</h5>
                    {
                        language.language === "Shakespeare" ? (
                            <>
                                <h6 style={window.innerWidth > 1100 ? {color :`${description.color}`} : {color :'#ffff'}}>
                                    {description.en.p1} 
                                </h6>
                                
                                <a href={github} target="blank" className="hover" ><IoLogoGithub size={20}/> -Voir sur Github</a>
                                
                                <p className="description" style={window.innerWidth > 1100 ? {color :`${description.color}`} : {color :'#ffff'}}>{description.en.p2} <br /> {description.en.p3}</p>
                                
                                <p className="technos">{technos}</p> 
                            </>
                        ) :(
                            <>
                                <h6 style={{color :`${description.color}`}}>{description.fr.p1}</h6>
                                <p className="description" style={{color :`${description.color}`}}>{description.fr.p2} <br /> {description.fr.p3}</p>
                                <p className="technos">{technos}</p> 
                            </>
                        )
                    }            
            </div>  
    )
}

export default ProjectInfos;