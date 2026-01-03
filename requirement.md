# Final Project: Paradise Nursery Shopping Application

This document explains **exactly what you need to build** for the final project, based strictly on the provided instructions and grading criteria. It focuses only on **coding requirements** using **React (JS) + Redux Toolkit**. No GitHub or deployment steps are included.

---

## Tech Stack (Mandatory)

* React (JavaScript)
* Redux Toolkit
* React Router (for navigation)
* CSS (plain CSS via `App.css`)

---

## Application Pages & Structure

The application must contain **three main pages**:

1. **Landing Page**
2. **Product Listing Page**
3. **Shopping Cart Page**

Navigation between pages must work correctly.

---

## 1. Landing Page (App.jsx)

### Requirements

* Display the **company name**: `Paradise Nursery`
* Display a short tagline or description (simple text is enough)
* Include a **"Get Started"** button
* Clicking **Get Started** must navigate to the **Product Listing Page**

### Notes

* This page is the default route (`/`)
* Styling can be simple

---

## 2. Navigation Bar (Visible on Product & Cart Pages)

### Requirements

* Must appear on:

  * Product Listing Page
  * Shopping Cart Page

* Must contain links to:

  * Home
  * Plants (Product Listing)
  * Cart

* Must show a **cart icon or cart text with item count**

### Cart Count Behavior

* Display the **total number of items** in the cart
* Count must update dynamically when:

  * Item is added
  * Quantity is increased or decreased
  * Item is removed

---

## 3. Product Listing Page (ProductList.jsx)

### Product Display Requirements

* Display **at least 6 unique plants per category**
* Display **at least 3 categories**

Example categories (you may use these or similar):

* Aromatic Plants
* Medicinal Plants
* Decorative Plants

Each product card must show:

* Plant image (thumbnail)
* Plant name
* Plant price
* **Add to Cart** button

---

### Add to Cart Button Rules

* Clicking **Add to Cart**:

  * Adds the product to Redux cart state
  * Increments cart count in navbar
  * Disables the button after adding

* Disabled button text example:

  * `Added to Cart`

---

## 4. Redux Cart State (CartSlice.jsx)

### Redux Slice Requirements

You must use **Redux Toolkit** and create a cart slice.

The cart state should support:

* Adding an item to cart
* Increasing item quantity
* Decreasing item quantity
* Removing item from cart

### Suggested Cart Item Structure

```js
{
  id,
  name,
  price,
  image,
  quantity
}
```

---

## 5. Shopping Cart Page (CartItem.jsx)

### Page Requirements

* Display all items added to the cart
* Each cart item must show:

  * Thumbnail image
  * Plant name
  * Unit price
  * Quantity
  * Total price for that item (`price × quantity`)

---

### Cart Actions per Item

Each cart item must include:

* **Increase (+) button**

  * Increases quantity
  * Updates total price

* **Decrease (−) button**

  * Decreases quantity
  * Quantity must not go below 1

* **Delete button**

  * Removes item completely from cart

---

### Cart Summary

* Display **total cart amount** (sum of all item totals)

---

### Cart Page Buttons

* **Continue Shopping**

  * Navigates back to Product Listing Page

* **Checkout**

  * Shows text like:

    * `Coming Soon`

(No payment logic required)

---

## 6. About Us Page (AboutUs.jsx)

### Requirements

* Simple static page
* Include basic information about Paradise Nursery
* No dynamic logic required

---

## 7. Styling (App.css)

### Requirements

* Add a **background image** for the landing page
* Basic styling for:

  * Navbar
  * Product cards
  * Cart items

No advanced design required

---

## Functional Rules Summary

✔ Redux must manage cart state
✔ Cart quantity must update everywhere dynamically
✔ Buttons must behave exactly as described
✔ Navigation must work correctly
✔ Do not add extra features beyond requirements

---

## What Is NOT Required

* No backend
* No authentication
* No payment integration
* No API calls
* No TypeScript

---

## Final Note

Follow file names **exactly** as mentioned:

* App.jsx
* App.css
* AboutUs.jsx
* ProductList.jsx
* CartItem.jsx
* CartSlice.jsx

Keep logic simple and aligned strictly with instructions.
