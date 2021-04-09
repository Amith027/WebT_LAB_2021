let name = document.getElementById("customname");

let randomise = document.querySelector(".randomise");
let story = document.querySelector(".story");

function randomValuePicker(array){
	return array[Math.floor( Math.random() * array.length ) ];
}

let storyText = 
"It was more of a :insertx: day, and a :inserty: called Bhageera was feeling very hungry. He came out of his den and searched here and there.He could find only a little :insertz: . He caught its prey and eat it happily and fulfilled his hunger.";

let insertx = [ 'SUNNY', 'WINDY', 'RAINY'] ;
let inserty = [ 'TIGER', 'LION', 'LEOPARD'] ;
let insertz = [ 'HARE', 'DEER', 'ZEBRA'] ;

randomise.addEventListener( 'click', result );

function result() {

	let newStory = storyText;
	let xItem = randomValuePicker(insertx);
	let yItem = randomValuePicker(inserty);
	let zItem = randomValuePicker(insertz);

	 newStory = newStory.replace(':insertx:', xItem);
	 newStory = newStory.replace(':inserty:', yItem);
	 newStory = newStory.replace(':insertz:', zItem);

	if(name.value != '') {
		let newName = name.value;
		newStory = newStory.replace('Bhageera', newName);
	}

	story.textContent = newStory;
	story.style.visibility = 'visible';
}