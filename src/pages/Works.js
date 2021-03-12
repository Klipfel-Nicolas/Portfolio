import React, {useContext}  from 'react';

import Navigation from '../components/Navigation';
import LanguageContext from '../components/LanguageContext';
import SocialNetwork from '../components/SocialNetwork';
import ParametresBanner from '../components/ParametresBanner';
import Projects from "../components/projects/Projects";


const Works = () => {
    
    const language = useContext(LanguageContext);
    
    return (
        <div className="works">
            <Navigation/>
            <ParametresBanner/>
            <h2>{language.language === "Shakespeare" ? ".Works" : ".Projets"}</h2>
            <div className="container">
                
                <Projects/>
            </div>
            <SocialNetwork/>
        </div>
    );
};

export default Works;