// Redirect to logo page
function goToLogoPage() {
    window.location.href = "logo-page.html"; // Change this to your logo page
}

// Redirect to user profile page
function goToProfilePage() {
    window.location.href = "user-profile-page.html"; // Change this to your profile page
}

// Update quantity and total price logic
let total = 0.00;

function increaseQty(itemId) {
    const qtyElement = document.querySelector(`.cart-item:nth-child(${itemId}) .qty`);
    const qty = parseInt(qtyElement.textContent);
    qtyElement.textContent = qty + 1;

    updateTotal(135.00); // Assuming 135.00 is the item price
}

function decreaseQty(itemId) {
    const qtyElement = document.querySelector(`.cart-item:nth-child(${itemId}) .qty`);
    const qty = parseInt(qtyElement.textContent);
    if (qty > 0) {
        qtyElement.textContent = qty - 1;
        updateTotal(-135.00);
    }
}

function removeItem(itemId) {
    const itemElement = document.querySelector(`.cart-item:nth-child(${itemId})`);
    const qtyElement = document.querySelector(`.cart-item:nth-child(${itemId}) .qty`);
    const qty = parseInt(qtyElement.textContent);
    itemElement.remove();

    updateTotal(-135.00 * qty); // Remove item price
}

function updateTotal(priceChange) {
    total += priceChange;
    document.getElementById('total-price').textContent = total.toFixed(2);
}

function placeOrder() {
    // Save the order here (you can implement a backend or local storage)
    alert("Order placed! Total amount: " + total.toFixed(2));
}