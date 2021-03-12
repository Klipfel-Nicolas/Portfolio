import React from 'react';

const BtnDestruc = props => {

    const { word } = props;

    

    return (
        
        <>
            {Array.from(word).map((letter, i) =>{
                return(
                    <span 
                        key={i} 
                        className='letter'
                        style={{transform : `translateY(${Math.floor(Math.random()* 5 + -3)}rem)`}}
                    >
                        {letter}
                    </span>
                )
            })}
        </>
    );
}

export default BtnDestruc;
