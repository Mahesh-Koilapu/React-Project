'use client';

import styles from '@/styles/payment.module.css';

interface SuccessModalProps {
  onClose: () => void;
}

export default function SuccessModal({ onClose }: SuccessModalProps) {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <div className={styles.successContent}>
          <div className={styles.successIcon}>✓</div>
          <h2 className={styles.successTitle}>Payment Successful!</h2>
          <p className={styles.successMessage}>
            Your order has been placed successfully. Thank you for shopping at StoreHub!
          </p>
          <p className={styles.successSubtext}>
            A confirmation email has been sent to your email address.
          </p>
          <button
            className={styles.successButton}
            onClick={onClose}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
