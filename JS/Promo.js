/*List of Promo Code*/
var code = ["", "ANNIV2019", "AVLXMAS", "BINUSGRADE", "GAMBIR50"];

function validate(){
		var tempName = document.getElementById("form-name").value;
		var tempPhone = document.getElementById("form-phone").value;
		var tempError = document.getElementById("error");
		var	tempAddress = document.getElementById("form-address").value;
		var tempQuantity = document.getElementById("form-quantity").value;
		var tempCode = document.getElementById("form-promo").value;

		/*Input Validation*/
		if (tempName == "") {
			tempError.innerHTML = "Name must be filled.";
		} else if (tempPhone == ""){
			tempError.innerHTML = "Phone number must be filled.";
		} else if(isNaN(tempPhone)){
			tempError.innerHTML = "Your phone number needs to be numeric.";
		} else if (tempAddress.length < 8) {
			tempError.innerHTML = "Address is too short.";
		} else if (tempQuantity < 1){
			tempError.innerHTML = "Please enter a valid amount.";
		} else if (!code.includes(tempCode)){
			tempError.innerHTML = "Please enter a valid promo code.";
		} else{
			tempError.innerHTML = "";
			alert("Registered");
			window.location.reload();
		}
	}	



















/*function generateCode(){
	var x = Math.floor(Math.random()*10)+"A"+Math.floor(Math.random()*10);
	code.push(x);
	console.log(code);
}

function removeCode(){
	code.pop();
	console.log(code);
}*/
