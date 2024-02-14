// Imports features like preloader and scrolled action
import * as commonFeatures from './commonFeatures.js'

// Scrolled to the top on refresh
window.addEventListener('load', commonFeatures.refreshedTop)

// Scrolled Feature
window.addEventListener('scroll', commonFeatures.scrollAction)