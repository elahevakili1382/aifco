// number 
const x= new Intl.NumberFormat("fa",{}).format(22)
console.log(x)
const y = new Intl.NumberFormat("fa",{style:"percent"}).format(0.22)
console.log(y)
const z = new Intl.NumberFormat("fa",{style:"currency",currency:"IRR",currencyDisplay:"code"}).format(22)
console.log(z)

// Date 
const a = new Intl.DateTimeFormat("fa",{}).format(new Date())
console.log(a)

const b = new Intl.DateTimeFormat("fa",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",weekday:"long"}).format(new Date())
console.log(b)
