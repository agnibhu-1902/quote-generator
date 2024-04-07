const url = 'https://api.quotable.io/random'

let content
let author
const getQuote = async (url) => {
    const response = await fetch(url);
    var data = await response.json();
    content = data.content
    author = data.author
    document.querySelector('.quote-body blockquote').innerText = content
    document.querySelector('.quote-body span').innerText = author
}

getQuote(url);

const quoteBtn = document.querySelector('#new-quote')
const tweetBtn = document.querySelector('#tweet')
const body = document.querySelector('body')
const main = document.querySelector('main')

quoteBtn.addEventListener('click', () => {
    window.location.reload()
})

const generateImage = () => {
    body.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url("https://source.unsplash.com/random/?landscape,book,night,city,countryside,library")'
}

body.addEventListener('load', () => {
    generateImage()
})

tweetBtn.addEventListener('click', () => {
    window.open(`https://twitter.com/intent/tweet?text=${content} - ${author}`, '_blank')
})
