import React from 'react'


const Project = props => {

    const { title, image} = props.project;


    return (
        <div className="pieces-slider__slide" >
            <img className="pieces-slider__image" src={image} alt={title}/>
            <h4 className="pieces-slider__text"  >{title}</h4>
        </div>
    )
}

export default Project;