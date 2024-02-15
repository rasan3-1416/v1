const viewportWidth = window.visualViewport.width
const body = document.querySelector('body')
const preloader = document.getElementById('preloader')
const preloaderLogo = document.getElementById('preloader-logo')
const header = document.getElementById('header')
let desktopMenu = document.querySelectorAll('#desktop-menu li')
let mobileMenu = document.getElementById('mobile-menu')

export { viewportWidth, body, preloader, preloaderLogo, header, desktopMenu, mobileMenu }