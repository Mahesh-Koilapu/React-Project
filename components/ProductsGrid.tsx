'use client';

import { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
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

interface ProductsGridProps {
  products: Product[];
}

export default function ProductsGrid({ products }: ProductsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(
    () => ['All', ...new Set(products.map((p) => p.category))],
    [products]
  );

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <>
      <div className={styles.filterSection}>
        <label className={styles.filterLabel}>Filter by Category:</label>
        <select
          className={styles.filterSelect}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.productsHeader}>
        <h2 className={styles.productsTitle}>Featured Products</h2>
        <span className={styles.productsCount}>
          {filteredProducts.length} of {products.length} products
        </span>
      </div>

      <div className={styles.productGrid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className={styles.emptyContainer}>
            <h3>No products in this category</h3>
            <p>Try selecting a different category</p>
          </div>
        )}
      </div>
    </>
  );
}
