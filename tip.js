console.log("test phrase")


function setBill() {
  let bill = document.getElementById("billAmount").value;
  let tip = document.getElementById("tipPercent").value;
  let amount = 0;
  amount = bill * (tip / 100);
  console.log(amount);
  clean = "Tip amount : $ " + (Math.round(amount*100)/100).toFixed(2);
  let answer = document.getElementById("tipAmount");
  answer.textContent = clean;
}
document.getElementById("billSet").addEventListener("click", function (event) {
  event.preventDefault();
});