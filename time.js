//iso8601
// let time = new Date("2003-10-14T18:02:00Z") //1970   // month start from 0 = 0 to 11 
// let z = new Date(30*365*24*60*60*1000)
let d = new Date(2024,5-1,11,23,10,30,60) //object 
let d2 = new Date()
const pass = Math.trunc((d2-d) / (1000*60*60*24))
if (pass===0) console.log("Today")
else if(pass<7) console.log(`${pass} days ago`)
    else console.log(new Date(d2-d))
    




















//timestamp =>12556987512ms  gettime()
// console.log(d.getFullYear())
// console.log(d.getMonth() +1)
// console.log(d.getDay()) //day of week
// console.log(d.getDate()) //day of month 
// console.log(d.getHours())
// console.log(d.getMinutes())
// console.log(d.getMilliseconds())
// console.log(d.getTime()) //timestamp from 1970 ms  1970 to 2003 
// console.log(Date.now()) // از تازیخی کخ زدی رو تبدیل به timestamp میکنه تا الان 2003  2024 
// console.log(d.getFullYear())
// console.log(d.toISOString())
// //set
// d.setFullYear(2024)
// d.setMonth(5)
// d.setDate(19)













