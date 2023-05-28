
function main()
{
	let Purchase, stateTax, countyTax;
	let loan = getLoan();
	let insurance = getInsure();
	let gas = getGas();
	let oil = getOil();
	let tires = getTires();
	let maintenance = getMaintenance();
	alert(showExpenses(loan, insurance, gas, oil, tires, maintenance));
}

function getLoan()
{
	return parseFloat(prompt("Enter the monthly loan amount"));
}

function getInsure()
{
	return parseFloat(prompt("Enter the monthly insurance amount"));
}

function getGas()
{
	return parseFloat(prompt("Enter the monthly gas amount"));
}

function getOil()
{
	return parseFloat(prompt("Enter the monthly oil amount"));
}

function getTires()
{
	return parseFloat(prompt("Enter the monthly tires amount"));
}

function getMaintenance()
{
	return parseFloat(prompt("Enter monthly maintenance amount"));
}

function showExpenses(loan, insure, gas, oil, tires, maintenance)
{
	let totalMonth, totalYear;
	totalMonth = (loan + insure + gas + oil + tires + maintenance)
	totalYear = (totalMonth * 12);
	return `Total Monthly Expense: $${totalMonth}\nTotal Yearly Expense: $${totalYear}`;
}

main();
