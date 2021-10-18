var data = JSON.parse(localStorage.getItem('data'))

let display = document.getElementById('display')

data.forEach(element => {
    let {
        title,
        url,
        description,
        urlToImage
    } = element
    let p = document.createElement('p')
    p.innerHTML = `<img src = "${urlToImage}" width 720> <br> Title: ${title} <br> Description: ${description} <br> URL: ${url}`
    display.append(p)
})