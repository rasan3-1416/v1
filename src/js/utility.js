// Common Variables
import { body } from './commonVar.js'

// A function that moves a class between elements
function displacement(elementRemove, elementAdd, desiredClass) {
    desiredClass = desiredClass || 'dynamic-style'
    elementRemove.classList.remove(desiredClass)
    elementAdd.classList.add(desiredClass)
}

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

export {displacement, actionQueryTaker}