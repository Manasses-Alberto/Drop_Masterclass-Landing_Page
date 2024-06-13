let whatsappChatBtn = document.querySelector('button#whatsapp-chat')

document.getElementById('menu-controller-btn').onclick = function () {
    const bars = document.getElementsByClassName('bar')
    for (let x = 0; x <= 2; x++) { bars[x].classList.toggle('close') }
    document.getElementById('main-nav').classList.toggle('closed')
}

document.addEventListener('DOMContentLoaded', function() {
    var ptyping = document.querySelector('h1.typing-effect')
    var text = ptyping.getAttribute('data-text')
    function typeWriter(text, i, cb) {
        if (i < text.length) {
            ptyping.textContent += text.charAt(i);
            setTimeout(function() {
                typeWriter(text, i + 1, cb);
            }, 40);
        } else {
            cb();
        }
    }

    typeWriter(text, 0, function() { /* Typed */ })
});

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
