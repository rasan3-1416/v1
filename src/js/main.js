// Common Variables
import { viewportWidth, header, desktopMenu, mobileMenu } from './commonVar.js'
// Utility Functions
import { displacement, actionQueryTaker } from './utility.js'
// Imports refreshed scrolled top, preloader and header scrolling action
import * as commonFeat from './commonFeat.js'

// Scrolled to the top on refresh
window.addEventListener('load', commonFeat.refreshedTop)

// Scrolled Feature
window.addEventListener('scroll', commonFeat.scrollAction)

// Skills Table Feature
const skillsTab = document.getElementById('skills-tab')
const skillsTabBtns = skillsTab.querySelectorAll('button')
const skillsTabIndicator = document.getElementById('skills-tab-indicator')
const skillsBody = document.getElementById('skills-body')
const skillsBodyContent = skillsBody.querySelectorAll('#skills-body-block')

const skillsLeftScrollNotifier = document.getElementById('skills-left-scroll-notifier')
skillsLeftScrollNotifier.addEventListener('click', () => {
    skillsTab.scrollLeft -= 50
})
const skillsRightScrollNotifier = document.getElementById('skills-right-scroll-notifier')
skillsRightScrollNotifier.addEventListener('click', () => {
    skillsTab.scrollLeft += 50
})

skillsTab.addEventListener('scroll', () => {
    let xScroll = skillsTab.scrollLeft
    if(xScroll > 150) {
        skillsLeftScrollNotifier.classList.add('dynamic-style')
    }else {
        skillsLeftScrollNotifier.classList.remove('dynamic-style')
    }
    if(xScroll > 600) { 
        skillsRightScrollNotifier.classList.add('dynamic-style')
    }else {
        skillsRightScrollNotifier.classList.remove('dynamic-style')
    }
})

skillsTabBtns.forEach((element, index) => {
    element.addEventListener('click', () => {
        let preActiveTab = skillsTab.querySelector('button.dynamic-style')
        displacement(preActiveTab, element)
        let preActiveBody = skillsBody.querySelector('div.dynamic-style')
        let activeBody = skillsBodyContent[index]
        displacement(preActiveBody, activeBody)
        if(viewportWidth > 576){
            // For Desktop Devices Style
            skillsTabIndicator.style.top = `calc(0px + ${index * 50}px)`
        }else {
            // For Mobile Devices Style
            skillsTabIndicator.style.left = `calc(0px + ${index * 120}px)`
        }
    })
    
});

// Services Modal Feature
const serviceBtns = document.querySelectorAll('#service-btn')
const serviceModals = document.querySelectorAll('#service-modal')
const serviceModalsCards = document.querySelectorAll('#service-modal-card')
const serviceModalsCloseBtn = document.querySelectorAll('#service-modal-close')

actionQueryTaker(serviceBtns,serviceModals)
actionQueryTaker(serviceBtns, serviceModalsCards)
actionQueryTaker(serviceModalsCloseBtn,serviceModals)

// Show More btn feature at Noteworthy project section
const showMoreBtn = document.getElementById('show-more')
const noteworthyProjects = document.getElementById('noteworthy-projects')
const noteworthyProjectsCards = noteworthyProjects.querySelectorAll('#noteworthy-projects-card')
let currentItem = 2

noteworthyProjectsCards.forEach((element, index) => {
    if(index > currentItem) {
        element.style.display = 'none'
    }
})

showMoreBtn.addEventListener('click', () => {
    let cards = Array.from(noteworthyProjectsCards)
    for(let i = currentItem; i < currentItem + 3; i++){
        cards[i].style.display = 'inline-block';
    }
    currentItem += 3
    if(currentItem >= cards.length){
        showMoreBtn.style.display = 'none'
    }
})

// Scroll section active link feature
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const yScroll = window.scrollY
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              desktopScrolledTo = document.querySelector(`#desktop-menu a[href*=${sectionId}]`),
              mobileScrolledTo = document.querySelector(`#mobile-menu a[href*=${sectionId}]`)

        if(yScroll > sectionTop && yScroll <= sectionTop + sectionHeight) {
            desktopScrolledTo.classList.add('dynamic-style')
            mobileScrolledTo.classList.add('dynamic-style')
        }else {
            desktopScrolledTo.classList.remove('dynamic-style')
            mobileScrolledTo.classList.remove('dynamic-style')
        }
    })
}

window.addEventListener('scroll', scrollActive)

// Scroll reveal animation feature
let homeElements = document.getElementById('home-container').querySelectorAll('span:not(.avoid-el), p, div')
let serviceCards = document.getElementById('service-cards').querySelectorAll('div')
let featuredProjects = document.querySelectorAll('#featured-project')

if(viewportWidth > 767.99) {
    commonFeat.actionByIndex({elements: desktopMenu, origin: 'top', delay: 1500})
    commonFeat.srAction('#left-side-social', {origin: 'left', delay: 4500})
    commonFeat.srAction('#right-side-mail', {origin: 'right', delay: 4500})
}else {
    commonFeat.srAction(header, {origin: 'top'})
    commonFeat.srAction(mobileMenu, {delay: 4500})
}

commonFeat.actionByIndex({elements: homeElements, delay: 3000})
commonFeat.srAction('#about, #skills, #noteworthy-projects, #contact, #footer')
commonFeat.actionByIndex({elements: serviceCards})
commonFeat.actionByIndex({elements: featuredProjects})
// commonFeatures.actionByIndex({elements: noteworthyProjectsCards})






