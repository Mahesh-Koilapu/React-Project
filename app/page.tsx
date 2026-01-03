import { Suspense } from 'react';
import Header from '@/components/Header';
import ProductsGrid from '@/components/ProductsGrid';
import styles from '@/styles/page.module.css';

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

async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch('https://fakestoreapi.com/products', {
      next: { revalidate: 3600 },
    });
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

function ProductsLoading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
}

async function ProductsSection() {
  const products = await getProducts();

  if (products.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <h3>No products available</h3>
        <p>Please try again later.</p>
      </div>
    );
  }

  return <ProductsGrid products={products} />;
}

export default function Page() {
  return (
    <main className={styles.main}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Welcome to StoreHub
          </h1>
          <p className={styles.heroSubtitle}>
            Discover premium products with unbeatable prices and fast delivery
          </p>
          <div className={styles.heroButtons}>
            <a href="/products" className={styles.primaryButton}>Shop Now</a>
            <a href="/about" className={styles.secondaryButton}>Learn More</a>
          </div>
        </div>
      </section>

      <section className={styles.container}>
        <Suspense fallback={<ProductsLoading />}>
          <ProductsSection />
        </Suspense>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <a href="/products">Products</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact Us</a>
            <a href="/cart">Shopping Cart</a>
          </div>
          <p className={styles.copyright}>
            © 2026 StoreHub. All rights reserved. | E-Commerce Platform
          </p>
        </div>
      </footer>
    </main>
  );
}
