var code = ["","AVLaunching", "FirstMonthAV"];
// var a = -1;
// var input = else if (a!=-1) {
				// code.splice(a, 1);

function validate(){
			var tempName = document.getElementById("form-name").value;
			var tempPhone = document.getElementById("form-phone").value;
			var tempError = document.getElementById("error");
			var	tempAddress = document.getElementById("form-address").value;
			var tempQuantity = document.getElementById("form-quantity").value;
			var tempCode = document.getElementById("form-promo").value;

			// a = code.indexOf(tempCode);

			if (tempName == "") {
				tempError.innerHTML = "Name must be filled.";
			} else if (tempPhone == ""){
				tempError.innerHTML = "Phone number must be filled.";
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
