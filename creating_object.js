                               // There are 3 ways

// 1. Object literal - also called object initialiser.
// Syntax: let emp = {p1: v1, p2: v2, ...... , m1: function()}

let emp = {
	name: "Ram",
	id: "A123",
	age: 22,
	projects: {
		DBMS: "Dobble",
		Flutter: "BMI Calci"
	}
}

console.log(emp);
console.log(emp.projects.Flutter)

delete emp.age;


// 2. Using Object instance.

let person = new Object();

person.name = "Hanuman";
person.age = 22;
console.log(person);


// 3. By writing a user defined constructor function.

function car (name, model, year, etype){
	this.name = name;
	this.model = model;
	this.year = year;
	this.etype = engine;  // Important.
}

function engine(cylinders,size){
	this.cylinders = cylinders;
	this.size = size;
}

let eOfCar = new engine(20, "Max");
let myCar = new car("Tesla 03", "Sedan", 2018, engine);
console.log(myCar);
console.log('');
