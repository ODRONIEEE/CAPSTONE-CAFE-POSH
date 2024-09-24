document.querySelectorAll('.order-number').forEach(order => {
    order.addEventListener('click', function() {
        const orderId = this.textContent;
        document.getElementById('order-number').textContent = orderId;
        // Custom content for each order can be set here
        if (orderId === '#0001') {
            document.getElementById('item-1').textContent = 'C.M – 1';
            document.getElementById('item-2').textContent = 'Tea – 1';
            document.getElementById('item-3').textContent = 'Burger – 2';
        } else if (orderId === '#0002') {
            document.getElementById('item-1').textContent = 'C.M – 2';
            document.getElementById('item-2').textContent = 'Tea – 2';
            document.getElementById('item-3').textContent = 'Burger – 3';
        }
        // Add cases for other order numbers as needed
    });
});

document.querySelector('.edit-btn').addEventListener('click', function() {
    // Implement the edit functionality
    const item1 = prompt("Enter new quantity for C.M:");
    const item2 = prompt("Enter new quantity for Tea:");
    const item3 = prompt("Enter new quantity for Burger:");
    
    document.getElementById('item-1').textContent = `C.M – ${item1 || 0}`;
    document.getElementById('item-2').textContent = `Tea – ${item2 || 0}`;
    document.getElementById('item-3').textContent = `Burger – ${item3 || 0}`;
});

document.querySelector('.void-btn').addEventListener('click', function() {
    if (confirm('Are you sure you want to void this order?')) {
        // Handle the void action
        const orderId = document.getElementById('order-number').textContent;
        document.querySelectorAll('.order-number').forEach(order => {
            if (order.textContent === orderId) {
                order.remove();
            }
        });
    }
});

document.querySelector('.complete-btn').addEventListener('click', function() {
    alert('ORDER COMPLETE');
    // Handle order completion
});
