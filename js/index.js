/* Blur background when hovering over link */
function show_content() {
	var elements = document.getElementsByClassName("artist_card"); 
	var i; 
	for (i=0; i < elements.length; i++) {
		elements[i].style.bottom = '0px'; 
	} 
}

function upstage() {
	document.querySelector("#btn_row").innerHTML = '<ul><li><button class="btns" id="timebtn" onclick="uptime()">By Time</button></li></ul>'
	document.querySelector("#times_row").style.flexFlow = 'row wrap'; 
	document.querySelector("#stages_row").style.flexFlow = 'row wrap'; 

	var time_cards = document.getElementsByClassName("time_card"); 
	var k; 
	console.log(time_cards.length); 
	for (k=0; k < time_cards.length; k++) {
		time_cards[k].style.bottom = '-1000px'; 
		time_cards[k].style.visibility = 'hidden'; 
		/*time_cards[k].style.display = 'none';*/
	}

	
	var elements = document.getElementsByClassName("stage_card1"); 
	var elements2 = document.getElementsByClassName("stage_card2"); 
	var i; 
	for (i=0; i < elements.length; i++) {
		elements[i].style.left = '0px'; 
	} 
	var j; 
	for (j=0; j < elements2.length; j++) {
		elements2[j].style.right = '0px'; 
	}
}

function uptime() {
	
	document.querySelector("#btn_row").innerHTML = '<ul><li><button class="btns" id="stagebtn" onclick="upstage()">By Stage</button></li></ul>'

	document.querySelector("#times_row").style.flexFlow = 'row nowrap'; 
	document.querySelector("#stages_row").style.flexFlow = 'row nowrap';

	var elements = document.getElementsByClassName("stage_card1"); 
	var elements2 = document.getElementsByClassName("stage_card2"); 
	var i; 
	for (i=0; i < elements.length; i++) {
		elements[i].style.left = '-1000px'; 
	} 
	var j; 
	for (j=0; j < elements2.length; j++) {
		elements2[j].style.right = '-1000px'; 
	}

	var time_cards = document.getElementsByClassName("time_card"); 
	var k; 
	for (k=0; k < time_cards.length; k++) {
		time_cards[k].style.bottom = '500px'; 
		time_cards[k].style.visibility = 'visible'; 
		/*time_cards[k].style.display = 'flex';*/
	}
}





