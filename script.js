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

getQuote(url)
setTimeout(() => {
    main.className = ''
}, 2000)

const quoteBtn = document.querySelector('#new-quote')
const tweetBtn = document.querySelector('#tweet')
const body = document.querySelector('body')
const main = document.querySelector('main')
const button = document.querySelectorAll('button')

let i = 0
quoteBtn.addEventListener('click', () => {
    i += 1
    fetch(`https://source.unsplash.com/random/?landscape,book,night,city,countryside,library&${i}`).then( data => {
        body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${data.url})`
	})
    main.className = 'animate-reverse'
    setTimeout(() => {
        getQuote(url)
    }, 700)
    setTimeout(() => {
        main.className = 'animate-forwards'
        button.forEach(element => {
            element.disabled = true
        })
    }, 1000)
    setTimeout(() => {
        main.className = ''
        button.forEach(element => {
            element.disabled = false
        })
    }, 2000)
})

tweetBtn.addEventListener('click', () => {
    window.open(`https://twitter.com/intent/tweet?text=${content} - ${author}`, '_blank')
})
