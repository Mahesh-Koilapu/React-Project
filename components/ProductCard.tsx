'use client';

import { useState } from 'react';
import styles from '@/styles/productcard.module.css';
import { addToCart } from '@/lib/cart';

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

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
    
    window.dispatchEvent(new Event('cartUpdated'));
    
    setTimeout(() => setIsAdding(false), 300);
  };

  const rating = product.rating?.rate || 4.5;
  const ratingCount = product.rating?.count || 0;
  const discountedPrice = (product.price * 0.9).toFixed(2);

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={`${product.title} - Buy at StoreHub`}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        <span className={styles.category}>{product.category}</span>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.priceSection}>
          <div className={styles.priceContainer}>
            <span className={styles.price}>${discountedPrice}</span>
            <span className={styles.originalPrice}>${product.price.toFixed(2)}</span>
          </div>

          <div className={styles.rating}>
            <span className={styles.stars}>★ {rating.toFixed(1)}</span>
            <span className={styles.ratingCount}>({ratingCount} reviews)</span>
          </div>

          <button
            className={styles.addButton}
            onClick={handleAddToCart}
            disabled={isAdding}
            aria-label={`Add ${product.title} to cart`}
          >
            {isAdding ? '✓ Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  );
}
