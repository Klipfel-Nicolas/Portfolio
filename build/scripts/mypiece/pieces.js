(function() {
    let sliderCanvas = document.querySelector('.pieces-slider__canvas');
    let imagesEl = [].slice.call(document.querySelectorAll('.pieces-slider__image'));
    let textEl = [].slice.call(document.querySelectorAll('.pieces-slider__text'));
    let slidesLength = imagesEl.length;
    
    // Define indexes related variables, as we will use indexes to reference items
    let currentIndex = 0,currentImageIndex, currentTextIndex, currentNumberIndex;
        
    let textIndexes = [];
    let numberIndexes = [];
    // Some other useful variables
    let windowWidth = window.innerWidth;
    let piecesSlider;

    // Update current indexes for image, text and number
    function updateIndexes() {
        currentImageIndex = currentIndex * 3;
        currentTextIndex = currentImageIndex + 1;
        currentNumberIndex = currentImageIndex + 2;
    }
    updateIndexes();

    // Options for images
    let imageOptions = {
        angle: 80, // rotate item pieces 45deg
        exraSpacing: {
            extraX: 100,
            extraY: 200
        }, // this extra spacing is needed to cover all the item, because angle != 0
        piecesWidth: function(){
            return Pieces.random(20, 100)
        }, // every piece will have a random width between 50px and 200px
        ty: function() {
                return Pieces.random(-400, 400);
            }, // every piece will be translated in the Y axis a random distance between -400px and 400px
            translate: function() {
                if (windowWidth > 1120) return {
                    translateX: 0,
                    translateY: -20
                };
                if (windowWidth > 720) return {
                    translateX: 0,
                    translateY: -100
                };
                if (windowWidth < 500) return {
                    translateX: 00,
                    translateY: -80
                };
                
                return {
                    translateX: -140,
                    translateY: -100
                }   
            }          
    }

    // Options for texts
    let textOptions = {
        color: '#ffff',
        backgroundColor: 'transparent',
        fontSize: function() {
            return windowWidth > 720 ? 50 : 30;
        },
        padding: '15 20 10 20',
        angle: -45,
        extraSpacing: {
            extraX: 0,
            extraY: 300
        },
        piecesWidth: function() {
            return Pieces.random(50, 100);
        },
        ty: function() {
            return Pieces.random(-200, 200);
        },
        translate: function() {
            if (windowWidth > 1120) return {
                translateX: 0,
                translateY: 330
            };
            if (windowWidth > 720) return {
                translateX: 0,
                translateY: 200
            };
            if (windowWidth < 500) return {
                translateX: 00,
                translateY: 300
            };
            return {
                translateX: 0,
                translateY: 100
            };
        }
    };

    let numberOptions = {
        color: '#d49417',
        backgroundColor: 'transparent',
        backgroundRadius: 0,
        fontSize: function() {
            return windowWidth > 720 ? 150 : 100;
        },
        padding: function() {
            return windowWidth > 720 ? '18 35 10 38' : '18 25 10 28';
        },
        angle: 0,
        piecesSpacing: 5,
        extraSpacing: {
            extraX: 10,
            extraY: 10
        },
        piecesWidth: 25,
        ty: function() {
            return Pieces.random(-200, 200);
        },
        translate: function() {
            if (windowWidth > 1120) return {
                translateX: 300,
                translateY: -300
            };
            if (windowWidth > 720) return {
                translateX: 50,
                translateY: -250
            };
            return {
                translateX: -140,
                translateY: -100
            };
        }
    };

    let items = [];
    let imagesReady = 0;
    for (let i = 0; i < slidesLength; i++) {
        // Wait for all images to load before initializing the slider and event listeners
        let slideImage = new Image();
        slideImage.onload = function() {
            if (++imagesReady == slidesLength) {
                initSlider();
                initEvents();
                
            }
        }
        // Push all elements for each slide with the corresponding options
        items.push({
            type: 'image',
            value: imagesEl[i],
            options: imageOptions
        });
        items.push({
            type: 'text',
            value: textEl[i].innerText,
            options: textOptions
        });
        items.push({
            type: 'text',
            value: i + 1,
            options: numberOptions
        });
        // Save indexes
        textIndexes.push(i * 3 + 1);
        numberIndexes.push(i * 3 + 2);
        // Set image src
        slideImage.src = imagesEl[i].src;

    };

     // Initialize a Pieces instance with all items we want to draw
    function initSlider() {
        // Stop any current animation if the slider was initialized before
        if (piecesSlider) {
            piecesSlider.stop();
        }

        // Save the new Pieces instance
            piecesSlider = new Pieces({
                canvas: sliderCanvas,
                items: items,
                x: 'centerAll',
                y: 'centerAll',
                piecesSpacing: .5,
                fontFamily: ["'Helvetica Neue', sans-serif"],
                animation: {
                    duration: function() { return Pieces.random(1000, 2000); },
                    easing: 'easeOutQuint'
                },
                // debug: true
            });
        

        // Animate all numbers to rotate clockwise indefinitely
        piecesSlider.animateItems({
            items: numberIndexes,
            duration: 20000,
            angle: 360,
            loop: true
        });

        // Show current items: image, text and number
        showItems();
}
    // Init Event Listeners
    function initEvents() {
        
        //Add the frist time class active
        document.querySelectorAll('[data-index]').forEach(li =>{
            if(li.dataset.index == currentIndex){
                li.classList.add('active');
            }})
        // Handle class active li
        function handleActiveClass(){
            
            document.querySelector('.active').classList.remove('active')
            document.querySelectorAll('[data-index]').forEach(li =>{
               if(li.dataset.index == currentIndex){
                   li.classList.add('active');
               }
            })
        }

        // Select prev or next using scroll
        function wheelEvent(){           
            function handleWheel(e){ 
                    if(e.deltaY < 0){           
                        prevItem();  
                        window.removeEventListener('wheel', handleWheel);
                        setTimeout(() => { //Slow scroll
                            window.addEventListener('wheel', handleWheel);
                        }, 500)
                    }
                    if(e.deltaY > 0){  
                            nextItem();
                            window.removeEventListener('wheel', handleWheel); 
                            setTimeout(() => { //Slow scroll
                                window.addEventListener('wheel', handleWheel);
                            }, 500)
                    }
                    handleActiveClass()
                }          
            window.addEventListener('wheel', handleWheel);                
        }
        wheelEvent()

        // Select the Item
        document.querySelectorAll('[data-index]').forEach(dataIndex =>{
            dataIndex.addEventListener('click', function(e){
                if(!e.target.dataset.index){
                    if(!e.target.parentNode.dataset.index){
                        selectItem(e.target.parentNode.parentNode)
                    }else{
                        selectItem(e.target.parentNode)
                    }
                }else{
                    selectItem(e.target);
                }
                    
                if(e.target.classList.contains('active') || e.target.parentNode.classList.contains('active') || e.target.parentNode.parentNode.classList.contains('active')){
                    return 
                } else{
                    handleActiveClass()
                }   
                
            })
        })
        // Select prev or next slide using arrow keys
        document.addEventListener('keydown', function (e) {
            if (e.key == "ArrowUp") { // left
                prevItem();
                handleActiveClass()                    
            } else if (e.key == "ArrowDown") { // right
                nextItem();
                handleActiveClass()
            }
        });

    // Handle `resize` event
    window.addEventListener('resize', resizeStart);
}

    // Show current items: image, text and number
    function showItems() {
        // Show image pieces

        piecesSlider.showPieces({
            items: currentImageIndex,
            ignore: ['tx'],
            singly: true,
            update: (anim) => {
                // Stop the pieces animation at 60%, and run a new indefinitely animation of `ty` for each piece
                if (anim.progress > 60) {
                    let piece = anim.animatables[0].target;
                    let ty = piece.ty;
                    anime.remove(piece);
                    anime({
                        targets: piece,
                        ty: piece.h_ty < 300 ? [{
                            value: ty + 10,
                            duration: 1000
                        }, {
                            value: ty - 10,
                            duration: 2000
                        }, {
                            value: ty,
                            duration: 1000
                        }] : [{
                            value: ty - 10,
                            duration: 1000
                        }, {
                            value: ty + 10,
                            duration: 2000
                        }, {
                            value: ty,
                            duration: 1000
                        }],
                        duration: 2000,
                        easing: 'linear',
                        loop: true
                    });
                }
            }
        });
        // Show pieces for text and number, using alternate `ty` values
        piecesSlider.showPieces({
            items: currentTextIndex
        });
        piecesSlider.showPieces({
            items: currentNumberIndex,
            ty: function(p, i) {
                return p.s_ty - [-3, 3][i % 2];
            }
        });
    }

    // Hide current items: image, text and number
    function hideItems() {
        piecesSlider.hidePieces({
            items: [currentImageIndex, currentTextIndex, currentNumberIndex]
        });
    }

    // Select the prev item: hide current items, update indexes, and show the new current item
    function prevItem() {
        hideItems();
        currentIndex = currentIndex > 0 ? currentIndex - 1 : slidesLength - 1;
        updateIndexes();
        showItems();
    }

    // Select the next item: hide current items, update indexes, and show the new current item
    function nextItem() {
        hideItems();
        currentIndex = currentIndex < slidesLength - 1 ? currentIndex + 1 : 0;
        updateIndexes();
        showItems();            
    }

    function selectItem(eTarget) {
        hideItems();
        currentIndex = parseInt(eTarget.dataset.index)
        
        switch (currentIndex) {
            case 0:
                currentImageIndex = 0 ;
                currentTextIndex = 1;
                currentNumberIndex = 2;
                break;
            case 1:
                currentImageIndex = 3;
                currentTextIndex = 4;
                currentNumberIndex = 5;
                break;
            case 2:
                currentImageIndex = 6;
                currentTextIndex =  7;
                currentNumberIndex = 8;
                break;
        
            default:
                break;
        }
        
        
        showItems();
    }

    // Handle `resize` event
    
    let initial = true, hideTimer, resizeTimer;

    // User starts resizing, so wait 300 ms before reinitialize the slider
    function resizeStart() {
        if (initial) {
            initial = false;
            if (hideTimer) clearTimeout(hideTimer);
            sliderCanvas.classList.add('pieces-slider__canvas--hidden');
        }
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resizeEnd, 300);
    }

    // User ends resizing, then reinitialize the slider
    function resizeEnd() {
        initial = true;
        windowWidth = window.innerWidth;
        initSlider();
        hideTimer = setTimeout(() => {
            sliderCanvas.classList.remove('pieces-slider__canvas--hidden');
        }, 500);
}
})();