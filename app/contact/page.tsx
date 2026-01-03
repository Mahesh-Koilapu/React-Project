import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import styles from '@/styles/page.module.css';
import contactStyles from '@/styles/contact.module.css';

export const metadata: Metadata = {
  title: 'Contact Us | StoreHub - Get in Touch',
  description: 'Have questions? Get in touch with our customer support team at StoreHub. We are here to help!',
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSubtitle}>
            We would love to hear from you. Get in touch with us today.
          </p>
        </div>
      </section>

      <section className={styles.container}>
        <div className={contactStyles.contactWrapper}>
          <div className={contactStyles.info}>
            <h2>Get in Touch</h2>
            <p>Have a question or feedback? We are here to help!</p>

            <div className={contactStyles.infoItem}>
              <h3>📧 Email</h3>
              <p>
                <a href="mailto:support@storehub.com">support@storehub.com</a>
              </p>
            </div>

            <div className={contactStyles.infoItem}>
              <h3>📞 Phone</h3>
              <p>
                <a href="tel:+1234567890">+1 (234) 567-8900</a>
              </p>
            </div>

            <div className={contactStyles.infoItem}>
              <h3>📍 Address</h3>
              <p>
                StoreHub Inc.<br />
                123 Commerce Street<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>

            <div className={contactStyles.infoItem}>
              <h3>🕒 Business Hours</h3>
              <p>
                Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                Saturday: 10:00 AM - 4:00 PM EST<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <div className={contactStyles.formWrapper}>
            <h2>Send us a Message</h2>
            <ContactForm />
          </div>
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
