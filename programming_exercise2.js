const STATE_TAX_RATE = 0.725;
const COUNTY_TAX_RATE = 0.125;


function main()
{
let Purchase, stateTax, countyTax;
	Purchase = getPurchase();
  stateTax = setStateTax(Purchase);
  countyTax = setCountyTax(Purchase);
  showSale(Purchase, stateTax, countyTax);
}

function getPurchase()
{
 let _purchase = prompt("Enter the purchase amount.");
 return _purchase;
}

function setStateTax(purchase)
{
return purchase * STATE_TAX_RATE;
}


function setCountyTax(purchase)
{
return purchase * COUNTY_TAX_RATE;
}

function showSale(purchase, stateTax, countyTax)
{
let totalTax, totalSale;
totalTax = stateTax + countyTax;
totalSale = parseFloat(purchase) + parseFloat(totalTax);
alert(`Purchase Amount: $ ${purchase}\nState Tax: ${stateTax}\nCounty Tax: ${countyTax}\nTotal Tax: ${totalTax}\nSale total: ${totalSale}`);
}

main();
