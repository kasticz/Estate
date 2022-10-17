import "./styles/styles.sass"
import 'animate.css'
document.addEventListener(`DOMContentLoaded`,function(e){
let slider = document.querySelector(`.testimonials__sliderWrapper`)
let sliderItems = slider.querySelectorAll(`.testimonials__sliderItem`)
let arrowLeft = document.querySelector(`.circle_testimonials[data-left]`)
let arrowRight = document.querySelector(`.circle_testimonials[data-right]`)
//   --------------------------------------SLIDER------------------------------------------
let sliderPosition = 0;
let itemsVisible = window.innerWidth > 700 ? 2 : 1;
function highlightDot(){
    let dots = document.querySelectorAll(`.testimonials__sliderDot`)
    let width = slider.offsetWidth / sliderItems.length
    let currElem = Math.floor(-sliderPosition / width)
    dots.forEach(item=> item.style.background = "#7c7878")
    dots[currElem].style.background = "black"

}
function scrollLeft(itemWidth,marginLeft){
    if(sliderPosition >=0){                   
        return
    }
    slider.style.transform = `translateX(${sliderPosition + itemWidth + marginLeft}px)` 
    sliderPosition += itemWidth + marginLeft
    highlightDot()   
}
function scrollRight(itemWidth,marginLeft){
    if(sliderPosition <= -(sliderItems.length - itemsVisible) * itemWidth - marginLeft ){
        return
    }
    slider.style.transform = `translateX(${sliderPosition - itemWidth - marginLeft }px)`
    sliderPosition -= itemWidth + marginLeft
    highlightDot()     
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
    // let initialSliderPos = sliderPosition;
    const debouncedScrollLeft = debounce(scrollLeft,30)
    const debouncedScrollRight = debounce(scrollRight,30)
    const debouncedTouchMove = debounce(onTouchMove,1)
    let prevCoords = e.touches[0].clientX;
    let itemWidth = parseInt(getComputedStyle(sliderItems[0]).width);
    let marginLeft = parseInt(getComputedStyle(sliderItems[1]).marginLeft)
    let firstTouchCoords = e.touches[0].clientX
    function onTouchMove(e){
        let currCoords = e.touches[0].clientX 
        let coordsDiff = currCoords - prevCoords; 
        if(currCoords - firstTouchCoords > itemWidth / 3){ 
            // sliderPosition = initialSliderPos; 
            // initialSliderPos = null                
            slider.removeEventListener(`touchmove`,debouncedTouchMove)             
            debouncedScrollLeft(itemWidth,marginLeft)            
            return
        }
        if(firstTouchCoords -  currCoords > itemWidth / 3){
            // sliderPosition = initialSliderPos;
            // initialSliderPos = null
            slider.removeEventListener(`touchmove`,debouncedTouchMove)       
            debouncedScrollRight(itemWidth,marginLeft)            
            return
        } 
        // slider.style.transform = `translateX(${sliderPosition - coordsDiff}px)`
        // sliderPosition += coordsDiff
        // prevCoords = currCoords;           
    }
    function onTouchEnd(e){
        // if(!initialSliderPos){
        //     sliderPosition = initialSliderPos
        //     slider.style.transform = `translateX(${sliderPosition})`        
        // }

        slider.removeEventListener(`touchmove`,debouncedTouchMove)     
    }
    slider.addEventListener(`touchmove`,debouncedTouchMove)
    slider.addEventListener(`touchend`,onTouchEnd)
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
  }
//   --------------------------------------SLIDER------------------------------------------



//  --------------------------------------------STARS---------------------------------------------

let blackStar = document.createElement(`img`)
blackStar.src = "./assets/images/starBlack.svg"
blackStar.style.width = "1.125rem"
blackStar.style.height = "1.125rem"

let whiteStar = document.createElement(`img`)
whiteStar.src = "./assets/images/starWhite.svg"
whiteStar.style.width = "1.125rem"
whiteStar.style.height = "1.125rem"
sliderItems.forEach((item)=>{
    let blackStarsNum = item.dataset.stars
    if(blackStarsNum < 5){
        for(let i = 0; i < 5 - blackStarsNum;i++){
            item.prepend(whiteStar.cloneNode())
        }
    }
    for(let i=0;i < blackStarsNum;i++){
        item.prepend(blackStar.cloneNode())                
    }

})
//  --------------------------------------------STARS---------------------------------------------

//  --------------------------------------------MODAL---------------------------------------------
let modalButton = document.querySelector(`.showModal`)
let overlay = document.querySelector(`.overlay`)
let modal = document.querySelector(`.modal`)
let close = modal.querySelector(`.modal__close`)
let form = modal.querySelector(`.form_modal`)
let formInputs = form.querySelectorAll(`input`)
let nameInput = modal.querySelector(`[name="name"]`)
let telephoneInput = modal.querySelector(`[name="telephone"]`)
let emailInput = modal.querySelector(`[name="email"]`)
let submitButton = modal.querySelector(`.modal__submit`)


function modalClose(e){
    modal.style.display = `none`
    overlay.style.display = `none`
}


function onModalClick(e){
    formInputs.forEach(item=> item.value = "")
   modal.style.display = `flex`
    overlay.style.display = `block`
    document.querySelector(`.modal__close`).addEventListener(`click`,modalClose)
    overlay.addEventListener(`click`,modalClose)
}


function validate(e){

    e.preventDefault()   


    let alph = `abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщъыьэя`
    let nums = [`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`]
    let telephoneValue = telephoneInput.value
    let emailValue = emailInput.value
    let errors = form.querySelectorAll(".form__error")


    errors.forEach(item=>item.remove()) 



        for(let letter of nameInput.value){
            if(!alph.includes(letter.toLowerCase())){    
                createError("Name should only contain letters",nameInput)   
                break; 
            }            
        }  

    


    if(telephoneValue.length > 0){
        for(let num of telephoneValue.split(``)){
            if(!nums.includes(num)){   
                createError("Telephone number should only contain numbers.",telephoneInput) 
                break;      
            }            
        }  
        if(telephoneValue.length > 12 || telephoneValue.length < 6){      
            createError("This telephone number is too short",telephoneInput)
      }  
    }


    if(emailValue.length > 0){
        let at = emailValue.indexOf("@")
        let dot = emailValue.indexOf(".")            
        if((at == -1 || dot == -1) || dot == emailValue.length - 1 || at == emailValue.length - 1 || emailValue.length < 6){
            createError(`This email is invalid`,emailInput)               
        }
    }


    if(!nameInput.value || !telephoneValue || !emailValue){
        createError("Please, fill in your personal information",emailInput)
    }


    if(!form.querySelector(`.form__error`)){
        let prevModal = modal.innerHTML
        let thankYou = document.createElement(`div`)
        thankYou.classList.add("thankYou")
        thankYou.textContent = "Thank You! We will contact you soon"
        modal.append(thankYou)
        setTimeout(() => {
            modalClose() 
            thankYou.remove()           
        }, 2500);
    }


    function createError(errorText,element){
        let error = document.createElement('div')
        error.classList.add('form__error')
        error.textContent = errorText
        element.insertAdjacentHTML('afterend',error.outerHTML)    
    }


}


modalButton.addEventListener(`click`,onModalClick)
submitButton.addEventListener(`click`,validate)
//  --------------------------------------------Modal---------------------------------------------


// --------------------------------------------SCROLL---------------------------------------------
let pageUp = document.querySelector(".pageUp")
pageUp.addEventListener(`mouseover`,function(e){
    pageUp.style.transform = "translateY(-6px)"
})
pageUp.addEventListener(`mouseleave`,function(e){
    pageUp.style.transform = "translateY(6px)"
})
pageUp.addEventListener(`click`,function(e){
    window.scrollTo(0,0)
})


// --------------------------------------------SCROLL---------------------------------------------




// --------------------------------------------Requirements---------------------------------------------

let descrs = document.querySelectorAll(`.requirements__descrWrapper`)
let reqImg = document.querySelector(`.requirements__img`)

descrs.forEach((item)=>{
    item.addEventListener(`click`,function(e){
        reqImg.src = item.dataset.img
    })
})




// --------------------------------------------Requirements---------------------------------------------

// --------------------------------------------Animation&lazyLoad---------------------------------------------

let sections = document.querySelectorAll("[data-section]")
let imgs = document.querySelectorAll("img");
let animHeight = window.innerWidth > 1200 ? "31.25rem": window.innerWidth > 700 ? "26rem": "20rem"

function getTopCoord(elem){
    return elem.getBoundingClientRect().top - window.innerHeight
}

function animateSections(e){
    sections.forEach((item)=>{
        let top = getTopCoord(item)
        if(top < 200){
            item.style.visibility = "visible"
            item.style.transform = "translateY(0)"
        }
    })
}
function lazyLoadImgs(e){
    imgs.forEach((item)=>{        
        if(item.getAttribute("src") == "./assets/images/imgPlaceholder.png"){
            let top = getTopCoord(item)
            if(top < 500){
                item.src = item.dataset.imgsrc
            }
        }
    })
}
if(window.pageYOffset == 0){
    sections.forEach((item)=>{
        item.style.transform = `translateY(${animHeight})`
        item.style.transition = "2s all"
    })
    document.addEventListener(`scroll`,debounce(animateSections,10))    
}else{
    sections.forEach((item)=>{
        item.style.visibility = "visible"
    })
}
document.addEventListener(`scroll`,debounce(lazyLoadImgs,10))
lazyLoadImgs()
})

