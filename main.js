const KILOMETERS_TO_MILES = 0.6214;

function main()
{
	let distanceKilometers;
	distanceKilometers = getKilometers();
	showMiles(distanceKilometers);
}

function getKilometers()
{
	let _kilometers = prompt("Enter the distance in kilometers.")
	return _kilometers;
}

function showMiles(kilometers)
{
	let miles = 0;
	miles = kilometers * KILOMETERS_TO_MILES;
	alert(`The conversion of ${kilometers} to miles is ${miles}`);
}

main();
