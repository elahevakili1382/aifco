const divEL=document.querySelector("div")
divEL.addEventListener("mousemove",function(e){
    document.body.style.backgroundColor =`rgb(${e.offsetX},${e.offsetY},${(e.offsetX+e.offsetY)/2})`
})