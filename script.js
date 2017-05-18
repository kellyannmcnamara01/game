window.onload = function() {
    //1. check user input
    //2. create an onclick submit function
    //3. check user input to the answer
    //4. if user input is correct display entered number if user input is wrong display wrong letters in a different div
    //5. add correct user letters to correct letters array and display array
    //6. add wrong user letters to wrong letters array and display
	//7. Grab individual letters from words
	//8. Randomize possible words
	//9. Check guess within the answer
	//10. Replace _ with correct letter


    //get elements 
    var userinput = document.getElementById("userinput");
    var output = document.getElementById("output");
    var submitbtn = document.getElementById("submit");
	var rightdiv = document.getElementById("correct");
	var gspaces = document.getElementById("gameSpaces");
	var guess = document.getElementById("guesses");
	var remaining = document.getElementById("remaining");
	var lives = document.getElementById("lives");
	
	//arrays
	var words = [
	 "booya",
	 "seamonkey",
	 "supercalafragalisticexpialadotious",
	 "tremendous",
	 "hoooray",
	 "whambamthankyou",
	 "thisisreal"
	];
		
	//array of guessed letters
	var guessedLetters = [];
	
	//array of correct letters	
	var correctLetters = [];
	
	//var number of guessed
	var guessNum = 0;
	guess.innerHTML = guessNum;
	
	
	//randomize word selection
	var answer = words[Math.floor(Math.random() * words.length)];

	
	//put randomized word into a new array to replace with _ in the next step
	var spaces = new Array(answer.length);
	
	// keep track of how many letters left to guess and display them
	var remainingLetters = answer.length - correctLetters.length;
	remaining.innerHTML = remainingLetters;
	
	//display lives
	//var livesNum = remainingLetters.length - correctLetters;
	
	
	//put _ for each letter in the random word
	for (var i = 0; i < spaces.length; i++){
	spaces[i] = "_ ";
	gspaces.innerHTML = spaces;
	} //end of for loop
	
	alert(answer);
	
	//correct guesses
	
		
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
			
			//replace underscore with correct letter
			spaces[i] = answer[i];
			gspaces.innerHTML = spaces;
									
			checkGuessedArray();
				
			//add letter to correct letters array
			correctLetters.push(answer[i]);
			
			}else {
			
				checkGuessedArray();
			}
				
		} //end for loop
		
		//track num of guesses
		guessNum += 1;
		guess.innerHTML = guessNum;
		
		// keep track of how many letters left to guess
		var remainingLetters = answer.length - correctLetters.length;
		remaining.innerHTML = remainingLetters;
	
				
	
    }; //end submitbtn

}; //end onload
