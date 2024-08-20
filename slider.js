const slideEls = document.querySelectorAll(".slider .slides .slide")
const prevEL = document.querySelector(".prev")
const nextEL = document.querySelector(".next")
const paginationELs = document.querySelector(".pagination")
let currentSlide = 0

function changeSlide(n) {
slideEls.forEach((slide,index) => slide.style.transform =`translateX(${(index - 1)* 100}%)`)
activePaginate(n)
}

function prev() {
    currentSlide-- 
    if(currentSlide<0)currentSlide = slideEls.length - 1
    changeSlide(currentSlide)
    console.log(currentSlide)  
}

function next(){
    currentSlide++
    if(currentSlide>slideEls.length - 1)currentSlide = 0 
    changeSlide(currentSlide)
    console.log(currentSlide)

}

function createPagination() {  //_ = یعنی پارامتر اولی و نمیخواهی 
    slideEls.forEach((_,index) => {
        paginationELs.insertAdjacentHTML("beforeend",`<div class="paginate ${index === 0? "active" : ""}" data-slide="${index}"></div>`)
    })
    
}

function activePaginate(n) {
    const currentPaginate = document.querySelector(`.paginate[data-slide="${n}"]`)
    const siblings = [...currentPaginate.parentElement.children]
    siblings.forEach(sib => sib.classList.remove("active"))
    currentPaginate.classList.add("active")
    
}

createPagination()
changeSlide(0)
prevEL.addEventListener("click",prev)
nextEL.addEventListener("click",next)

document.addEventListener("keydown",function (e) {
    if(e.key === "ArrowLeft") prev()
    if(e.key === "ArrowRight") next()

})

paginationELs.addEventListener("click",function (e) {
    const clicked = e.target
    if(!clicked.classList.contains("paginate")) return;
    const slideDataset = +clicked.dataset.slide
    currentSlide = slideDataset
    changeSlide(currentSlide)
    
})



setInterval(next,2500)   //برای زمانه هز 2500ثانیه بره اسلاید بعدی 
//setInterval is a function for time 