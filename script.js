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


    //vars
    var userinput = document.getElementById("userinput");
    var output = document.getElementById("output");
    var submitbtn = document.getElementById("submit");
	var wrongdiv = document.getElementById("wrong");
	var rightdiv = document.getElementById("correct");
	var gspaces = document.getElementById("gameSpaces");
	
	//array of guessed letters
	var rightLetters = [];
	var wrongLetters = [];
	
	//array of words
	var words = [
	 "booya",
	 "seamonkey",
	 "supercalafragalisticexpialadotious",
	 "tremendous"
	];
	
	//randomize word selection
	var answer = words[Math.floor(Math.random() * words.length)];
	
	//alert(answer);
	
	//put randomized word into a new array to replace with _ in the next step
	var spaces = new Array(answer.length);
	
	
	//put _ for each letter in the random word
	for (var i = 0; i < spaces.length; i++){
	spaces[i] = "_ ";
	gspaces.innerHTML = spaces;
	} //end of for loop
	
	alert(answer);
	
	// keep track of how many letters left to guess
	var remainingLetters = answer.length;
		
/************** functions ******************************/

    //check user input to regex
    function checkInput() {
        var userinputReg = /^([A-Za-z]{1})$/;
		if(userinputReg.test(userinput.value)) {
            return false;
        } else {
            output.innerHTML = "Must be a letter";
            return false;
        }
    }; //end checkInput
	
	//Function to check to see if letter is already in the rightLetters array
	function checkRightArray() {
		/*var isInRightArray = rightLetters.includes(userinput.value);
		alert(isInRightArray); */
		
		//alert(rightLetters.indexOf(userinput.value));
		
		
			if(wrongLetters.indexOf(userinput.value) == -1){	
				rightLetters.push(userinput.value);
				rightdiv.innerHTML = rightLetters;
			}
	}; //endcheckRightArray
		
		//Function to check to see if letter is already in the wrongLetters array
		function checkWrongArray(){
		/*var isInWrongArray = wrongLetters.includes(userinput.value);
		
		if(isInWrongArray == false){
			
			wrongLetters.push(userinput.value);
			wrongdiv.innerHTML = rightLetters;
			}*/
		 	if(wrongLetters.indexOf(userinput.value) == -1){
				wrongLetters.push(userinput.value);
				wrongdiv.innerHTML = rightLetters;
			}
		}; //endcheckWrongArray
  	
	
/*************** on click ***************************/	
    submitbtn.onclick = function() { 
		
        checkInput();
	
		//for each letter in the answer check for the user input
		
		for(var i = 0; i<answer.length; i++){
	
		if(userinput.value == answer[i]){
			//replace underscore with correct letter
			spaces[i] = answer[i];
			gspaces.innerHTML = spaces;
				
			//checkRightArray();
			/*
			rightLetters.push(userinput.value);
			rightdiv.innerHTML = rightLetters;
			alert("bam"); */
			
        }else {
			
			//checkWrongArray();
			/*
			wrongLetters.push(userinput.value);
			wrongdiv.innerHTML = wrongLetters;
			alert("boom"); */
		
        }
		} //end for loop
	
    }; //end submitbtn

}; //end onload
