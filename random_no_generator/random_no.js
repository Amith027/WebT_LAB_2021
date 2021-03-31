function randgen() {
    var a;
    a = Math.floor( Math.random()*100 +1 ); // To produce a random number from 1 to 100

    var num;
    if(document.getElementById("num") != null){
    	num = document.getElementById('num').value;
    }else{
    	num = 12;
    }

	if(num<a){
		alert("The number guessed is lesser!");
	}else if(num>a){
		alert("The number guessed is higher!");
	}else{
		alert("Hurray!! You won");
	}

}