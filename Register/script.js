const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;

    const validatePass = (password) => {
        let capital = false
        let nonCapital = false
        let number = false
        let symbol = false

        password.split('').forEach(el => {
            if (el >= 'A' && el <= 'Z') {
                capital = true
            }
            else if (el >= 'a' && el <= 'z') {
                nonCapital = true
            }
            else if (!isNaN(parseInt(el))) {
                number = true
            }
            else if (el != ' ') {
                symbol = true
            }

        })

        if (capital && nonCapital && number && symbol) {
            return true
        }

        return false
    }

    if (name.trim().length < 3 || (name[0] < 'A' || name[0] > 'z' || (name[0] > 'Z' && name[0] < 'a'))) {
        alert('Name must be more than 3 characters and should not start with a non-alphabet character.')
        e.preventDefault()
        return
    }

    if (!email.endsWith('@gmail.com')) {
        alert('Email should ends with @gmail.com')
        e.preventDefault()
        return
    }

    if (password.trim().length < 8) {
        alert('Password should be at least 8 characters long')
        e.preventDefault()
        return
    }

    if (!validatePass(password.trim())) {
        alert('Password should be at least contain 1 uppercase, 1 lowercase, 1 numeric, and 1 symbol.')
        e.preventDefault()
        return
    }

    if (age < 10) {
        alert('You should be older than 10 y.o. to sign up.')
        e.preventDefault()
        return
    }

    window.location.href = `../Home/index.html?username=${name}`
})