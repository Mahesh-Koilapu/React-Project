'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/cart.module.css';
import { getCart, removeFromCart, CartItem } from '@/lib/cart';
import PaymentModal from '@/components/PaymentModal';
import SuccessModal from '@/components/SuccessModal';

export default function CartClient() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    setCart(getCart());
    setIsLoading(false);

    const handleCartUpdate = () => {
      setCart(getCart());
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  const handleRemove = (productId: number) => {
    removeFromCart(productId);
    setCart(getCart());
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    setShowSuccessModal(true);
    localStorage.removeItem('cart');
    setCart([]);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleCloseSuccess = () => {
    setShowSuccessModal(false);
    window.location.href = '/products';
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (isLoading) {
    return <div className={styles.loading}>Loading cart...</div>;
  }

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>Your cart is empty</h2>
        <p>Start shopping to add items to your cart!</p>
        <Link href="/products" className={styles.shopButton}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartItems}>
        {cart.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img
              src={item.image}
              alt={item.title}
              className={styles.itemImage}
            />
            <div className={styles.itemDetails}>
              <h3>{item.title}</h3>
              <p>${item.price.toFixed(2)}</p>
              <p className={styles.quantity}>Qty: {item.quantity}</p>
            </div>
            <div className={styles.itemTotal}>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
              <button
                className={styles.removeButton}
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.cartSummary}>
        <h2>Order Summary</h2>
        <div className={styles.summaryRow}>
          <span>Subtotal:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className={styles.summaryRow}>
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className={styles.summaryRow}>
          <span>Tax (10%):</span>
          <span>${(total * 0.1).toFixed(2)}</span>
        </div>
        <div className={styles.summaryTotal}>
          <span>Total:</span>
          <span>${(total * 1.1).toFixed(2)}</span>
        </div>
        <button 
          className={styles.checkoutButton}
          onClick={() => setShowPaymentModal(true)}
        >
          Proceed to Payment
        </button>
        <Link href="/products" className={styles.continueShopping}>
          Continue Shopping
        </Link>
      </div>

      {showPaymentModal && (
        <PaymentModal
          cartItems={cart}
          total={total}
          onClose={() => setShowPaymentModal(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}

      {showSuccessModal && (
        <SuccessModal onClose={handleCloseSuccess} />
      )}
    </div>
  );
}
