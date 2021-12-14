import React, { useContext} from 'react';

import Navigation from '../components/Navigation';
import Mouse from '../components/Mouse';
import ParametresBanner from '../components/ParametresBanner';
import LanguageContext from '../components/LanguageContext';
import SocialNetwork from '../components/SocialNetwork';
import ArticleAbout from '../components/ArticleAbout';
import {aboutDatas} from "../data/languages-data";

/**
 * photo for Desktop
 */
import color1 from '../assets/img/color1.jpg';
import color2 from '../assets/img/color2.jpg';
import color3 from '../assets/img/color3.jpg';
import color4 from '../assets/img/color4.jpg';
import color5 from '../assets/img/color5.jpg';
import color6 from '../assets/img/color6.jpg';
import color7 from '../assets/img/color7.jpg';

/**
 * photo min for responsive
 */
import color1min from '../assets/img/color1-min.jpg';
import color2min from '../assets/img/color2-min.jpg';
import color3min from '../assets/img/color3-min.jpg';
import color4min from '../assets/img/color4-min.jpg';
import color5min from '../assets/img/color5-min.jpg';
import color6min from '../assets/img/color6-min.jpg';
import color7min from '../assets/img/color7-min.jpg';



const About = () => {

    
    const language = useContext(LanguageContext);
    
    const { photo_1, photo_2, photo_3, photo_4, photo_5, photo_6, photo_7} = aboutDatas.photos;
    
    const handleClick = (e)=>{
        
        if (e.target.parentNode.classList.contains('active')) {
            e.target.parentNode.classList.remove('active')
        }else{    
            if( document.querySelector('.active')){
          document.querySelector('.active').classList.remove('active');  
        } 
            e.target.parentNode.classList.add('active');  
        } 
        if (e.target.classList.contains('title')){
            document.querySelector('.active').classList.remove('active'); 
            e.target.parentNode.parentNode.classList.add('active');        
        }
    }

    return (
        <div className='about'>
            
            <Navigation />
            <Mouse/>
            <ParametresBanner/>
            <h2>{language.language === "Shakespeare" ? ".About" : ".A propos"}</h2> 
            <div className="container">
                <p className="sentence handFont hover hovTxt" data-txt="">{language.language === "Shakespeare" ? aboutDatas.sentence.en : aboutDatas.sentence.fr}</p>
                <ul className="images-container hover tips " data-txt="Click On Photos" onClick={(e)=> handleClick(e)} >
                    <ArticleAbout  imageC={color1} imageMin={color1min} height={30} name={'N'} firstName={'K'} infos={photo_1} />
                    <ArticleAbout  imageC={color2} imageMin={color2min}  height={40} name={'i'} firstName={'l'} infos={photo_2} />
                    <ArticleAbout  imageC={color3} imageMin={color3min}  height={50} name={'c'} firstName={'i'} infos={photo_3} />
                    <ArticleAbout  imageC={color4} imageMin={color4min}  height={65} name={'o'} firstName={'p'} infos={photo_4} />
                    <ArticleAbout  imageC={color5} imageMin={color5min}  height={50} name={'l'} firstName={'f'} infos={photo_5} />
                    <ArticleAbout  imageC={color6} imageMin={color6min}  height={40} name={'a'} firstName={'e'} infos={photo_6} />
                    <ArticleAbout  imageC={color7} imageMin={color7min}  height={30} name={'s'} firstName={'l'} infos={photo_7} />
                </ul>
                    
                
                <SocialNetwork/>
            </div>
        </div>
    );
};

export default About;