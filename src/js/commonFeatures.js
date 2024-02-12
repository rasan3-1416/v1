import { preloader, preloaderLogo, header, body } from "./commonVar.js"
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

// Scroll Reveal Feature for muiltiple pages






export {loader, scrollAction, refreshedTop}