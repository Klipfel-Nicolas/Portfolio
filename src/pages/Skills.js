import React, {useContext, useEffect} from 'react';
import Navigation from '../components/Navigation';

import IsometricBlock from '../components/IsometricBlock';
import { DiJavascript, DiHtml5, DiCss3Full, DiReact, DiSass, DiMongodb } from 'react-icons/di';
import { SiRedux, SiFirebase, SiPhp, SiSymfony, SiMysql, SiGithub, SiGimp, SiInkscape, SiVueDotJs, SiNodeDotJs, SiFigma, SiVisualstudio, SiGreensock, SiTailwindcss, SiBootstrap } from 'react-icons/si';
import { GiHangingSpider, GiTriangleTarget } from 'react-icons/gi';


import LanguageContext from '../components/LanguageContext';
import SocialNetwork from '../components/SocialNetwork';
import ParametresBanner from '../components/ParametresBanner';
import BtnDestruc from '../components/BtnDestruc';
import {skillsDatas} from '../data/languages-data';
import Mouse from '../components/Mouse';


const Skills = () => {

    const language = useContext(LanguageContext);

    useEffect(() => {

        /**
         * responsive
         */
        if(!document.querySelector('.navigation').classList.contains('active') && window.innerWidth < 720){
            document.querySelector('body').style.maxHeight = '100%';
            document.querySelector('body').style.overflow = 'scroll';
        }
    })

    const toggleTabs = (e)=>{

        if(e.target.parentNode.classList.contains('active') || e.target.classList.contains('active')) return;
        document.querySelector('.tabs-container .active').classList.remove('active'); 
        document.querySelector('article.active').classList.remove('active');
        
        document.querySelectorAll('article').forEach(article =>{           
            if(article.id === e.target.parentNode.classList[0]){
                article.classList.add('active');  
                e.target.parentNode.classList.add('active');
            }else if(article.id === e.target.classList[0]){
                article.classList.add('active');  
                e.target.classList.add('active');
            }
        })
    }
    
    return (
        <div className="skills">      
            <Navigation/>
            <Mouse />
            <ParametresBanner/>
            <h2>{language.language === "Shakespeare" ? ".Skills" : ".Competences"}</h2> 
            
            <div className="container">
                <p className="handFont sentence hover hovTxt">{language.language === "Shakespeare" ? skillsDatas.en.global : skillsDatas.fr.global}</p>
                
                <div className="tabs-container ">    
                    <ul className ="destrucBtn">
                        <li className="front-end active hover" onClick={(e)=> toggleTabs(e)}>
                            <BtnDestruc word={"Front-end"}/>
                        </li>
                        <li className="back-end hover" onClick={(e)=> toggleTabs(e)}>
                            <BtnDestruc word={"Back-end"}/>
                        </li>
                        <li className="library hover" onClick={(e)=> toggleTabs(e)}>
                            <BtnDestruc word={"Library"}/>
                        </li> 
                        <li className="other hover" onClick={(e)=> toggleTabs(e)}>
                            <BtnDestruc word={"Other"}/>
                        </li>
                    </ul>
                </div>
               
                <div className="tabs-content">
                    <article className="active tab-content" id="front-end">
                        <div className="text">
                            <p>{language.language === "Shakespeare" ? skillsDatas.en.front.p : skillsDatas.fr.front.p}</p>
                        </div>
                                
                        <section className="front-end">
                            <ul>
                                <IsometricBlock language={'Html 5'} icon={ DiHtml5 } color={"#e34b20"} number={10} />
                                <li className="vertical"></li>
                                <IsometricBlock language={'Css 3'} icon={ DiCss3Full } color={"#2187d2"} number={8} />
                                <li className="horizontal"></li>
                                <li className="vertical "></li>
                                <IsometricBlock language={'sass'} icon={ DiSass } color={'#c14e88'} number={7} />
                                <IsometricBlock language={'Javascript'} icon={ DiJavascript} color={"yellow"} number={8} />
                                <li className="horizontal "></li>
                                <IsometricBlock language={'React'} icon={ DiReact } color={"#53d2fa"} number={6} />
                                <li className="vertical "></li>
                                <IsometricBlock language={'Redux'} icon={ SiRedux } color={'#764abc'} number={4} />
                                <li className="vertical "></li>
                                <IsometricBlock language={'Vue'} icon={ SiVueDotJs } color={'#3EB37F'} number={6} />
                            </ul>
                        </section>
                    </article>

                    <article className="tab-content" id="back-end">
                        <div className="text">
                            <p>{language.language === "Shakespeare" ? skillsDatas.en.back.p : skillsDatas.fr.back.p}</p>
                        </div>

                        <section className=" back-end">
                            <ul>
                                <IsometricBlock language={'Firebase'} icon={ SiFirebase } color={"#ffcb2b"} number={5} />
                                <li className="vertical "></li>
                                <IsometricBlock language={'MySQL'} icon={ SiMysql} color={"#00758F"} number={6} />
                                <li className="horizontal "></li>
                                <IsometricBlock language={'MondoDB'} icon={ DiMongodb } color={"#589136"} number={4} />
                                <li className="vertical "></li>
                                <IsometricBlock language={'Node.JS'} icon={ SiNodeDotJs } color={"#8DBF40"} number={4} />
                                <li className="vertical "></li>
                                <IsometricBlock language={'ApiPlatform'} icon={ GiHangingSpider } color={"#35A5AE"} number={5} />
                                <li className="vertical "></li>
                                <IsometricBlock language={'Php'} icon={ SiPhp } color={"#8993be"} number={6} />
                                <li className="horizontal"></li>
                                <IsometricBlock language={'Symfony'} icon={ SiSymfony } color={"#fff"} number={6} />
                            </ul>    
                        </section>
                    </article>

                    <article className="tab-content" id="library">
                        <div className="text">
                            <p>{language.language === "Shakespeare" ? skillsDatas.en.library.p : skillsDatas.fr.library.p}</p>
                        </div>

                        <section className="library">
                            <ul >
                                <IsometricBlock language={'Three.js'} icon={ GiTriangleTarget } color={"#f1f1f1"} number={6} />
                                <li className="vertical "></li>
                                <IsometricBlock language={'Gsap'} icon={ SiGreensock } color={"#82C806"} number={4} />
                                <li className="vertical "></li>
                                <IsometricBlock language={'Tailwind'} icon={ SiTailwindcss } color={"#16B7C3"} number={4} />
                                <li className="horizontal"></li>
                                <IsometricBlock language={'Bootstrap'} icon={ SiBootstrap } color={"#563483"} number={6} />    
                            </ul>    
                        </section>
                    </article>
                        
                    <article className="tab-content" id="other">
                        <div className="text">
                            <p>{language.language === "Shakespeare" ? skillsDatas.en.other.p : skillsDatas.fr.other.p}</p>
                        </div>

                        <section className=" other">
                            <ul >
                                <IsometricBlock language={'VS.code'} icon={ SiVisualstudio } color={"#37A4EC"} number={9} />
                                <li className="vertical "></li>
                                <IsometricBlock language={'GitHub'} icon={ SiGithub } color={"#000000"} number={7} />
                                <li className="vertical "></li>
                                <IsometricBlock language={'Gimp'} icon={ SiGimp } color={"#fff"} number={4} />
                                <li className="horizontal"></li>
                                <IsometricBlock language={'Inkscape'} icon={ SiInkscape } color={"#000000"} number={6} />
                                <li className="vertical "></li>
                                <IsometricBlock language={'Figma'} icon={ SiFigma } color={"#F86E5F"} number={6} />
                                
                            </ul>    
                        </section>
                    </article>
                </div>
            </div>    

            <SocialNetwork/>
        </div>
    );
};

export default Skills;