document.getElementById("checkBtn").addEventListener("click", function () {
  let budget = Number(prompt("Enter your budget amount:"));
  let itemPrice = Number(prompt("Enter the item price:"));
  let savingsInput = prompt("Enter your savings amount (optional):");
  let savings = savingsInput ? Number(savingsInput) : 0;
  let totalMoney = budget + savings;
  if (totalMoney >= itemPrice) {
    alert("✅ You can afford this item!");
    console.log("Decision: Can afford");
  } else {
    alert("❌ You cannot afford this item.");
    console.log("Decision: Cannot afford");
  }
});
