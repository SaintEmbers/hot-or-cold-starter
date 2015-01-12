$(document).ready(function(){
		//new game generator
	function newGame(){
		location.reload();
		}
	$('.new').on('click',newGame);
		
		//random number generator
	var randomNum = Math.floor((Math.random()*100)+1);
		
	/*The game:
	First guess is logged absolute, every guess after that 
	is logged as relative to the last guess with
	'warmer' or 'colder'..*/	
	$('#guessButton').click(function(){
		event.preventDefault();
		
		//variables
		var guess = $("#userGuess").val();
		var number = parseInt(guess);
		var addGuess = +$('#count').text();
		var addOne = addGuess +=1;
		var total = +$('#count').text();
		var guesses = ('<li>'+guess+'</li>');
		var lastGuess= $('#guessList li:last').text();
		
		//reset input box after each guess
		$("#userGuess").val("");
		
		
		//conditions which are NOT ELLIGBLE answers
		if(number > 100){
			$('#feedback').text('You must feed me a number between 0 and 100');
		}
		else if(isNaN(number)){
			$('#feedback').text('Feed me NUMBERS');
		}
		
		//REALATIVE conditions 'colder' or 'warmer' plus 'win'
		else if(addGuess != 1){
			//add number to a list and keep track of guess count
			$('#guessList').append(guesses);
			$('#count').text(addOne);
			
			if(Math.abs(number-randomNum) > Math.abs(lastGuess-randomNum)){
				$('#feedback').text("Colder");
			}
			else if(number - randomNum===0) {
				$('#feedback').text("Got it! Took you long enough...");
			}
			else{
				$('#feedback').text("Warmer");
			}
			
		}		
		//ABSOLUTE conditions for the first guess
		else{
			
			$('#guessList').append(guesses);
			$('#count').text(addOne);
			
			if(number - randomNum >= 50 || number - randomNum <= (-50)){
				$('#feedback').text("Ice Cold");
			}
			else if(number - randomNum >= 30 || number - randomNum <= (-30)){
				$('#feedback').text("Cold");
			}
			else if(number - randomNum >= 10 || number - randomNum <= (-10)){
				$('#feedback').text("Warm");
			}
			else if(number - randomNum >= 1 || number - randomNum <= (-1)){
				$('#feedback').text("HOT!");
			}
			else if(number - randomNum ===0){
				$('#feedback').text("Got it! You GOOD...");
			}
			
		}
		
		
		
	});


	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


