import type { Metadata } from 'next';
import Header from '@/components/Header';
import CartClient from '@/components/CartClient';
import styles from '@/styles/page.module.css';

export const metadata: Metadata = {
  title: 'Shopping Cart | StoreHub',
  description: 'View and manage your shopping cart items at StoreHub',
};

export default function CartPage() {
  return (
    <main className={styles.main}>
      <Header />

      <section className={styles.container}>
        <div className={styles.productsHeader}>
          <h1 className={styles.productsTitle}>Shopping Cart</h1>
        </div>

        <CartClient />
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
          <p className={styles.copyright}>
            © 2026 StoreHub. All rights reserved. | E-Commerce Platform
          </p>
        </div>
      </footer>
    </main>
  );
}
