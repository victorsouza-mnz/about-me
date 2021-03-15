const btnRight = document.querySelector('.arrow-btn.-right')
const btnLeft = document.querySelector('.arrow-btn.-left')
const elements = document.querySelector('.elements')
let deslocamento = 0
btnRight.addEventListener('click', e => {
    deslocamento += 100
    elements.style = `transform: translateX(${deslocamento}px)`
})


btnLeft.addEventListener('click', e => {
    deslocamento -= 100
    elements.style = `transform: translateX(${deslocamento}px)`
})