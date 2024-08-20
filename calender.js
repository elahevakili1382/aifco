const prev = document.getElementById("prev")
const next = document.getElementById("next")
const screen = document.getElementById("screen")
const body = document.getElementById("body")
const date = new Date()
let monthCounter = date.getMonth()

function setScreen(c=new Date(Date.now()).getMonth()){
    date.setMonth(c)
    screen.textContent = `${date.getFullYear()}/${String(date.getMonth()+1).padStart(2,"0")}`
}
setScreen()


function getmonthDayCount(d = Date().now){
const now = new Date(d)
now.setMonth(now.getMonth()+1)
now.setDate(0)
return now.getDate()
}

function getEmptyDayCount(d = Date.now()) {
    const now = new Date(d)
    now.setDate(1)
    return now.getDay()
}
getEmptyDayCount()

function setDayBox() {
    let tag = ""
    for (let i = 1; i < getmonthDayCount(date) +getEmptyDayCount(date); i++) {
        tag += `${i - 1 % 7 === 0 ? "<tr>":""}<td data-date="${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(i-getEmptyDayCount(date)).padStart(2,"0")}">${i <=getEmptyDayCount(date)? "":
        i-getEmptyDayCount(date)}</td>${i % 7 === 0 ? "</tr>" : ""}`
    }
body.innerHTML=tag
document.querySelector(`[data-date="${new Date(Date.now()).toISOString().split("T")[0]}"]`)?.classList.add("active")
document.querySelectorAll("td").forEach( d=>{
   const now =new Date(Date.now())
   now.setHours(0)
   now.setMinutes(0)
   now.setSeconds(0)
   if(new Date(d.dataset.date)<now) d.style.background="gray"
})
    
}

setScreen()
setDayBox()
next.addEventListener("click",function(){
    monthCounter++
    setScreen(monthCounter)
    setDayBox()
})
prev.addEventListener("click",function () {
    monthCounter--
    setScreen(monthCounter)
    setDayBox()
    
})

