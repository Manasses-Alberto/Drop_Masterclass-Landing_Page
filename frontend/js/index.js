let whatsappChatBtn = document.querySelector('button#whatsapp-chat')
let CTAs = document.querySelectorAll('button.CTA')
let mainNav = document.getElementById('main-nav')

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

for (let c = 0; c <= 4; c++) {
    CTAs[c].addEventListener('click', function () {
        setTimeout(function () {
            location.href = 'checkout.html'
        }, 3000)
    })
}
