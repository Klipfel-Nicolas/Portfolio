import React, {useContext} from 'react';

import LanguageContext from '../../components/LanguageContext';


const ProjectInfos = props => {
   
    const language = useContext(LanguageContext);
    const { technos, description, number } = props.project;

    return (

            <div className="infos-content" data-tilt >
            
                <h5>0{number}</h5>
                    {
                        language.language === "Shakespeare" ? (
                            <>
                                <p className="description" style={{color :`${description.color}`}}>{description.en.p1}<br /> {description.en.p2} <br /> {description.en.p3}</p>
                                <p className="technos">{technos}</p> 
                            </>
                        ) :(
                            <>
                                <p className="description" style={{color :`${description.color}`}}>{description.fr.p1}<br /> {description.fr.p2} <br /> {description.fr.p3}</p>
                                <p className="technos">{technos}</p> 
                            </>
                        )
                    }        
                    
                      
            </div> 
        
       
    )
}

export default ProjectInfos;