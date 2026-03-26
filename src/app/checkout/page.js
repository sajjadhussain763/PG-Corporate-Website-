'use client';

import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './Checkout.module.css';
import Link from 'next/link';

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();
  const [isClient, setIsClient] = useState(false);
  const [invoiceDetails, setInvoiceDetails] = useState({ date: '', num: '' });

  useEffect(() => {
    setIsClient(true);
    setInvoiceDetails({
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
      num: `PG-${Math.floor(100000 + Math.random() * 900000)}`
    });
  }, []);

  if (items.length === 0) {
    return (
      <main>
        <Header />
        <div style={{ padding: '200px 0', textAlign: 'center' }}>
          <h2>No active order found.</h2>
          <Link href="/" className="btn btn-primary" style={{ marginTop: '20px' }}>Go Back to Shop</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <Header />
      <div className={styles.content}>
        <div className={styles.invoice} id="invoice-print">
          <div className={styles.invoiceHeader}>
            <div className={styles.brand}>
              <span className={styles.logoText}>PG Training</span>
              <p>Excellence in Global Placements</p>
            </div>
            <div className={styles.invoiceMeta}>
              <h1>INVOICE</h1>
              <p><strong>Invoice #:</strong> {invoiceDetails.num}</p>
              <p><strong>Date:</strong> {invoiceDetails.date}</p>
            </div>
          </div>

          <div className={styles.detailsRow}>
            <div className={styles.col}>
              <h4>Issued By:</h4>
              <p>PG Training Malta Ltd.</p>
              <p>St. Julians, Malta</p>
              <p>billing@pgtraining.com</p>
            </div>
            <div className={styles.col}>
              <h4>Billed To:</h4>
              <p>Valued Student / Institution</p>
              <p>Verified E-commerce Order</p>
              <p>Mode: Direct Checkout</p>
            </div>
          </div>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th style={{ textAlign: 'right' }}>Unit Price</th>
                <th style={{ textAlign: 'right' }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>
                    <strong>{item.name}</strong>
                    <p style={{ fontSize: '0.8rem', color: '#666', margin: 0 }}>Enrolment & Mobility Access Included</p>
                  </td>
                  <td>{item.quantity}</td>
                  <td style={{ textAlign: 'right' }}>£{item.price.toLocaleString()}</td>
                  <td style={{ textAlign: 'right' }}>£{(item.price * item.quantity).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.summaryBox}>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>£{totalPrice.toLocaleString()}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>VAT (0% - Educational Exempt)</span>
              <span>£0</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Amount Paid</span>
              <span>£{totalPrice.toLocaleString()}</span>
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.statusBadge}>PAID</div>
            <p>Thank you for choosing PG Training for your educational journey.</p>
            <p style={{ fontSize: '0.75rem', marginTop: '10px' }}>This is an automatically generated receipt for your records.</p>
          </div>
        </div>

        <div className={styles.actions}>
          <button className="btn btn-primary" onClick={() => window.print()}>
            🖨️ Print Invoice
          </button>
          <Link href="/" className="btn btn-outline">
            Return to Dashboard
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
