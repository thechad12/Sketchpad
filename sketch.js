	
var squaresPerRow = 50;


//when the document is ready, create grid using JQuery
$(document).ready(function(){	

	createGrid(squaresPerRow,"black");
});

//clears the current drawing
$(".clear").click(function(){
	$(".square").css({
		"background-color":"#E8E8E8", 
		"opacity":"1"});

});

//creates new Grid with black marker
$(".black").click(function(){
	updateGrid("black");	
});

//creates new grid_label with random color marker
$(".colors").click(function(){
	updateGrid("colors");
});

//creates new grid with gradient marker
$(".opaque").click(function(){
	updateGrid("opaque");

});

$(".trail").click(function(){
	updateGrid("trail");

});


function createGrid(numSquares,option) {
	
	$grid = $('.grid');
	for(var i  = 0; i < numSquares * numSquares; i++)
	{		
		$grid.append("<div class='square'></div>");			
	}

	$(".grid_label").html("Draw by hovering mouse over " + squaresPerRow + " x " + squaresPerRow + " grid below:");

	
	var width = ($(".container").width())/ squaresPerRow;  
	$(".square").css({"width":width ,"height":width});	


	if (option === "trail")
	{
		$(".square").hover(function() {
			$(this).css("opacity", 0);
		}, function () {
			$(this).fadeTo('fast', 1);
		});


	}
	else {
		
		$(".square").mouseenter(function(){
		

			if (option === "colors") {
				$(this).css("background-color", getColor());
			}
			else if(option === "opaque")
			{
				//reduces opacity by 25% each mouseenter
				$(this).css("opacity", $(this).css("opacity") * 0.75);
			}
			else{
			
				$(this).css("background-color", "black");
			}
		});
	}
	
};

function updateGrid(option){

	$(".square").remove();

	
	squaresPerRow = parseInt(prompt("Enter number of squares (1-64): ",50),10);
	if (squaresPerRow > 0 && squaresPerRow <= 64)
	{

		createGrid(squaresPerRow, option);	
	}
	else
	{
		alert("Sorry that was not a valid input.");
	}	

}


function getColor() {
	var red = Math.floor((Math.random()*255)+1);
	var green = Math.floor((Math.random()*255)+1);
	var blue = Math.floor((Math.random()*255)+1);
	return "rgb(" + red + "," + green + "," + blue + ")";

	}





