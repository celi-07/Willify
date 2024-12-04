import { data } from '../const.js'

document.addEventListener('DOMContentLoaded', () => {
    load()
})

const params = new URLSearchParams(window.location.search)
const username = params.get('username')
const id = params.get('id')

const load = () => {
    account()
    fillData()
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
        alert('Please sign in to access the page!')
        window.location.assign('../Register/index.html')
    }
    else {
        document.querySelector('.profile').style.display = 'flex'
        document.querySelector('.profile > p').innerHTML = username
    }
}

const fillData = () => {
    let detailData
    data.songDetail.forEach((el) => {
        if (el.id === id) {
            detailData = el
        }
    })
    
    const calculateWidth = (start, end) => {
        start = start.split(':')
        let START = parseInt(start[0])*60 + parseInt(start[1])
        end = end.split(':')
        let END = parseInt(end[0])*60 + parseInt(end[1])
        return ((START / END) * 100).toString() + '%'
    }

    if (!detailData) {
        alert('Id does not match, No Data!\nPage Not Found!')
        document.querySelectorAll('.title-input').forEach(i => {
            i.innerText = "N/A"
        }) 
        document.querySelectorAll('.artist-input').forEach(i => {
            i.innerText = "N/A"
        }) 
        document.querySelectorAll('.dateAndPlay-input').forEach(i => {
            i.innerText = "N/A"
        }) 
        document.querySelector('.progress-filled-song').style.width = 0
        document.querySelector('.progress-filled-speaker').style.width = '0%'
        document.querySelector('.lyrics').innerText = 'N/A'
    }
    else {
        document.querySelectorAll('.image-input').forEach(i => {
            i.setAttribute("src", detailData.image)
        }) 
        document.querySelectorAll('.title-input').forEach(i => {
            i.innerText = detailData.title
        }) 
        document.querySelectorAll('.artist-input').forEach(i => {
            i.innerText = detailData.artist
        }) 
        document.querySelectorAll('.dateAndPlay-input').forEach(i => {
            i.innerText = `Released on ${detailData.date} • ${detailData.plays} plays`
        }) 
        document.querySelector('.progress-filled-song').style.width = calculateWidth(detailData.timeStart, detailData.timeEnd)
        document.querySelector('.progress-filled-speaker').style.width = (Math.round(Math.random() * 99) + 1).toString() + '%'
        document.getElementById('lyrics').innerHTML = detailData.lyrics
    }
}
