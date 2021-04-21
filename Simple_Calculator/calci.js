function inp(n){
	document.form.textview.value = document.form.textview.value + n;
}

function clean(){
	document.form.textview.value="";
}

function calculate(){
	var exp = document.form.textview.value;
	if(exp){
		document.form.textview.value = eval(exp);
	}
}

function backspace(){
	var exp = document.form.textview.value;
	document.form.textview.value = exp.substring(0, exp.length-1);
}