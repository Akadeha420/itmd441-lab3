const button = document.querySelector("button");
const tip_bar = document.getElementById("tip");
const bill = document.getElementById("bill");
const tip_percentage = document.getElementById("percentage");
const tip_amount = document.getElementById("amount");
const total_bill = document.getElementById("total")


bill.addEventListener("input", () => {
  if (isNaN(bill.value) == true) {
    alert("Please enter a number for Bill Total")
    bill.value = ""
  }
  else {
    total_bill.value = bill.value
    tip_amount.value = ((bill.value * (tip_bar.value / 100))).toFixed(2)
    total_bill.value = (parseInt(bill.value) + (bill.value * (tip_bar.value / 100))).toFixed(2)
    e.preventDefault();
  }
})

tip_bar.addEventListener('input', () => {
  tip_percentage.value = tip_bar.value
  tip_amount.value = ((bill.value * (tip_bar.value / 100))).toFixed(2)
  total_bill.value = (parseInt(bill.value) + (bill.value * (tip_bar.value / 100))).toFixed(2)
  e.preventDefault();
});
