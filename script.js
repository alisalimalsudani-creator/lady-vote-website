// script.js

// Shopping Cart Functionality
const cart = [];

function addToCart(item) {
    cart.push(item);
    console.log(`${item} added to cart.`);
}

function viewCart() {
    console.log('Items in cart:', cart);
}

// Form Handling
const form = document.getElementById('orderForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const formData = new FormData(form);
    const item = formData.get('item');
    addToCart(item);
});

// Event Listeners
const cartButton = document.getElementById('viewCartButton');
cartButton.addEventListener('click', viewCart);