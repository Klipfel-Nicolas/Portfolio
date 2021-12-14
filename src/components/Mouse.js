import React, {useEffect} from 'react'

const Mouse = () => {


    useEffect(() => {
        
        const cursor = document.querySelector('.cursor');
        const innerCursor = cursor.querySelector('.inner-cursor');
        
        const handleHover = (link) =>{
            
            switch (true) {
                case link.classList.contains('hovTxt'): 
                    cursor.classList.add('hoveredText');                   
                    break;
                case link.classList.contains('tips'):
                    cursor.classList.add('tipsCursor');   
                    innerCursor.textContent = link.dataset.txt;
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
            innerCursor.textContent = '';
        }
        
       
        //position

        // set the starting position of the cursor outside of the screen
        let clientX = -100;
        let clientY = -100;
        

        const initCursor = () => {
        // add listener to track the current mouse position
        document.addEventListener("mousemove", e => {
            clientX = e.clientX;
            clientY = e.clientY;
            
        });
        
        // transform the cursor to the current mouse position
        // use requestAnimationFrame() for smooth performance
        const render = () => {
            cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
            
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
        };

        initCursor();

       
           
        document.querySelectorAll('.hover').forEach(link =>{
            
            link.addEventListener('mouseover', ()=>{
                if(link.classList.contains('active') || link.classList.contains('nav-active') || link.classList.contains('lang-active'))return;
                handleHover(link);
            } );
            link.addEventListener('mouseleave', handleLeave);       
        })

    })
    
    return (
        
        <div className="cursor cursor--outline">
            <div className="inner-cursor ">

            </div>
        </div>
      
        
    );
}

export default Mouse;