 // Promise in Javascript

/*
let a = 1+2

let p = new Promise( function(resolve, react){
    if(a==5){
        resolve('success')
    }
    else{
        react('failure')
    }
})
*/

/*
console.log(p)

// This is Promise chaining
// Then --> Success callback
p.then( (messege)=>{
    console.log(messege + ' then is executed')
    console.log("Then is used in case there is success.")
})
.then( (msg)=>{
    console.log("Multiple functions can be executed using then")
})

// Catch --> Failure callback
.catch( (res)=>{
    console.log(res + ' catch is executed')
    console.log("Catch is used in case there is failure.")
})
*/

/*
const r1 = new Promise( (resolve, react)=>{
    resolve('Video 1 is recorded')
})

const r2 = new Promise( (resolve, react)=>{
    resolve('Video 2 is recorded')
})

const r3 = new Promise( (resolve, react)=>{
    resolve('Video 3 is recorded')
})

// If any one is failed then it will just display failure messege.
Promise.all([
    p,r1,r2,r3
]).then( (msg)=>{ console.log(msg) }
).catch(
    (msg)=> { console.log(msg) }
)

// It will display the complete status of all the promises.
Promise.allSettled([
    p,r1,r2,r3
]).then( (msg)=>{ console.log(msg) }
).catch(
    (msg)=> { console.log(msg) }
)

// This displays the messege of the first promise executed.
Promise.race([
    p,r1,r2,r3
]).then( (msg)=>{ console.log(msg) }
).catch(
    (msg)=> { console.log(msg) }
)

*/

let me = "amith"

let p = new Promise( (onSu, onFa)=>{
    if(me == "Amith"){
        onSu("My name is " + me)
    }
    else{
        onFa("My name is not " + me)
    }
})

console.log(p)

p.then( (msg)=>{
    console.log("Success!")
}).catch( (msg)=>{
    console.log("Failed")
})