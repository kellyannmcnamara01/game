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
	var letter = "G";
	
	//array of word arrays
	var words = [
		["b", "o", "o", "y", "a"],
		["b", "a", "m"],
		["c", "a", "n", "d", "y"],
		["s", "u", "p", "e", "r", "c", "a", "l"],
		["t", "h", "i", "s"]
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
	}
	
    //check user input to regex
    function checkInput() {
        var userinputReg = /^([A-Za-z]{1})$/;
		if(userinputReg.test(userinput.value)) {
            //output.innerHTML = userinput.value;
            return false;
        } else {
            output.innerHTML = "Must be a letter";
            return false;
        }
    }; //end checkInput
	
    //call checkinput on submitbtn click
    submitbtn.onclick = function() { 
		
		//note: this works for 1st letter
		//var letter = word.substring(0,1);
		
        checkInput();
		
		if(userinput.value == letter){
			rightLetters.push(userinput.value);
			rightdiv.innerHTML = rightLetters;
			console.log(rightLetters);
			
        } else {
			wrongLetters.push(userinput.value);
			wrongdiv.innerHTML = wrongLetters;
			console.log(wrongLetters);
        }
    }; //end submitbtn

}; //end onload
