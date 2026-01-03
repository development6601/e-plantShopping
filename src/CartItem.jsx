import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = () => {
  const navigate = useNavigate();
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      // Extract numeric value from cost string if available, otherwise use price
      const unitPrice = item.cost ? parseFloat(item.cost.substring(1)) : item.price;
      return total + (unitPrice * item.quantity);
    }, 0).toFixed(2);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    navigate('/plants');
  };

  const handleIncrement = (item) => {
    // Dispatch updateQuantity with name and amount (quantity + 1)
    dispatch(updateQuantity({
      name: item.name,
      amount: item.quantity + 1
    }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      // If quantity is greater than 1, decrease by 1
      dispatch(updateQuantity({
        name: item.name,
        amount: item.quantity - 1
      }));
    } else {
      // If quantity would drop to 0, remove the item
      dispatch(removeItem(item));
    }
  };

  const handleRemove = (item) => {
    // Dispatch removeItem action to delete the item from the cart
    dispatch(removeItem(item));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    // Extract numeric value from cost string using parseFloat(item.cost.substring(1))
    const unitPrice = item.cost ? parseFloat(item.cost.substring(1)) : item.price;
    return (unitPrice * item.quantity).toFixed(2);
  };

  return (
    <div className="cart-page">
      {/* Home Button */}
      <Link to="/" className="home-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </Link>

      {/* Back to Plants Button */}
      <Link to="/plants" className="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </Link>

    <div className="cart-container">
        <div className="cart-header">
          <h1 className="cart-title">Shopping Cart</h1>
          <p className="cart-subtitle">{cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart</p>
              </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </div>
            <h2>Your cart is empty</h2>
            <p>Start adding some beautiful plants to your cart!</p>
            <button className="continue-shopping-btn" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {cart.map(item => (
                <div className="cart-item-card" key={item.name}>
                  <div className="cart-item-image-wrapper">
                    <img className="cart-item-image" src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-info">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-unit-price">
                      {item.cost ? item.cost : `$${item.price.toFixed(2)}`} each
                    </p>
                    
                    <div className="cart-item-controls">
                      <div className="quantity-control">
                        <button 
                          className="quantity-btn decrease" 
                          onClick={() => handleDecrement(item)}
                          disabled={item.quantity === 1}
                        >
                          −
                        </button>
                        <span className="quantity-value">{item.quantity}</span>
                        <button 
                          className="quantity-btn increase" 
                          onClick={() => handleIncrement(item)}
                        >
                          +
                        </button>
                      </div>
                      
                      <div className="cart-item-price">
                        <span className="price-label">Total:</span>
                        <span className="price-value">${calculateTotalCost(item)}</span>
                      </div>
                    </div>

                    <button 
                      className="remove-btn" 
                      onClick={() => handleRemove(item)}
                      title="Remove item"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                      Remove
                    </button>
            </div>
          </div>
        ))}
      </div>

            <div className="cart-summary">
              <div className="summary-card">
                <div className="summary-row">
                  <span className="summary-label">Subtotal ({cart.reduce((total, item) => total + item.quantity, 0)} items):</span>
                  <span className="summary-value">${calculateTotalAmount()}</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-row total-row">
                  <span className="summary-label">Total:</span>
                  <span className="summary-value total">${calculateTotalAmount()}</span>
                </div>
              </div>
              
              <button className="continue-shopping-btn" onClick={handleContinueShopping}>
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartItem;
