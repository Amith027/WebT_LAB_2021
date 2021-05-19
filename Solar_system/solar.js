/* The backend code is written here */

function solarSystem(name, distance, s_number, fact, disp){
	this.pname = name;
	this.d_from_sun = distance;
	this.no_of_sats = s_number;
	this.facts = fact;
	this.disp = display;
}

function display(){
	document.getElementById("info1").innerHTML = "Name : "+this.pname;
    document.getElementById("info2").innerHTML = "Distance From Sun : "+this.d_from_sun+" AU";
    document.getElementById("info3").innerHTML = "Number of natural satellites : " + this.no_of_sats;
    document.getElementById("info4").innerHTML = "Some intresting fact of this planet: " + this.facts;
}

function myfunc(){

	let choice = document.getElementById('sel').value;
	if(choice === "1"){
		let p = new solarSystem("Mercury", 0.4, 0, "Smallest planet.");
		p.disp();
	}

	if(choice === "2"){
		let p = new solarSystem("Venus",0.7,0,"Hottest planet.");
		p.disp();
	}

	if(choice === "3"){
		let p = new solarSystem("Earth",1,1,"The only planet which is known to have geological activity.");
		p.disp();
	}

	if(choice === "4"){
		let p = new solarSystem("Mars",1.5,2,"Red planet.");
		p.disp();
	}

	if(choice === "5"){
		let p = new solarSystem("Jupiter",5.2,79+" Known satellites","Jupiter's strong internal heat creates semi-permanent features in its atmosphere, such as cloud bands and the Great Red Spot.");
		p.disp();
	}

	if(choice === "6"){
		let p = new solarSystem("Uranus",19.2,27+" Known satellites","Uniquely among the planets, it orbits the Sun on its side; its axial tilt is over ninety degrees to the ecliptic.");
		p.disp();
	}

	if(choice === "7"){
		let p = new solarSystem("Saturn",9.5,82+" Confirmed satellites","Saturn, distinguished by its extensive ring system.");
		p.disp();
	}

	if(choice === "8"){
		let p = new solarSystem("Neptune",30.1,14+" Known satellite","Neptune is accompanied in its orbit by several minor planets, termed Neptune trojans, that are in 1:1 resonance with it.");
		p.disp();
	}
}