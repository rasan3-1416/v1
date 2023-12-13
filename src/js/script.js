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
const skillsBodyBlock = skillsBody.querySelectorAll('div')

// A function that moves a class between elements
function displacement(elementRemove, elementAdd, desiredClass) {
    elementRemove.classList.remove(desiredClass)
    elementAdd.classList.add(desiredClass)
}

skillsTabBtns.forEach((element, index) => {
    element.addEventListener('click', () => {
        let preActiveTab = skillsTab.querySelector('button.dynamic-style')
        displacement(preActiveTab, element, 'dynamic-style')
        let preActiveBody = skillsBody.querySelector('div.dynamic-style')
        let activeBody = skillsBodyBlock[index]
        displacement(preActiveBody, activeBody, 'dynamic-style')
        if(viewportWidth > 768){
            // For Desktop Devices Style
            skillsTabIndicator.style.top = `calc(0px + ${index * 50}px)`
        }else {
            // For Mobile Devices Style
            skillsTabIndicator.style.left = `calc(0px + ${index * 150}px)`
        }
    })
    
});

