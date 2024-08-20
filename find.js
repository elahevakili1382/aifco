const inputEL = document.getElementById("input")
const text = document.getElementById("text")
inputEL.addEventListener("keyup",function(e){
    // console.log(this.value)
    const value = e.target.value //input 
    const pattern = new RegExp(value,"ig")//مدل دیگه ی ساخت ریجکس  pattern 
    const textT = text.textContent //div
    const result =textT.replace(pattern,`<span class="active">${value}</span>`)
    text.innerHTML=result //داخل تسکت دیو نشون بده اسپنو 
    console.log(result)

})
