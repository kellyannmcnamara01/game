window.onload = function() {
   
    //get elements 
    var userinput = document.getElementById("userinput");
    var output = document.getElementById("output");
    var submitbtn = document.getElementById("submit");
	var rightdiv = document.getElementById("correct");
	var gspaces = document.getElementById("gameSpaces");
	var guess = document.getElementById("guesses");
	var remaining = document.getElementById("remaining");
	var lives = document.getElementById("lives");
	var canvas = document.getElementById('hangman');

	//arrays
	var words = [
	 "javascript",
	 "college",
	 "humber",
	 "awesome",
	 "jquery",
	 "website",
	 "design",
	 "accessibility",
	 "usability"
	];
	
	function drawLine(context, from, to) {
    context.beginPath();
    context.moveTo(from[0], from[1]);
    context.lineTo(to[0], to[1]);
    context.stroke();
};
	
// Draw the canvas
	var c = canvas.getContext('2d');
	// reset the canvas and set basic styles
	canvas.width = canvas.width;
	c.lineWidth = 10;
	c.strokeStyle = 'green';
	c.font = 'bold 24px Arial, Helvetica, sans-serif';
	c.fillStyle = 'red';
	c.strokeStyle = '#A52A2A';
		drawLine(c, [30,185], [30,10]);
			// create the arm of the gallows
			c.lineTo(150,10);
			c.stroke();
	// draw the ground
	drawLine(c, [20,190], [180,190]);
		
//max lives
	var maxLives = 6;
		
//array of guessed letters
	var guessedLetters = [];
	
	//array of correct letters	
	var correctLetters = [];
	
	//word letters
	var wordLetters = [];
	
	//array of wrong letter
	var wrongLetters = [];
	
	//var number of guessed
	var guessNum = 0;
	guess.innerHTML = guessNum;
	
	
	//randomize word selection
	var answer = words[Math.floor(Math.random() * words.length)];

	
	//put randomized word into a new array to replace with _ in the next step
	var spaces = new Array(answer.length);
	
	// keep track of how many letters left to guess and display them
	var remainingLetters = answer.length - wordLetters.length;
	remaining.innerHTML = remainingLetters;
	
	//display lives
	var livesNum = maxLives - wrongLetters.length;
	lives.innerHTML = livesNum;
	
	
	//put _ for each letter in the random word
	for (var i = 0; i < spaces.length; i++){
	spaces[i] = "_ ";
	gspaces.innerHTML = spaces;
	} //end of for loop
	
		
/************** functions ******************************/

    //check user input to regex
    function checkInput() {
        var userinputReg = /^[a-zA-Z]*$/;
		if(userinput.value.match(userinputReg)) {
            return false;
        } else {
            output.innerHTML = "Must be a letter";
            return false;
        }
    }; //end checkInput
	
	//Function to check to see if letter is already in the guessedLetters array
	function checkGuessedArray() {
		//var isInRightArray = guessedLetters.includes(userinput.value);
		//alert(isInRightArray);
		
			if(guessedLetters.includes(userinput.value) === false){
				guessedLetters.push(userinput.value);
				rightdiv.innerHTML = guessedLetters;
			}
			
		
			
	}; //endcheckRightArray
	
	
/*************** on click ***************************/	
    submitbtn.onclick = function() { 
		
        checkInput();
		
		//for each letter in the answer check for the user input
		for(var i = 0; i<answer.length; i++){
	
			if(userinput.value === answer[i]){
				spaces[i] = answer[i];
				gspaces.innerHTML = spaces;
				
				wordLetters.push(answer[i]);
			
				if (correctLetters.includes(userinput.value) === false){
				
					correctLetters.push(answer[i]);
				}
				
				checkGuessedArray();
			}
			else {
			
				checkGuessedArray();
			}
				
		} //end for loop
		
		//track num of guesses
		guessNum += 1;
		guess.innerHTML = guessNum;
		
		// keep track of how many letters left to guess
		var remainingLetters = answer.length - wordLetters.length;
		remaining.innerHTML = remainingLetters;
		
		//calculate lives
		
		if(wrongLetters.includes(userinput.value) === false){
			   
			   if(correctLetters.includes(userinput.value) === false){
				
					wrongLetters.push(userinput.value);
				   
				}
			}
		
		//Function to check to if wrong letter is already in the wrongLetters array
	function drawHangman() {
		
		if(livesNum === 6){
	
		}
		
		else if(livesNum === 5){
			c.strokeStyle = 'black';
			c.lineWidth = 3;
			// draw rope
			drawLine(c, [145,15], [145,30]);
			// draw head
			c.beginPath();
			c.moveTo(160, 45);
			c.arc(145, 45, 15, 0, (Math.PI/180)*360);
			c.stroke();
		}
		
		else if(livesNum === 4){
			// draw body
			c.strokeStyle = 'black';
			c.lineWidth = 3;
			// draw rope
			drawLine(c, [145,15], [145,30]);
			// draw head
			c.beginPath();
			c.moveTo(160, 45);
			c.arc(145, 45, 15, 0, (Math.PI/180)*360);
			c.stroke(); 
			drawLine(c, [145,60], [145,130]);
		
		} else if (livesNum === 3){
			// draw left arm
			c.strokeStyle = 'black';
			c.lineWidth = 3;
			// draw rope
			drawLine(c, [145,15], [145,30]);
			// draw head
			c.beginPath();
			c.moveTo(160, 45);
			c.arc(145, 45, 15, 0, (Math.PI/180)*360);
			c.stroke(); 
			drawLine(c, [145,80], [110,90]);
		}
		else if(livesNum === 2){
			// draw right arm
			c.strokeStyle = 'black';
			c.lineWidth = 3;
			// draw rope
			drawLine(c, [145,15], [145,30]);
			// draw head
			c.beginPath();
			c.moveTo(160, 45);
			c.arc(145, 45, 15, 0, (Math.PI/180)*360);
			c.stroke(); 
			drawLine(c, [145,80], [180,90]);
		}
		else if(livesNum === 1){
			// draw left leg
			c.strokeStyle = 'black';
			c.lineWidth = 3;
			// draw rope
			drawLine(c, [145,15], [145,30]);
			// draw head
			c.beginPath();
			c.moveTo(160, 45);
			c.arc(145, 45, 15, 0, (Math.PI/180)*360);
			c.stroke(); 
			drawLine(c, [145,130], [130,170]);
		}
		
		else{
			// draw right leg and end game
			c.strokeStyle = 'black';
			c.lineWidth = 3;
			// draw rope
			drawLine(c, [145,15], [145,30]);
			// draw head
			c.beginPath();
			c.moveTo(160, 45);
			c.arc(145, 45, 15, 0, (Math.PI/180)*360);
			c.stroke(); 
			drawLine(c, [145,130], [160,170]);		
		}
	}; //enddrawhangman

		var livesNum = maxLives - wrongLetters.length;
		lives.innerHTML = livesNum;
		
		drawHangman();
		
		if(wordLetters.length === answer.length){
			alert("You Win");
		}
		
		if(livesNum === 0){
			alert("Game Over");
			gspaces.innerHTML = answer;
		}
    }; //end submitbtn

}; //end onload