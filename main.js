
const generateMeme = document.querySelector("#generate-meme")

function updateDetails(title, url , author) {
    document.querySelector("#title").innerHTML = title
    document.querySelector("#image").src = url
    document.querySelector("#author").innerHTML = "Meme by: " + author
}

function getMemes() {
    const url = "https://meme-api.com/gimme"
    fetch(url).then(data => data.json()).then((data) => {updateDetails(data.title, data.url, data.author)})
}

generateMeme.addEventListener("click", getMemes)

getMemes();