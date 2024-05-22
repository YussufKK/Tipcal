console.log("test phrase");

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

document.getElementById("calculateTip").addEventListener("click", function(event) {
  event.preventDefault();
  let bill = parseFloat(document.getElementById("billAmount").value);
  let tip = calcTip(bill);
  let total = bill + tip;
  console.log(`The bill was $${bill}, the tip was $${tip.toFixed(2)}, and the total value $${total.toFixed(2)}`);
  document.getElementById("tipAmount").textContent = `Tip amount: $${tip.toFixed(2)}`;
  document.getElementById("totalAmount").textContent = `Total amount: $${total.toFixed(2)}`;
});

const bills = [275, 40, 430];
const tips = bills.map(calcTip);
const totals = bills.map((bill, index) => bill + tips[index]);

console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);