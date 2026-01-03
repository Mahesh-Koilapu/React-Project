import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import styles from '@/styles/page.module.css';
import aboutStyles from '@/styles/about.module.css';

export const metadata: Metadata = {
  title: 'About Us | StoreHub - Your Trusted E-Commerce Partner',
  description: 'Learn about StoreHub, our mission, and why customers trust us for quality products and excellent service.',
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About StoreHub</h1>
          <p className={styles.heroSubtitle}>
            Delivering quality products and exceptional service since 2024
          </p>
        </div>
      </section>

      <section className={styles.container}>
        <div className={aboutStyles.content}>
          <article className={aboutStyles.section}>
            <h2>Our Mission</h2>
            <p>
              At StoreHub, we believe in providing high-quality products at competitive prices.
              Our mission is to make online shopping convenient, trustworthy, and enjoyable for
              every customer. We are committed to excellence in every aspect of our business.
            </p>
          </article>

          <article className={aboutStyles.section}>
            <h2>Why Choose Us?</h2>
            <ul className={aboutStyles.features}>
              <li>✓ Premium Quality Products</li>
              <li>✓ Competitive Pricing</li>
              <li>✓ Fast & Free Shipping</li>
              <li>✓ Secure Payments</li>
              <li>✓ 24/7 Customer Support</li>
              <li>✓ Easy Returns</li>
            </ul>
          </article>

          <article className={aboutStyles.section}>
            <h2>Our Values</h2>
            <div className={aboutStyles.values}>
              <div className={aboutStyles.value}>
                <h3>Integrity</h3>
                <p>We operate with honesty and transparency in all our dealings.</p>
              </div>
              <div className={aboutStyles.value}>
                <h3>Quality</h3>
                <p>We ensure every product meets our high standards.</p>
              </div>
              <div className={aboutStyles.value}>
                <h3>Customer Focus</h3>
                <p>Your satisfaction is our top priority.</p>
              </div>
              <div className={aboutStyles.value}>
                <h3>Innovation</h3>
                <p>We continuously improve our services for you.</p>
              </div>
            </div>
          </article>

          <article className={aboutStyles.section}>
            <h2>Get Started</h2>
            <p>
              Ready to explore our collection? Start shopping now and experience the StoreHub difference.
            </p>
            <Link href="/products" className={aboutStyles.ctaButton}>
              Shop Now
            </Link>
          </article>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <p className={styles.copyright}>
            © 2026 StoreHub. All rights reserved. | E-Commerce Platform
          </p>
        </div>
      </footer>
    </main>
  );
}
