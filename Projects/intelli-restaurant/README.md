# Assignment 2: Restaurant Website with E-commerce

## Overview
A fully responsive restaurant website with functional e-commerce capabilities built with pure HTML and CSS, featuring a complete ordering and checkout flow.

## Features

### Pages
1. **Home Page (index.html)**
   - Modern hero section with restaurant branding
   - Feature highlights section (Fresh Ingredients, Expert Chefs, Fast Delivery)
   - Signature dishes showcase with pricing
   - Call-to-action section
   - Responsive footer

2. **About Page (about.html)**
   - Restaurant story and heritage
   - Mission and vision statements
   - Core values (Quality, Innovation, Sustainability, etc.)
   - Statistics (Years of Excellence, Happy Customers, Menu Items, Rating)
   - Specialties section
   - Call-to-action

3. **Menu Page (menu.html)**
   - Complete restaurant menu organized by category:
     - Appetizers (3 items)
     - Pasta & Risotto (3 items)
     - Wood-Fired Pizza (3 items)
     - Main Courses (3 items)
     - Desserts (3 items)
     - Beverages (3 items)
   - Each item displays: Image emoji, name, description, price
   - Add to Cart buttons (functional JavaScript)

4. **Cart Page (cart.html)**
   - Display all items added to cart
   - Quantity adjustment buttons (+/-)
   - Remove item functionality
   - Real-time order summary:
     - Subtotal calculation
     - Delivery fee option (checkbox)
     - Tax calculation (10%)
     - Total price
   - Proceed to Checkout button

5. **Checkout Page (checkout.html)**
   - Complete order form with sections:
     - Shipping Information (Name, Email, Phone, Address, City, State, ZIP)
     - Payment Information (Card Name, Number, Expiry, CVV)
     - Additional Options (Special Instructions, Terms & Conditions)
   - Order summary with item breakdown
   - Estimated delivery time display
   - Order confirmation modal with Order ID
   - All form fields have validation

### Design Highlights

**Color Scheme:**
- Primary Color: Warm Terracotta (#c0502e)
- Secondary Color: Dark Gray (#2c3e50)
- Accent Color: Golden Orange (#f39c12)
- Background: Light Beige (#f5f1f0)

**Typography:**
- Headings: Playfair Display (Elegant serif)
- Body Text: Lato (Clean, modern sans-serif)

**Layout:**
- Flexbox and CSS Grid for responsive design
- Mobile-first approach
- Cards with hover effects
- Smooth animations

### Interactive Features
- **Add to Cart:** JavaScript manages cart data in localStorage
- **Cart Management:** Update quantities, remove items
- **Dynamic Pricing:** Real-time calculation of totals with tax and delivery
- **Form Validation:** Client-side validation on checkout
- **Order Confirmation:** Modal popup with order ID
- **Mobile Navigation:** Responsive hamburger menu

## Technical Stack
- **HTML5:** Semantic structure
- **CSS3:** Modern styling with Flexbox and Grid, animations
- **JavaScript:** Cart management, form handling, localStorage integration
- **Fonts:** Google Fonts (Playfair Display and Lato)

## File Structure
```
assignment2-restaurant/
├── index.html          # Home page
├── about.html          # About page
├── menu.html           # Menu & product catalog
├── cart.html           # Shopping cart
├── checkout.html       # Checkout & order form
├── styles.css          # All styling
├── script.js           # Cart logic & interactivity
└── README.md           # This file
```

## How to Use

### Browsing
1. Start at the home page
2. Navigate to Menu page to view all dishes
3. Read About page for restaurant information

### Ordering
1. Click "Add to Cart" on any menu item
2. Navigate to Cart page
3. Adjust quantities or add/remove items
4. Check "Add Delivery Fee" if needed
5. Click "Proceed to Checkout"
6. Fill in all required information
7. Accept terms and conditions
8. Submit to see order confirmation

### Data Persistence
- Cart items are saved in browser's localStorage
- Cart persists even after page refresh
- Clear browser data to reset cart

## Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: Below 768px
- Extra Small: Below 480px

## Browser Compatibility
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled for cart functionality

## Design Choices

1. **Warm Color Palette:** Terracotta and golden tones create an appetizing, upscale restaurant atmosphere
2. **Elegant Typography:** Playfair Display for headings adds sophistication; Lato for readability
3. **Food Imagery:** Large emoji representations of dishes make menu visually appealing
4. **Card-Based Layout:** Food items displayed as cards with hover effects for interactivity
5. **Functional E-commerce:** Complete checkout flow with validation and order confirmation
6. **localStorage Integration:** Cart data persists without backend, perfect for UI demonstration
7. **Mobile-First:** Seamlessly adapts from mobile to desktop with hamburger menu

## Features Implemented

### Functional
- ✅ Add items to cart
- ✅ Update quantities
- ✅ Remove items
- ✅ Real-time price calculations
- ✅ Tax calculation (10%)
- ✅ Delivery fee option
- ✅ Form validation
- ✅ Order confirmation

### Design
- ✅ Responsive layout
- ✅ Smooth animations
- ✅ Hover effects
- ✅ Professional color scheme
- ✅ Consistent typography
- ✅ Mobile menu

