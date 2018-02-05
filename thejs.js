//adds and event listener to the "change size and date button"
//there is code for changing the font size to one that is larger and //replacing the button with the current date and time.
var sizeDateButton = document.getElementById("sizeDate");
sizeDateButton.addEventListener("click", changeSizeAddDate);
function changeSizeAddDate() {
	var list = document.getElementsByTagName("p");
	for (var i = 0; i < list.length; i++) {
		list[i].style.fontSize = "150%";
	}//end for loop
	var theDate = new Date();
	document.getElementById("buttonDiv").innerHTML = "Today is " + theDate.toUTCString();
}

//added listener that checks if the user scrolls to the end of the page. If the user does, then, an alert prompt asking if they would like to see more pictures pops up
//This is all done using Jquery
//
var askOnce = 0;
$(document).ready(function(){ 
 //does something when the user enters the bottom of the page
 $(window).scroll(function() {
 	if($(window).scrollTop() == $(document).height() - $(window).height() && askOnce < 1){
 		if(confirm("Would you like to see some more pictures?")){
 			$("#bigDivToClear").remove();
 			++askOnce;
 			displayPictures();
 		}
 	}
 }); 
 Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
    Galleria.configure({
    transition: 'fade',
    imageCrop: true ,
    imagePan: true 

});
                  });

// Removes the background picture and places more pictures for the user to see
function displayPictures() {
document.body.style.backgroundImage = "none";
var title = document.getElementById('Title');
title.innerHTML = "Some pictures from Ecuador";
title.style.color = "black";
document.getElementById('galleria').style.display = 'block';
Galleria.run('.galleria');
}//end display Picture method

