const form = document.querySelector('.login-form')
form.addEventListener('submit', handleSubmit)
function handleSubmit(event) {
    evn.preventDefault()
    const {
        elements: {email, password},
    } = evn.curentTarget
    if (email.value === '' || password.value === '') {
        return alert('Va rugam completati toate campurile')
    }
    const user = {email: email.value, password: password.value}
    console.log(user)
    evn.curentTarget.reset();
}
