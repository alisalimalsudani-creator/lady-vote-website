// script.js

// Shopping Cart functionality
let cart = [];

function addToCart(product) {
    cart.push(product);
    console.log(`${product.name} has been added to your cart.`);
}

function removeFromCart(productId) {
    cart = cart.filter(product => product.id !== productId);
    console.log(`Product with ID ${productId} has been removed from your cart.`);
}

function checkout() {
    if (cart.length === 0) {
        console.log('Your cart is empty.');
        return;
    }
    console.log('Proceeding to checkout with the following items: ', cart);
    cart = []; // Clear the cart after checkout
}

// Newsletter Subscription
function subscribeNewsletter(email) {
    console.log(`Subscribed ${email} to the newsletter.`);
}

// Contact Form Submission
function submitContactForm(formData) {
    console.log('Contact form submitted with data:', formData);
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal Management
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Exported functions for external use
export { addToCart, removeFromCart, checkout, subscribeNewsletter, submitContactForm, openModal, closeModal };