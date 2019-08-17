function checkDriverAge(arg1) {
	var curYear = 2018;
	/*var year = prompt("Enter your year of birth:");
	var age = curYear - Number(year);*/
	var age = curYear - Number(arg1);

	if (age < 18 && age > 0 ) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (age > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (age === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	} else {
		alert("Well, can't really know your age! Sorry!");
	}
}

// checkDriverAge();
// checkDriverAge(1992);

var checkDriverAge2 = function() {
	var curYear = 2018;
	var year = prompt("Enter your year of birth:");
	var age = curYear - Number(year);
	// var age = curYear - Number(arg1);

	if (age < 18 && age > 0 ) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (age > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (age === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	} else {
		alert("Well, can't really know your age! Sorry!");
	}
}

checkDriverAge2();