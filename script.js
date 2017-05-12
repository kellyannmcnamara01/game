window.onload = function() {
    //alert("hi");

    //vars
    var userinput = document.getElementById("userinput");
    var output = document.getElementById("output");
    var submitbtn = document.getElementById("submit");
    var userinputVal = /^([A-Za-z]{1})$/;
	var answer = "G";

    //check user input to regex
    function checkInput() {
        var userinputReg = /^([A-Za-z]{1})$/;
        if(userinputReg.test(userinput.value)) {
            output.innerHTML = userinput.value;
            return false;
        } else {
            output.innerHTML = "boo";
            return false;
        }
    } //end checkInput

    //call checkinput on submitbtn click
    submitbtn.onclick = function() {
        checkInput
        if(userinput.value == answer){
            console.log('yay');
        } else {
            console.log('boo');
        }
    };

}; //end onload
