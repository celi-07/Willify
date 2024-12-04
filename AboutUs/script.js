document.addEventListener('DOMContentLoaded', () => {
    load()
})

const params = new URLSearchParams(window.location.search)
const username = params.get('username')

const load = () => {
    account()
}

// Clicks and Hover
document.querySelector('.sign-in').addEventListener('click', () => {
    window.location.assign('../Register/index.html')
})

document.querySelector('.sign-up').addEventListener('click', () => {
    window.location.assign('../Register/index.html')
})

document.querySelector('.profile').addEventListener('click', e => {
    if (e.detail === 3) {
        window.location.assign('../Register/index.html')
    }
})

const account = () => {
    if (!username || username === "null") {
        document.querySelector('.account-options').style.display = 'flex'
        document.querySelector('.profile').style.display = 'none'
    }
    else {
        document.querySelector('.account-options').style.display = 'none'
        document.querySelector('.profile').style.display = 'flex'
        document.querySelector('.profile > p').innerHTML = username
    }
}