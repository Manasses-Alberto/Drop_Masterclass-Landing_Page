const checkoutForm = document.forms[0]
var email = document.querySelector('input#email-field')
var clientName = document.querySelector('input#name-field')
var expirationMonth = document.querySelector('select#month-field')
var expirationYear = document.querySelector('input#year-field')
var securityCode = document.querySelector('input#security-code-field')
var actualYear = new Date().getFullYear()

function checkFormFields() {
    if (/\d/.test(clientName.value) || /^[a-zA-Z\s]+$/.test(clientName.value) !== true) {
        return {'error': true, 'field': 'name-field'}
    } else if (expirationYear.value.length !== 4 || Number.parseInt(expirationYear) < actualYear) {
        return {'error': true, 'field': 'year-field'}
    } else if (/\D/.test(securityCode.value) !== false || securityCode.value.length !== 16) {
        return {'error': true, 'field': 'security-code-field'}
    }

    return {'error': false}
}

checkoutForm.addEventListener('submit', function (event) {
    event.preventDefault()
    let formCheck = checkFormFields()
    if (formCheck['error'] === false) {
        try {
            clientName.classList.remove('is-invalid')
            expirationMonth.classList.remove('is-invalid')
            expirationYear.classList.remove('is-invalid')
            securityCode.classList.remove('is-invalid')
        } catch { /* It ran without errors */ }

        email.classList.add('is-valid')
        clientName.classList.add('is-valid')
        expirationMonth.classList.add('is-valid')
        expirationYear.classList.add('is-valid')
        securityCode.classList.add('is-valid')
        location.href = 'thank-u.html'
    } else {
        try {
            clientName.classList.remove('is-invalid')
            expirationMonth.classList.remove('is-invalid')
            expirationYear.classList.remove('is-invalid')
            securityCode.classList.remove('is-invalid')
        } catch { /* It ran without errors */ }

        document.querySelector(`input#${formCheck['field']}`).classList.add('is-invalid')
    }
})
