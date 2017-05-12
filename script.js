//alert("hi");

var userinput = document.getElementById("userinput");
var output = document.getElementById("output");
var submitbtn = document.getElementById("submit");

submitbtn.onclick = function() {
	var output.innerHTML = userinput;
	return false;
}