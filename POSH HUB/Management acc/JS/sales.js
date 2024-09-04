const items = [
    { name: 'Coffee', price: 100.00 },
    { name: 'Non-Coffee', price: 100.00 },
    { name: 'Refreshers', price: 100.00 },
    { name: 'Tea', price: 100.00 },
    { name: 'Pastries', price: 100.00 },
    { name: 'Pasta', price: 100.00 },
    { name: 'Rice Meal', price: 100.00 },
    { name: 'Burger', price: 100.00 },
    { name: 'Appetizer', price: 100.00 },
  ];
  
  const itemButtons = document.querySelectorAll('button[data-item]');
const quantityDisplays = document.querySelectorAll('.quantity');
const coffeeCountDisplay = document.getElementById('coffee-count');
const mealsCountDisplay = document.getElementById('meals-count');
const totalSalesDisplay = document.getElementById('total-sales');

let itemCounts = {};
let totalSales = 0;

itemButtons.forEach((button, index) => {
  const itemName = button.dataset.item;
  const quantityDisplay = quantityDisplays[index];

  button.addEventListener('click', () => {
    itemCounts[itemName] = (itemCounts[itemName] || 0) + 1;
    quantityDisplay.textContent = itemCounts[itemName];
    updateCountsAndTotal();
  });
});

function updateCountsAndTotal() {
  const coffeeCount = itemCounts.Coffee || 0;
  const nonCoffeeCount = itemCounts['Non-Coffee'] || 0;
  const refreshersCount = itemCounts.Refreshers || 0;
  const teaCount = itemCounts.Tea || 0;
  const pastriesCount = itemCounts.Pastries || 0;
  const pastaCount = itemCounts.Pasta || 0;
  const riceMealCount = itemCounts['Rice Meal'] || 0;
  const burgerCount = itemCounts.Burger || 0;
  const appetizerCount = itemCounts.Appetizer || 0;

  coffeeCountDisplay.textContent = coffeeCount + nonCoffeeCount + refreshersCount + teaCount;
  mealsCountDisplay.textContent = pastriesCount + pastaCount + riceMealCount + burgerCount + appetizerCount;

  totalSales = 0;
  for (const item of items) {
    const count = itemCounts[item.name] || 0;
    totalSales += count * item.price;
  }
  totalSalesDisplay.textContent = `Php ${totalSales.toFixed(2)}`;
}