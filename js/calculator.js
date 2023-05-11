function calculateCost() {
  const distance = document.getElementById("distance").value;
  const consumption = document.getElementById("consumption").value;
  const price = document.getElementById("price").value;
  const exchangeRate = 82.1; // conversion rate from dollars to rupees

  const costInDollars = ((distance / 100) * consumption * price).toFixed(2);
  const costInRupees = (costInDollars * exchangeRate).toFixed(2);

  document.getElementById("result").innerHTML = `Total cost: ₹${costInRupees}`;
}

  