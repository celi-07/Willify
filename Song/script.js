import { data } from '../const.js'

document.addEventListener('DOMContentLoaded', () => {
    load()
})

const params = new URLSearchParams(window.location.search)
const username = params.get('username')
const id = params.get('id')

const load = () => {
    account()
    fillList()
}

document.querySelector('.profile').addEventListener('click', e => {
    if (e.detail === 3) {
        window.location.assign('../Register/index.html')
    }
})

document.getElementById('aboutUs').addEventListener('click', () => {
    window.location.assign(`../AboutUs/index.html?username=${username}`)
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

// Card element
const card = (el, count) => {
    return count % 2 == 1 ? `
        <a href='../SongDetail/index.html?id=${el.id}&username=${username}'>
            <li class="odd-row">
                <div class="flex-row">
                    <div class="img" style="background-image: url('${el.image}')"></div>
                    <h3>${el.title}</h3>
                </div>
                <h3>${el.artist}</h3>
                <h3>${el.plays}</h3>
                <h3>${el.time}</h3>
            </li>
        </a>
    `   : `
        <a href='../SongDetail/index.html?id=${el.id}&username=${username}'>
            <li class="even-row">
                <div class="flex-row">
                    <div class="img" style="background-image: url('${el.image}')"></div>
                    <h3>${el.title}</h3>
                </div>
                <h3>${el.artist}</h3>
                <h3>${el.plays}</h3>
                <h3>${el.time}</h3>
            </li>
        </a>
    `
}

// Loop All Cards
const displayCards = (name, content) => {
    let count = 1
    content.forEach(el => {
        name.innerHTML += card(el, count)
        count += 1
    })
}

// Trigger Fill
const fillList = () => {
    let idFound = ""
    let content
    data.songList.forEach((el) => {
        if (el.id === id) {
            idFound = id
            document.getElementById('title-of-page').innerText = el.title
            content = el.content
        }
    })

    if (idFound) {
        const name = document.querySelector('.list')
        displayCards(name, content)
    }
    else {
        alert('NO DATA!!!')
        window.location.assign('../Home/index.html')
    }
}

// Clicks and Hover
document.querySelector('.sign-in').addEventListener('click', () => {
    window.location.assign('../Register/index.html')
})

document.querySelector('.sign-up').addEventListener('click', () => {
    window.location.assign('../Register/index.html')
})
