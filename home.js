async function india() {
    let req = await fetch(`
    https://newsapi.org/v2/top-headlines?q=India&apiKey=86535e05e2154e7880a4214aa9340de7`)
    let data = await req.json()
    data = data.articles
    console.log(data)
}
async function usa() {
    let req = await fetch(`
    https://newsapi.org/v2/top-headlines?q=USA&apiKey=86535e05e2154e7880a4214aa9340de7`)
    let data = await req.json()
    data = data.articles
    console.log(data)
}
async function nepal() {
    let req = await fetch(`
    https://newsapi.org/v2/top-headlines?q=Nepal&apiKey=86535e05e2154e7880a4214aa9340de7`)
    let data = await req.json()
    data = data.articles
    console.log(data)
}
async function china() {
    let req = await fetch(`
    https://newsapi.org/v2/top-headlines?q=China&apiKey=86535e05e2154e7880a4214aa9340de7`)
    let data = await req.json()
    data = data.articles
    console.log(data)
}

async function result(t) {
    let title = document.getElementById("search").value
    let response = await fetch(`https://newsapi.org/v2/top-headlines?q=${title}&apiKey=86535e05e2154e7880a4214aa9340de7`)

    data = await response.json()
    data = (data.articles)
    console.log(data)

    localStorage.setItem('data', JSON.stringify(data))
    location.assign('search.html')
}



async function Trending() {
    let req = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=86535e05e2154e7880a4214aa9340de7`)
    let data = await req.json()
    data = data.articles
    console.log(data)

    ShowNews(data)

}
Trending()
var show = document.getElementById("trending")

function ShowNews(data) {

    data.forEach((element) => {
        let card = document.createElement("div")
        card.setAttribute("class", "card");

        let img = document.createElement("img");
        img.src = `${element.urlToImage}`
        console.log(img.src)
        card.appendChild(img)

        let p = document.createElement("p");
        p.textContent = "Title: " + element.title;
        card.appendChild(p)
        let p1 = document.createElement("p");
        p1.textContent = "Author: " + element.author;
        p1.style.fontSize = "10px"
        card.appendChild(p1)
        card.addEventListener("click", function() {
            NewPage(element)

        });
        show.appendChild(card)
    })
}



if (localStorage.getItem("News") === null) {
    localStorage.setItem("News", JSON.stringify([]))
}

function NewPage(news) {
    let mynews = JSON.parse(localStorage.getItem("News"))

    mynews.push(news)

    localStorage.setItem("News", JSON.stringify(mynews))

    setTimeout(() => {
        window.location.href = "news.html"
    }, 1500)
}