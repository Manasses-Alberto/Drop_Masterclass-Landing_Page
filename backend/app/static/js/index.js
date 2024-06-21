let whatsappChatBtn = document.querySelector('button#whatsapp-chat')
let CTAs = document.querySelectorAll('button.CTA')
let mainNav = document.getElementById('main-nav')
let carousel = document.querySelector('div#testmonies-carousel')

document.getElementById('menu-controller-btn').onclick = function () {
    const bars = document.getElementsByClassName('bar')
    for (let x = 0; x <= 2; x++) { bars[x].classList.toggle('close') }
    if (mainNav.classList.contains('d-none') === true) {
        mainNav.classList.replace('d-none', 'd-flex')
    } else {
        mainNav.classList.replace('d-flex', 'd-none')
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var ptyping = document.querySelector('h1.typing-effect')
    var text = ptyping.getAttribute('data-text')
    function typeWriter(text, i, cb) {
        if (i < text.length) {
            ptyping.textContent += text.charAt(i)
            setTimeout(function() {
                typeWriter(text, i + 1, cb)
            }, 40)
        } else {
            cb()
        }
    }

    typeWriter(text, 0, function() { /* Typed */ })
    if (window.innerWidth >= 992) {
        carousel.classList.remove('carousel', 'slide')
        carousel.removeAttribute('data-bs-ride')
        carousel.querySelector('div.carousel-indicators').remove()
        carousel.querySelectorAll('div')[0].classList.remove('carousel-inner')
        for (let x = 0; x <= carousel.querySelectorAll('div').length; x++) {
            carousel.querySelector('div.w-100').querySelectorAll('div')[x].classList.remove('carousel-item')
            carousel.querySelector('div.w-100').querySelectorAll('div')[x].classList.remove('active')
        }
    }
})

window.onscroll = function () {
    if (window.scrollY >= 250) {
        if (whatsappChatBtn.classList.contains('closed') === true) {
            whatsappChatBtn.classList.replace('closed', 'opened')
        }
    } else {
        if (whatsappChatBtn.classList.contains('opened') === true) {
            whatsappChatBtn.classList.replace('opened', 'closed')
        }
    }
}

for (let c = 0; c <= 3; c++) {
    CTAs[c].addEventListener('click', function () {
        setTimeout(function () {
            location.href = 'checkout/'
        }, 3000)
    })
}
