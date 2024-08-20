const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const formEL = document.querySelector('form')
const searchinputEL = document.getElementById("search-input")
const buttonEL = document.getElementById("button-input")
const searchResultsEL = document.querySelector(".search-results")
const showmorebotton = document.getElementById('show-more-button')

let inputData = ""
let page = 1


async function searchImages() {
inputData = searchinputEL.value;
const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

const response = await fetch(url);
const data = await response.json();
if (page === 1){
    searchResultsEL.innerHTML = ""
}
    


const results = data.results;
results.map((result)=>{
    const imagewrapper = document.createElement("div")
    imagewrapper.classList.add("search-result")
    const image = document.createElement("img")
    image.src = result.urls.small
    image.alt = result.alt_description
    const imageLink = document.createElement("a")
    imageLink.href = result.links.html
    imageLink.target = "_blank"
    imageLink.textContent = result.alt_description

    imagewrapper.appendChild(image)
    imagewrapper.appendChild(imageLink)
    searchResultsEL.appendChild(imagewrapper)
})

page++

if(page > 1){
    showmorebotton.style.display = "block"

}

}

formEL.addEventListener("submit",(event) =>{
    event.preventDefault()
    page = 1
    searchImages()
})


showmorebotton.addEventListener("click", ()=>{
    searchImages()
})