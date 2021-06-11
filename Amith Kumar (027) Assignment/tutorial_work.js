
let arr = ["goal", "new", "user", "sit", "eat", "dinner", "seat"]
const func1 = ()=>{
    let val = document.getElementById("1").value;
    let patt = new RegExp(val);
    let res = arr.filter(item=>!patt.exec(item));
    document.getElementById("dis1").innerHTML = res;
}

const func2 = () =>{
    let val =document.getElementById("2").value;
    let val1 = document.getElementById("22").value;
    let patt1 = new RegExp(val);
    let patt2 = new RegExp(val1);
    let res = arr.filter(item => patt1.exec(item) && patt2.exec(item))
    document.getElementById("dis2").innerHTML = res;
}

const func3 = () =>{
    let val = document.getElementById("3").value;
    let val1 = document.getElementById("32").value;
    let res = arr.filter(item => item.startsWith(val)||item.endsWith(val1))
    if(res.length === 0){
        document.getElementById("dis3").innerHTML = "No elements";
    }
    else document.getElementById("dis3").innerHTML = res; 

    
}

const func4 = () =>{
    let val = document.getElementById("4").value;
    let patt = new RegExp(val);
    patt.compile(patt);
    let res = arr.map(item =>item.replace(patt,'Y'))
    document.getElementById("dis4").innerHTML = res;
}

const func5 = () => {
    let val = "refused"
    let val1 = "reed";
    let val2 = "received";
    let patt = new RegExp(val);
    let patt1 = new RegExp(val1);
    let patt2 = new RegExp(val2);
    patt.compile(patt)
    let str = "refused reed redo received"
    let res = str.replace(patt,'X')
    let res1 = res.replace(patt2,'X');
    let res2 = res1.replace(patt1,'X');
    document.getElementById("dis5").innerHTML = res2;
 }

function func6()
{
    let str= "th\\er\\e ar\\e common asp\\ects among th\\e alt\\ernations";
       let pat=/\\e/gi;
      let newstr=str.replace(pat,"e");
      document.getElementById("dis6").innerHTML = newstr;
}

