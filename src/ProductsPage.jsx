import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ProductsGrid from '../components/ProductsGrid';
import styles from '../styles/page.module.css';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating?: {
    rate: number;
    count: number;
  };
}

function ProductsLoading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
}

function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <ProductsLoading />;
  if (error || products.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <h3>No products available</h3>
        <p>Please try again later.</p>
      </div>
    );
  }
  return <ProductsGrid products={products} />;
}

export default function ProductsPage() {
  return (
    <main className={styles.main}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Our Products</h1>
          <p className={styles.heroSubtitle}>
            Explore our curated collection of quality items
          </p>
        </div>
      </section>

      <section className={styles.container}>
        <ProductsSection />
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <p className={styles.copyright}>
            © 2026 StoreHub. All rights reserved. | E-Commerce Platform
          </p>
        </div>
      </footer>
    </main>
  );
}
