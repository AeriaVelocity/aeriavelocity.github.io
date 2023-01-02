window.onload = function() {
    birthDate = new Date("2001-09-28");
	difference = Date.now() - birthDate.getTime();
	ageDate = new Date(difference); 
	calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    document.getElementById("age").innerText = calculatedAge;
};