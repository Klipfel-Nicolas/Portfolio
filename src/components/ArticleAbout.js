import React, { useContext}  from 'react';
import LanguageContext from '../components/LanguageContext';

const ArticleAbout = props => {
        
    const language = useContext(LanguageContext);
    const { imageC, height, name, firstName, infos} = props;

    return (
        <li className="article-container" style={{height: `${height}%`}} >
            
            <div className="name">{name} </div> 
            <div className="article"style={{backgroundImage: `url(${imageC})`} }></div>
            <div className="firstName">{firstName}</div>    
                    
            <div className="infos">
                <h5 className="title">{
                    
                        language.language === "Shakespeare" ? infos.en.title.split('').map((letter,i) => {
                            if(i%2 === 0){
                                return  <span 
                                            key={i} 
                                            style={
                                                 {transform: `translateY(${Math.floor(Math.random() * 15) + 1  }%)`}}
                                        >{letter}
                                        </span>
                            }else{
                                return  <span 
                                            key={i} 
                                            style={
                                                {transform: `translateY(-${Math.floor(Math.random() * 25) + 1  }%)`}}
                                        >{letter}  
                                        </span>
                            }  
                        }) : infos.fr.title.split('').map((letter,i) => {
                            if(i%2 === 0){
                                return  <span 
                                            key={i} 
                                            style={
                                                {transform: `translateY(${Math.floor(Math.random() * 15) + 1  }%)`}}
                                        >{letter}
                                        </span>
                            }else{
                                return  <span 
                                            key={i} 
                                            style={
                                                {transform: `translateY(-${Math.floor(Math.random() * 25) + 1  }%)`}}
                                        >{letter}
                                        </span>
                            }  
                        })
                        
                    }
                </h5>
                
                <div className="quotesBloc">
                    <p className="quote handFont">{language.language === "Shakespeare" ? infos.en.paragraphe : infos.fr.paragraphe }</p>
                    <p className="author handFont">{language.language === "Shakespeare" ? infos.en.author : infos.fr.author }</p>
                </div>

            </div>

        </li>
        
    )
}

export default ArticleAbout;