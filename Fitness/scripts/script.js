/*
Student Name: Brian Sheehan
File NameL script.js
Date: 12/11/2023
*/

//Global Variables
var video=document.getElementById("example");
var videoSource=document.getElementById("vid-src");
var descriptionSource=document.getElementById("despsrc");


//Hamburger Menu Function
function hamburger() {
	var menu=document.getElementById("menu-links");
	var logo=document.getElementByID("fcc-logo");
	if (menu.style.display==="block" && logo.style.display==="none") {
		menu.style.display="none";
		logo.style.display="block";
	} else {
		menu.style.display="block";
		logo.style.display="none";
	}
	
	//Function to display the burpees example video
	function burpees() {
		videoSource.src="media/exercise.mp4";
		descriptionSource.src="media/captions.vtt";
		video.style.display="block";
		video.load();
	}
	
	//function to display a promo code
	function discount() {
		var promo=document.getElementById("special");
		promo.firstChile.nodeValue="Promo Code: D25START";
		promo.style.color="#ff0000";
		promo.style.fontSize="2em";
	}
}