import "./styles/styles.sass"
document.addEventListener(`DOMContentLoaded`,function(e){
let slider = document.querySelector(`.testimonials__sliderWrapper`)
let sliderItems = slider.querySelectorAll(`.testimonials__sliderItem`)
let arrowLeft = document.querySelector(`.circle_testimonials[data-left]`)
let arrowRight = document.querySelector(`.circle_testimonials[data-right]`)

let sliderPosition = 0;
let itemsVisible = 3;
function scrollLeft(itemWidth,marginLeft){
    if(sliderPosition >=0){                   
        return
    }
    slider.style.transform = `translateX(${sliderPosition + itemWidth + marginLeft}px)` 
    sliderPosition += itemWidth + marginLeft   
}
function scrollRight(itemWidth,marginLeft){
    if(sliderPosition <= -(sliderItems.length - itemsVisible) * itemWidth + marginLeft ){
        return
    }
    slider.style.transform = `translateX(${sliderPosition - itemWidth - marginLeft }px)`
    sliderPosition -= itemWidth + marginLeft 
}
function scrollSlider(e){  
    let itemWidth = parseInt(getComputedStyle(sliderItems[0]).width);
    let marginLeft = parseInt(getComputedStyle(sliderItems[1]).marginLeft)
    if(e.target.dataset.left){
        scrollLeft(itemWidth,marginLeft)
    }else{
        scrollRight(itemWidth,marginLeft)
    }
}
function scrollMobile(e){
    let initialSliderPos = sliderPosition;
    const debouncedScrollLeft = debounce(scrollLeft,50)
    const debouncedScrollRight = debounce(scrollRight,50)
    const debouncedTouchMove = debounce(onTouchMove,30)
    let prevCoords = e.touches[0].clientX;
    let itemWidth = parseInt(getComputedStyle(sliderItems[0]).width);
    let marginLeft = parseInt(getComputedStyle(sliderItems[1]).marginLeft)
    let firstTouchCoords = e.touches[0].clientX
    function onTouchMove(e){
        let currCoords = e.touches[0].clientX 
        let coordsDiff = currCoords - prevCoords;    
        if(currCoords - firstTouchCoords > itemWidth / 2){           
            sliderPosition = initialSliderPos;
            initialSliderPos = null
            e.target.removeEventListener(`touchmove`,debouncedTouchMove)
            debouncedScrollLeft(itemWidth,marginLeft)            
            return
        }
        if(firstTouchCoords -  currCoords > itemWidth / 2){
            sliderPosition = initialSliderPos;
            initialSliderPos = null;
            e.target.removeEventListener(`touchmove`,debouncedTouchMove)
            debouncedScrollRight(itemWidth,marginLeft)            
            return
        }  
        sliderPosition += coordsDiff
        slider.style.transform = `translateX(${sliderPosition}px)`;  
        console.log(initialSliderPos)
        prevCoords = currCoords;           
    }
    function onTouchEnd(e){
        if(initialSliderPos != null){
            slider.style.transform = `translateX(${initialSliderPos}px)`;
        }        
        e.target.removeEventListener(`touchmove`,debouncedTouchMove)
        e.target.removeEventListener(`touchend`,onTouchEnd)
        console.log(initialSliderPos)
    }
    e.target.addEventListener(`touchmove`,debouncedTouchMove)
    e.target.addEventListener(`touchend`,onTouchEnd)
}
slider.addEventListener(`touchstart`,scrollMobile)
arrowLeft.addEventListener(`click`,scrollSlider)
arrowRight.addEventListener(`click`,scrollSlider)
function debounce(func, wait, immediate) {
    let timeout;  
    return function executedFunction() {
      const context = this;
      const args = arguments;
  
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
  
      const callNow = immediate && !timeout;
  
      clearTimeout(timeout);
  
      timeout = setTimeout(later, wait);
  
      if (callNow) func.apply(context, args);
    };
  };
})

