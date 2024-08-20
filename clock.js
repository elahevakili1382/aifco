const clockEL =document.querySelector("#clock")

function tick(){
    const now = new Date() 
    const hours  = now.getHours()
    const minutes = now.getMinutes().toString().padStart(2,"0")
    const seconds = now.getSeconds().toString().padStart(2,"0")
    clockEL.textContent=`${hours}:${minutes}:${seconds}`

}
tick()
setInterval(tick,1000)