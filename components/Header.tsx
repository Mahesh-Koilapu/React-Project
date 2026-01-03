'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/header.module.css';
import { getCartCount } from '@/lib/cart';

export default function Header() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(getCartCount());
    
    const handleStorageChange = () => {
      setCartCount(getCartCount());
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('cartUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cartUpdated', handleStorageChange);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span>🛍️</span>
          <span>StoreHub</span>
        </Link>

        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/products" className={styles.navLink}>Products</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>

        <Link href="/cart" className={styles.cartIcon}>
          <span>🛒</span>
          {cartCount > 0 && <div className={styles.cartBadge}>{cartCount}</div>}
        </Link>
      </div>
    </header>
  );
}
