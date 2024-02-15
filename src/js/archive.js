// Common variables
import { viewportWidth, mobileMenu, desktopMenu } from './commonVar.js'

// Imports features like preloader and scrolled action
import * as commonFeat from './commonFeat.js'

// Scrolled to the top on refresh
window.addEventListener('load', commonFeat.refreshedTop)

// Scrolled Feature
window.addEventListener('scroll', commonFeat.scrollAction)

// Scroll reveal Feature

const archiveElements = document.getElementById('archive-el').querySelectorAll('h1, p')
const archiveTable = document.getElementById('archive-tb')

if(viewportWidth > 767.99) {
    commonFeat.actionByIndex({elements: desktopMenu, origin: 'top', delay: 1500})
    commonFeat.srAction('#left-side-social', {origin: 'left', delay: 6000})
    commonFeat.srAction('#right-side-mail', {origin: 'right', delay: 6000})
}else {
    commonFeat.srAction(header, {origin: 'top'})
    commonFeat.srAction(mobileMenu, {delay: 6000})
}

commonFeat.actionByIndex({elements: archiveElements, delay: 3000})
commonFeat.srAction(archiveTable, {delay: 4500})
