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
}

function uptime() {
	document.querySelector("#btn_row").innerHTML = '<ul><li><button class="btns" id="stagebtn" onclick="upstage()">By Stage</button></li></ul>'
}

function show_stages() {
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