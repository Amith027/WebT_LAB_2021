const one = ()=> {
    //console.log("This is one")
    return "This is one"
}

const two = ()=> {  
    /* setTimeout(()=>{
        //console.log("This is two")
        return "This is two"
    }, 5000) */

    // returns a promise object.
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            //resolve("This is two")
            reject("Not Accepted")
        }, 5000)
    })
}

const three = ()=> {
    //console.log("This is three")
    return "This is three"
}

const four = ()=> {  // returns a promise object.
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("This is four")
        }, 5000)
    })
}

/*
two()
one()
three()
*/

/*
const display = async ()=> {
    try {
    let v2 = await two()
    console.log(v2)

    let v1 = one()
    console.log(v1)

    let v4 = await four()
    console.log(v4)

    let v3 = three()
    console.log(v3)
    }

    catch(err){
        console.log("You are in the catch block - " + err)
    }
    // try and catch are used to handle when reject is invoked.
}
*/

const display = async ()=> {
    let v2 = await two()
    console.log(v2)

    let v1 = one()
    console.log(v1)

    let v4 = await four()
    console.log(v4)

    let v3 = three()
    console.log(v3)
}

display()