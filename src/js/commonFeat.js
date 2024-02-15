import { preloader, preloaderLogo, header, body} from "./commonVar.js"
import { displacement } from "./utility.js"

// Fix the scrolled position to the home after every refresh
const refreshedTop = window.onbeforeunload = function () {
    return window.scrollTo(0, 0)
}

// Prelader Feature
let loader = setTimeout(() => {
    preloaderLogo.classList.add('dynamic-style')
    displacement(body, preloader)
}, 2000)

// Header scroll action feature
let lastScrolled = 0
function scrollAction() {
    let newScrolled = window.scrollY || document.documentElement.newScrolled
    if(window.scrollY === 0) {
        header.classList.remove('dynamic-style')
    }else if(newScrolled > lastScrolled) {
        header.classList.add('dynamic-style')
        header.style.top = '-7rem'
    }else if(newScrolled < lastScrolled) {
        header.style.top = '0'
    }
    lastScrolled = newScrolled
}

// Scroll reveal common feature for multiple pages

// basic reveal template
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2500,
    delay: 100,
    interval: 0,
    viewFactor: 0.25,
    // reset: true,
})

// Core reveal function 
function srAction(element, action){
    sr.reveal(element, action)
}

// Function for increasing the delay according to the index
let actionByIndex = function(value){
    let elements = value.elements
    let direction = value.origin || 'bottom'
    elements.forEach((element,index) => {
        let delayTiming = value.delay + (index * 100) || 100 + (index * 100)
        srAction(element, {origin: direction, delay: delayTiming})
    })
}

export {loader, scrollAction, refreshedTop, srAction, actionByIndex}