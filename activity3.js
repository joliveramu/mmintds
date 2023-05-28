const REPLACE_PERCENT = 0.08;

function main()
{
	let replace, minInsure;
	replace = getReplace();
	minInsure = setInsure(replace);
	showSale(replace, minInsure);
}

function getReplace()
{
	let _replace = prompt("Enter replacement amount.");
	return _replace;
}

function setInsure(replace)
{
	return replace * REPLACE_PERCENT;
}

function showSale(replace, minInsure)
{
	alert(`Replacement cost: $ ${replace}\npercent insured: ${REPLACE_PERCENT}\nMinimum insurance: ${minInsure}`);
}


main();
