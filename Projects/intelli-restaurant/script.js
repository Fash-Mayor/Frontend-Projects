// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    // Special Instructions Toggle
    const specialInstructionsCheck = document.getElementById('special-instructions');
    if (specialInstructionsCheck) {
        specialInstructionsCheck.addEventListener('change', function() {
            const instructionsField = document.getElementById('instructions-field');
            if (this.checked) {
                instructionsField.style.display = 'block';
            } else {
                instructionsField.style.display = 'none';
            }
        });
    }

    // Initialize cart display on cart page
    if (window.location.pathname.includes('cart.html')) {
        displayCart();
    }

    // Initialize checkout display
    if (window.location.pathname.includes('checkout.html')) {
        displayCheckoutItems();
        updateCheckoutTotal();
    }

    // Checkout Form Handler
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate all fields
            const fullName = document.getElementById('full-name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            const cardNumber = document.getElementById('card-number').value;
            const terms = document.getElementById('terms').checked;
            
            if (fullName && email && phone && address && cardNumber && terms && cart.length > 0) {
                // Show confirmation modal
                const modal = document.getElementById('confirmation-modal');
                const orderId = '#DLX-' + Math.floor(100000 + Math.random() * 900000);
                document.getElementById('order-id').textContent = orderId;
                modal.style.display = 'flex';
                
                // Clear cart
                cart = [];
                localStorage.setItem('cart', JSON.stringify(cart));
            } else {
                alert('Please fill in all required fields and accept terms.');
            }
        });
    }
});

// Add to Cart Function
function addToCart(itemName, price) {
    const existingItem = cart.find(item => item.name === itemName);
    
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({
            name: itemName,
            price: price,
            qty: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${itemName} added to cart!`);
}

// Display Cart Items
function displayCart() {
    const container = document.getElementById('cart-items-container');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <p>🛒 Your cart is empty</p>
                <a href="menu.html" class="btn btn-secondary">Continue Shopping</a>
            </div>
        `;
        return;
    }
    
    let html = '';
    cart.forEach((item, index) => {
        const itemTotal = (item.price * item.qty).toFixed(2);
        html += `
            <div class="cart-item">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                </div>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="updateQty(${index}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="updateQty(${index}, 1)">+</button>
                </div>
                <div><strong>$${itemTotal}</strong></div>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });
    
    container.innerHTML = html;
    updateTotal();
}

// Update Quantity
function updateQty(index, change) {
    if (cart[index]) {
        cart[index].qty += change;
        if (cart[index].qty <= 0) {
            cart.splice(index, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }
}

// Remove from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Update Cart Total
function updateTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const deliveryFee = document.getElementById('delivery-check') && document.getElementById('delivery-check').checked ? 5 : 0;
    const tax = (subtotal + deliveryFee) * 0.1;
    const total = subtotal + deliveryFee + tax;
    
    document.getElementById('subtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('tax').textContent = '$' + tax.toFixed(2);
    document.getElementById('total').textContent = '$' + total.toFixed(2);
}

// Display Checkout Items
function displayCheckoutItems() {
    const container = document.getElementById('checkout-items');
    
    if (cart.length === 0) {
        container.innerHTML = '<p style="color: #999;">No items in your order.</p>';
        return;
    }
    
    let html = '';
    cart.forEach(item => {
        const itemTotal = (item.price * item.qty).toFixed(2);
        html += `
            <div class="checkout-item">
                <span>${item.qty}x ${item.name}</span>
                <span>$${itemTotal}</span>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Update Checkout Total
function updateCheckoutTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const deliveryFee = 5;
    const tax = (subtotal + deliveryFee) * 0.1;
    const total = subtotal + deliveryFee + tax;
    
    document.getElementById('checkout-subtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('checkout-delivery').textContent = '$' + deliveryFee.toFixed(2);
    document.getElementById('checkout-tax').textContent = '$' + tax.toFixed(2);
    document.getElementById('checkout-total').textContent = '$' + total.toFixed(2);
}
