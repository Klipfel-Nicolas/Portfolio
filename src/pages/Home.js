import React, { useContext} from 'react';
import Navigation from '../components/Navigation';


import ParametresBanner from '../components/ParametresBanner';
import LanguageContext from '../components/LanguageContext';


import PeriodicSkills from '../components/PeriodicSkills';
import SocialNetwork from '../components/SocialNetwork';
import {homeDatas} from "../data/languages-data";
import Mouse from '../components/Mouse';


const Home = () => {

    const language = useContext(LanguageContext);
   
    return (
        <div className="home">
 
            <Navigation/>
            <Mouse/>
            <ParametresBanner/>
            <h2>.Klipfel  Nicolas</h2>  
            <div className="container">   
                <p className="sentence handFont hover hovTxt" data-txt="">{language.language === "Shakespeare" ? homeDatas.en.sentence : homeDatas.fr.sentence}</p>                                  
                <PeriodicSkills/>
            </div> 
            <SocialNetwork/>
        </div>
    );
};

export default Home;