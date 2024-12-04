import { data } from '../const.js'

document.addEventListener('DOMContentLoaded', () => {
    load()
})

const params = new URLSearchParams(window.location.search)
const username = params.get('username')

const load = () => {
    account()
    fillCharts()
    fillRecommended()
    fillBestSellerContent()
}

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

document.getElementById('aboutUs').addEventListener('click', () => {
    window.location.assign(`../AboutUs/index.html?username=${username}`)
}) 

// Card element
const card = (el, cardType) => {
    return cardType === "list" ? `
        <a href="../SongDetail/index.html?id=${el.id}&username=${username}">
            <div class="card-${cardType}">
                <div class="card-${cardType}-img" style="background-image: url('${el.image}')"></div>
                <div class="card-${cardType}-content">
                    <p>${el.title}</p>
                    <span>${el.description}</span>
                </div>
            </div>
        </a>
    ` : `
        <a href="../Song/index.html?id=${el.id}&username=${username}">
            <div class="card-${cardType}">
                <div class="card-${cardType}-img" style="background-image: url('${el.image}')"></div>
                <div class="card-${cardType}-content">
                    <p>${el.title}</p>
                    <span>${el.description}</span>
                </div>
            </div>
        </a>
    `
}

// Loop All Cards
const displayCards = (name, category) => {
    if (category === "charts") {
        data.charts.forEach(el => {
           name.innerHTML += card(el, 'grid')
        })
    }
    else if (category === "recommended") {
        data.recommended.forEach(el => {
           name.innerHTML += card(el, 'grid')
        })
    }
    else if (category === "bestSeller") {
        data.bestSeller.forEach(el => {
            name.innerHTML += card(el, 'list')
        })
    }
    else {
        alert("NO DATA!!!")
    }
}

// Trigger Fill
const fillCharts = () => {
    const name = document.querySelector('.charts-content')
    displayCards(name, 'charts')
}

const fillRecommended = () => {
    const name = document.querySelector('.recommended-content')
    displayCards(name, 'recommended')
}

const fillBestSellerContent = () => {
    const name = document.querySelector('.best-seller-content')
    displayCards(name, 'bestSeller')
}

// Clicks and Hover
document.querySelector('.sign-in').addEventListener('click', () => {
    window.location.assign('../Register/index.html')
})

document.querySelector('.sign-up').addEventListener('click', () => {
    window.location.assign('../Register/index.html')
})
