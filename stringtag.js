const divEL =document.getElementById("root")
const tag = "<h1>Hello-world</h1>" //string 
divEL.insertAdjacentHTML("beforebegin",tag) //قبل از شروع تگ 
divEL.insertAdjacentHTML("afterbegin",tag) //بعد از شروع تگ 
divEL.insertAdjacentHTML("beforeend",tag) //قبل از تمام شدن تگ 
divEL.insertAdjacentHTML("afterend",tag) 

const tag2 = document.createElement("h1")//object  referencs یه ادمه 4 تا جا نمیتونه باشه 
tag.textContent = "Salam"
tag.className = "test"
divEL.before(tag)
divEL.prepend(tag.cloneNode(true))
divEL.append(tag)
divEL.after(tag)