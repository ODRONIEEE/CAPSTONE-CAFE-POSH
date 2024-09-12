let totalSales = 0;
let totalQuantity = 0;
const prices = {
    'Coffee': 100,
    'Non-Coffee': 100,
    'Refreshers': 100,
    'Tea': 100,
    'Pastries': 100,
    'Pasta': 100,
    'Rice Meal': 100,
    'Burger': 100,
    'Appetizer': 100,
};

const itemCounts = {
    'Coffee': 0,
    'Non-Coffee': 0,
    'Refreshers': 0,
    'Tea': 0,
    'Pastries': 0,
    'Pasta': 0,
    'Rice Meal': 0,
    'Burger': 0,
    'Appetizer': 0,

};

function addItem(item) {
    itemCounts[item]++;
    document.getElementById(item.toLowerCase().replace(' ', '-') + '-count').innerText = itemCounts[item];

    // Update total sales and quantity
    totalQuantity++;
    totalSales += prices[item];
    document.getElementById('total-sales').innerText = 'Php ' + totalSales.toFixed(2);
    document.getElementById('total-quantity').innerText = totalQuantity;
    document.getElementById('total').innerText = totalQuantity;
}
