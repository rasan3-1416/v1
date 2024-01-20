const viewportWidth = window.visualViewport.width
const body = document.querySelector('body')
const header = document.getElementById('header')


// Scroll Action Function
let lastScrolled = 0
function scrollAction() {
    let newScrolled = window.pageYOffset || document.documentElement.newScrolled
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
    if(xScroll > 150) {
        skillsLeftScrollNotifier.classList.add('dynamic-style')
    }else {
        skillsLeftScrollNotifier.classList.remove('dynamic-style')
    }
    if(xScroll > 500) { 
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
