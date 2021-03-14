import React, {useEffect} from 'react'

const Mouse = () => {


    useEffect(() => {
        
        const cursor = document.querySelector('.cursor');
        const mouseTxt = cursor.querySelector('span');
        
        
        const handleCursor = (e) =>{                
            cursor.style.top = e.pageY + "px";
            cursor.style.left = e.pageX + "px";              
        }
        
        const handleHover = (link) =>{
            
            switch (true) {
                case link.classList.contains('hovTxt'):
                    mouseTxt.textContent = link.dataset.txt;
                    cursor.classList.add('hoveredText');
                    break;
                
                default:
                    cursor.classList.add('hovered');
                    break;
            }
            
        }
        const handleLeave = () =>{
            if(cursor.classList.contains('hovered'))cursor.classList.remove('hovered');
            if(cursor.classList.contains('hoveredText'))cursor.classList.remove('hoveredText');
            mouseTxt.textContent = '';
        }

        window.addEventListener('mousemove', handleCursor);
           
        document.querySelectorAll('.hover').forEach(link =>{
            
            link.addEventListener('mouseover', ()=>{
                if(link.classList.contains('active') || link.classList.contains('nav-active') || link.classList.contains('lang-active'))return;
                handleHover(link);
            } );
            link.addEventListener('mouseleave', handleLeave);
        
        })
    })

    return (
        
        <div className="cursor">
            <span className="cursorText ">

            </span>
        </div>
      
        
    );
}

export default Mouse;