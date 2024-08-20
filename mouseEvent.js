const divEL = document.querySelector("div")

// divEL.addEventListener("click",function () {
//     this.style.backgroundColor="red"
    
// })

// right click
divEL.addEventListener("contextmenu",function () {
    this.style.backgroundColor="green"
    
})
// double click
divEL.addEventListener("dblclick",function () {
    this.style.backgroundColor="gold"
    
})

divEL.addEventListener("mouseover",function () {
    this.style.backgroundColor="gray"
    
})

divEL.addEventListener("mouseout",function () {
    this.style.backgroundColor="lime"
    
})

divEL.addEventListener("mousedown",function () {
    this.style.backgroundColor="black"
    
})

divEL.addEventListener("mouseup",function () {
    this.style.backgroundColor="pink"
    
})

divEL.addEventListener("mousemove",function () {
    this.style.backgroundColor="lightblue"
    
})