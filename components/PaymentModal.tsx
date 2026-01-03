"use client";

import styles from '@/styles/payment.module.css';
import { CartItem } from '@/lib/cart';

interface PaymentModalProps {
	cartItems: CartItem[];
	total: number;
	onClose: () => void;
	onSuccess: () => void;
}

export default function PaymentModal({ cartItems, total, onClose, onSuccess }: PaymentModalProps) {
	return (
		<div className={styles.modalBackdrop}>
			<div className={styles.modal}>
				<button className={styles.closeButton} onClick={onClose} aria-label="Close">&times;</button>
				<h2>Payment</h2>
				<div>
					<ul>
						{cartItems.map((item) => (
							<li key={item.id}>
								{item.title} x {item.quantity} - ${(item.price * item.quantity).toFixed(2)}
							</li>
						))}
					</ul>
					<div style={{ marginTop: 16, fontWeight: 'bold' }}>Total: ${total.toFixed(2)}</div>
				</div>
				<button className={styles.successButton} style={{ marginTop: 24 }} onClick={onSuccess}>
					Pay Now
				</button>
			</div>
		</div>
	);
}
