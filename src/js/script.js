const viewportWidth = window.visualViewport.width
const body = document.querySelector('body')
const header = document.getElementById('header')

// Prelader Feature
const preloader = document.getElementById('preloader')

let loader = setTimeout(() => {
    preloader.classList.add('dynamic-style')
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

window.addEventListener('scroll', scrollAction)


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
    console.log(xScroll)
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

// A function that moves a class between elements
function displacement(elementRemove, elementAdd, desiredClass) {
    desiredClass = desiredClass || 'dynamic-style'
    elementRemove.classList.remove(desiredClass)
    elementAdd.classList.add(desiredClass)
}

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

// A query function that goes through elements to execute the required action
function actionQueryTaker(actionElements, TargetElements, primeElement) {
    primeElement = primeElement || body
    actionElements.forEach((element,index) => {
        element.addEventListener('click', () => {
            let activeElement = TargetElements[index]
            if(!activeElement.classList.contains('dynamic-style')){
                activeElement.classList.add('dynamic-style')
                primeElement.classList.add('dynamic-style')
            }else {
                activeElement.classList.remove('dynamic-style')
                primeElement.classList.remove('dynamic-style')
            } 
        })
    })
}

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

// Basic Scroll reveal function
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2500,
    delay: 100,
    interval: 0,
    viewFactor: 0.25,
    // reset: true,
})

// Core function
function srAction(element, action){
    sr.reveal(element, action)
}

// Delay increase According to Index Function
let actionByIndex = function(value){
    let elements = value.elements
    let direction = value.origin || 'bottom'
    elements.forEach((element,index) => {
        let delayTiming = value.delay + (index * 100) || 100 + (index * 100)
        srAction(element, {origin: direction, delay: delayTiming})
    })
}

let desktopMenu = document.querySelectorAll('#desktop-menu li')
let mobileMenu = document.getElementById('mobile-menu')
let homeElements = document.getElementById('home-container').querySelectorAll('span:not(.avoid-el), p, div')
let serviceCards = document.getElementById('service-cards').querySelectorAll('div')
let featuredProjects = document.querySelectorAll('#featured-project')

if(viewportWidth > 767.99) {
    actionByIndex({elements: desktopMenu, origin: 'top'})
    srAction('#left-side-social', {origin: 'left', delay: 2800})
    srAction('#right-side-mail', {origin: 'right', delay: 2800})
}else {
    srAction(header, {origin: 'top'})
    srAction(mobileMenu, {delay: 2800})
}
actionByIndex({elements: homeElements, delay: 1000})
srAction('#about, #skills, #noteworthy-projects, #contact, #footer')
actionByIndex({elements: serviceCards})
actionByIndex({elements: featuredProjects})
// actionByIndex({elements: noteworthyProjectsCards})