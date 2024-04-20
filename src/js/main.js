const sliderImage = document.querySelectorAll('.slider_image')
const prew = document.querySelector('.prew')
const next = document.querySelector('.next')

let index = 0
backgroundImage()
prew.addEventListener('click', () => {

    sliderImage[index].classList.remove('active')
    index--
    if (index < 0) {
        index = sliderImage.length - 1
    }
    sliderImage[index].classList.add('active')
    backgroundImage()
})

next.addEventListener('click', () => {
    sliderImage[index].classList.remove('active')
    index++
    if (index > sliderImage.length - 1) {
        index = 0
    }
    sliderImage[index].classList.add('active')
    backgroundImage()
})

function backgroundImage() {
    document.body.style.backgroundImage = `Url('${sliderImage[index].firstElementChild.src}')`
}