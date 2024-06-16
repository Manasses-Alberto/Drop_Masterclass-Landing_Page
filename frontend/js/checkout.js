const checkoutForm = document.forms[0]
var email = document.querySelector('input#email-field')
var clientName = document.querySelector('input#name-field')
var expirationMonth = document.querySelector('select#month-field')
var expirationYear = document.querySelector('input#year-field')
var securityCode = document.querySelector('input#security-code-field')
var actualYear = new Date().getFullYear()
var actualMonth = new Date().getMonth()

function checkFormFields() {
    if (/\d/.test(clientName.value) || /^[a-zA-Z\s]+$/.test(clientName.value) !== true) {
        return {'error': true, 'field': clientName}
    } else if (expirationYear.value.length !== 4 || Number.parseInt(expirationYear) < actualYear) {
        return {'error': true, 'field': expirationYear}
    } else if (/\D/.test(securityCode.value) !== false || securityCode.value.length !== 16) {
        return {'error': true, 'field': securityCode}
    } else if (Number.parseInt(expirationYear.value) < actualYear) {
        return {'error': true, 'field': expirationYear}
    } else if (Number.parseInt(expirationYear.value) === actualYear) {
        if (Number.parseInt(expirationMonth.value) < actualMonth) {
            return {'error': true, 'field': expirationMonth}
        }
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

        formCheck['field'].classList.add('is-invalid')
    }
})
