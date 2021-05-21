function convertFahrenheitToCelsius(temperature) {
	// Take whatever temperature the function is handed, do some math and return it.
	return (temperature - 32) * (5/9)
}

// Prompt the user and store whatever they say in a variable.
var theirInput = prompt("Enter in a Fahrenheit temperature & I'll convert it to Celsius");

// Run their number through the function and store it in a variable named result.
var result = convertFahrenheitToCelsius(theirInput);

// Alert the user to the result.
alert(result);
