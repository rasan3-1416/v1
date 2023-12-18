const viewportWidth = window.visualViewport.width
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
const skillsBodyContent = skillsBody.querySelectorAll('div')

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
        if(viewportWidth > 768){
            // For Desktop Devices Style
            skillsTabIndicator.style.top = `calc(0px + ${index * 50}px)`
        }else {
            // For Mobile Devices Style
            skillsTabIndicator.style.left = `calc(0px + ${index * 150}px)`
        }
    })
    
});



// Services Modal Feature
const servicesBtns = document.querySelectorAll('#service-btn')
const serviceModals = document.querySelectorAll('#service-modal')
const serviceModalsCloseBtn = document.querySelectorAll('#service-modal-close')

// A query function that goes through elements to execute the required action
function actionQueryTaker(actionElements, TargetElements) {
    actionElements.forEach((element,index) => {
        element.addEventListener('click', () => {
            let activeElement = TargetElements[index]
            if(!activeElement.classList.contains('dynamic-style')){
                activeElement.classList.add('dynamic-style')
            }else {
                activeElement.classList.remove('dynamic-style')
            } 
        })
    })
}

actionQueryTaker(servicesBtns,serviceModals)
actionQueryTaker(serviceModalsCloseBtn,serviceModals)