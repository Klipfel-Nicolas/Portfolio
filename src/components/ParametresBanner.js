import React, { useContext, useEffect } from 'react';
import LanguageContext from '../components/LanguageContext';

const ParametresBanner = () => {
    
    useEffect(() => { 
        Array.from(document.querySelectorAll('.languages label')).map(label =>{
            if(label.id === language.language){
                return label.classList.add('lang-active')
            }
            return null;
        })

        /**
         * responsive lang
         */
        responsiveLang();
      });

    /**
     * Menu navigation responsive
     */
    const toggleMenu = ()=>{
        let navMenu = document.querySelector('.navigation');
        navMenu.classList.toggle('active');
        if(navMenu.classList.contains('active')){
            document.querySelector('body').style.maxHeight = '100vh';
            document.querySelector('body').style.overflow = 'hidden';
        }
        if(!navMenu.classList.contains('active')){
            document.querySelector('body').style.maxHeight = 'auto';
            document.querySelector('body').style.overflow = 'auto';
        }
    }

    //LANGUAGE _____

    const language = useContext(LanguageContext);

    /**
     * Change label text for  responsive
     */
    const responsiveLang = ()=>{
        
        if(window.innerWidth <= 500){   
            document.querySelector('#Moliere').textContent = "Fr";
            document.querySelector('#Shakespeare').textContent = "Eng";
        } else if (window.innerWidth > 500) {
            document.querySelector('#Moliere').textContent = "Molière";
            document.querySelector('#Shakespeare').textContent = "Shakespeare";
        }
        window.addEventListener('resize', responsiveLang);
    }
      
    /**
     * Change language
     */
    const onChangeLanguage = e=>{
        language.updateLanguage(e.target.value);
        
        Array.from(document.querySelectorAll('.languages label')).map(label =>{
            if(label.id !== language.language){
                return label.classList.add('lang-active')
            }else{
                return label.classList.remove('lang-active');
            }
        })
   
    }

    // RENDER ____________

    return (
        <header className="parametresBanner grid">
            <div className="mobile navBtn">
                <span onClick={toggleMenu} >Menu</span>
            </div>
            <h1>{language.language === "Shakespeare" ? `< Front-end developer />` : `< Developpeur front-end />` }</h1>
            <div className="languages" onChange={onChangeLanguage}>
                <p>lang: </p>
                <div className="langContain hover">
                    <label 
                        htmlFor="Moliere" 
                        id="Moliere" 
                       
                    >Molière
                        
                    </label>
                    <input type="radio" name="language" value="Moliere" />
                </div>
                
                <div className="langContain hover">
                    <label 
                        htmlFor="Shakespeare" 
                        id="Shakespeare" 
                            
                    >Shakespeare
                    </label>
                    <input type="radio" name="language" value="Shakespeare" />
                </div>
            </div>
        </header>
    );
};

export default ParametresBanner;