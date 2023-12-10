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