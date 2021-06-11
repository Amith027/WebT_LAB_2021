let s1 = new Set()
let cnt = 0

function verified(){
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let cust = new ob(name, age)

    function ob(name, age){
        this.name = name;
        this.age = age;
    }

    val = s1.has(cust.name)
    console.log(cust.name)
    console.log(val)
    if(!val){
        s1.add(cust)
        document.getElementById('disp').innerHTML = "Done!!";
    }
    else{
        document.getElementById('disp').innerHTML = "Details exists";
    }
    
}