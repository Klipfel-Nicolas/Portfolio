import React, {useEffect} from 'react'

const Mouse = () => {


    useEffect(() => {
        
        const cursor = document.querySelector('.cursor');
        const mouseTxt = cursor.querySelector('.cursorText');
        
        const handleHover = (link) =>{
            
            switch (true) {
                case link.classList.contains('hovTxt'): 
                    cursor.classList.add('hoveredText');                   
                    break;
                case link.classList.contains('tips'):
                    cursor.classList.add('tipsCursor');   
                    mouseTxt.textContent = link.dataset.txt;
                    break;
                default:
                    cursor.classList.add('hovered');   
                    break;
            }
            
        }
        const handleLeave = () =>{
            if(cursor.classList.contains('hovered'))cursor.classList.remove('hovered');
            if(cursor.classList.contains('hoveredText'))cursor.classList.remove('hoveredText');
            if(cursor.classList.contains('tipsCursor'))cursor.classList.remove('tipsCursor');
            mouseTxt.textContent = '';
        }
        //expand Click
        const handleClick = () =>{
            cursor.classList.add('expand');
                setTimeout(()=>{
                    cursor.classList.remove("expand");
                },500);
        }
        document.addEventListener('click', handleClick)
        //position
        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", `top:${e.pageY - 10}px; left : ${e.pageX - 10}px;`);
            cursor.addEventListener('click', ()=>{
                cursor.classList.add('expand');
                setTimeout(()=>{
                    cursor.classList.remove("expand");
                },500);
            })
        })
       
           
        document.querySelectorAll('.hover').forEach(link =>{
            
            link.addEventListener('mouseover', ()=>{
                if(link.classList.contains('active') || link.classList.contains('nav-active') || link.classList.contains('lang-active'))return;
                handleHover(link);
            } );
            link.addEventListener('mouseleave', handleLeave);       
        })

    })
    
    return (
        
        <div className="cursor" >
            <div className="cursorText ">

            </div>
        </div>
      
        
    );
}

export default Mouse;