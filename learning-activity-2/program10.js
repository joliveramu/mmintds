// A shopping mall offers discounts to its customers.
// If the amount of purchase is greater than Php
// 5000.00, a 20% discount will be given. Write a
// JavaScript program using a selection structure that
// will compute the amount of discount and the total
// amount to be paid by a customer.


let purchase = parseFloat(prompt("Enter purchase amount: "));
let discount = 1;
let totalAmount = 0;

if(purchase>=5000)
{
	discount = 0.2;
}else{
	discount = 0;
}

totalAmount = purchase - (purchase * discount);
alert(`Amount purchased: ${purchase}\nDiscount:${discount*100}%\nTotal Amount to be paid:${totalAmount}`);