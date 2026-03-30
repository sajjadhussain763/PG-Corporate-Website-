'use client';

import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaymentForm from '../components/PaymentForm';
import styles from './Checkout.module.css';
import Link from 'next/link';
import Logo from '../components/Logo';

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();
  const [isClient, setIsClient] = useState(false);
  const [invoiceDetails, setInvoiceDetails] = useState({ date: '', num: '' });
  const [checkoutStep, setCheckoutStep] = useState('PAYMENT'); // PAYMENT or RECEIPT

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
          <h2 style={{ color: 'var(--primary-navy)' }}>Your cart is empty.</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Please select a programme before proceeding to checkout.</p>
          <Link href="/" className="btn btn-primary" style={{ padding: '16px 48px' }}>Explore All Programmes</Link>
        </div>
        <Footer />
      </main>
    );
  }

  const handlePaymentSuccess = () => {
    setCheckoutStep('RECEIPT');
  };

  return (
    <main className={styles.page} style={{ background: 'var(--grey-100)', minHeight: '100vh' }}>
      <Header />
      
      <div style={{ paddingTop: '180px', paddingBottom: '100px' }}>
        <div className="container">
          
          {checkoutStep === 'PAYMENT' ? (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '60px', alignItems: 'start' }}>
              <div className="animate-fadeIn">
                 <h2 style={{ marginBottom: '32px', color: 'var(--primary-navy)' }}>Checkout & Enrollment</h2>
                 <PaymentForm totalAmount={totalPrice} onPaymentSuccess={handlePaymentSuccess} />
              </div>

              <div className="animate-slideInRight" style={{ background: 'white', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--grey-200)', boxShadow: 'var(--shadow-md)' }}>
                <h4 style={{ marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--primary-navy)' }}>Order Summary</h4>
                <div style={{ display: 'grid', gap: '20px' }}>
                   {items.map(item => (
                     <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                        <div>
                           <p style={{ fontWeight: '700', margin: 0, fontSize: '0.9rem' }}>{item.name}</p>
                           <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>Quantity: {item.quantity}</p>
                        </div>
                        <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>£{item.price.toLocaleString()}</span>
                     </div>
                   ))}
                </div>
                <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '2px solid var(--grey-100)' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '800', fontSize: '1.25rem', color: 'var(--primary-navy)' }}>
                      <span>Total Due</span>
                      <span>£{totalPrice.toLocaleString()}</span>
                   </div>
                   <p style={{ fontSize: '0.75rem', marginTop: '16px', color: 'var(--text-muted)' }}>* Prices are tax-exempt for institutional educational mobility solutions.</p>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.content}>
               <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                  <div style={{ width: '64px', height: '64px', background: 'var(--accent-green)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '2rem' }}>✓</div>
                  <h2 style={{ color: 'var(--primary-navy)' }}>Payment Successful!</h2>
                  <p style={{ color: 'var(--text-secondary)' }}>Your enrollment is being processed. An email has been sent to your account.</p>
               </div>

              <div className={styles.invoice} id="invoice-print" style={{ border: '1px solid var(--grey-200)', boxShadow: 'var(--shadow-lg)' }}>
                <div className={styles.invoiceHeader}>
                  <div className={styles.brand}>
                    <Logo size="md" />
                    <p style={{ marginTop: '12px', color: 'var(--text-muted)' }}>Excellence in Global Placements</p>
                  </div>
                  <div className={styles.invoiceMeta}>
                    <h1 style={{ color: 'var(--grey-200)', fontWeight: '900' }}>INVOICE</h1>
                    <p style={{ fontWeight: '700' }}><strong>Invoice #:</strong> {invoiceDetails.num}</p>
                    <p><strong>Date:</strong> {invoiceDetails.date}</p>
                  </div>
                </div>

                <div className={styles.detailsRow} style={{ borderBottom: '1px solid var(--grey-100)', paddingBottom: '32px' }}>
                  <div className={styles.col}>
                    <h4 style={{ color: 'var(--primary-navy)' }}>Issued By:</h4>
                    <p style={{ fontWeight: '700' }}>Paragon Europe Malta Ltd.</p>
                    <p>St. Julians, Malta</p>
                    <p>finance@paragoneurope.eu</p>
                  </div>
                  <div className={styles.col}>
                    <h4 style={{ color: 'var(--primary-navy)' }}>Billed To:</h4>
                    <p style={{ fontWeight: '700' }}>Academic Institution / Valued Student</p>
                    <p>Mode: Secured Global Checkout</p>
                    <p>Status: Authenticated</p>
                  </div>
                </div>

                <table className={styles.table} style={{ marginTop: '32px' }}>
                  <thead>
                    <tr>
                      <th style={{ color: 'var(--primary-navy)', background: 'var(--grey-100)' }}>Description</th>
                      <th style={{ color: 'var(--primary-navy)', background: 'var(--grey-100)' }}>Quantity</th>
                      <th style={{ textAlign: 'right', color: 'var(--primary-navy)', background: 'var(--grey-100)' }}>Unit Price</th>
                      <th style={{ textAlign: 'right', color: 'var(--primary-navy)', background: 'var(--grey-100)' }}>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map(item => (
                      <tr key={item.id}>
                        <td>
                          <strong style={{ color: 'var(--primary-navy)' }}>{item.name}</strong>
                          <p style={{ fontSize: '0.8rem', color: '#666', margin: 0 }}>Paragon Mobility Framework Enrolled</p>
                        </td>
                        <td>{item.quantity}</td>
                        <td style={{ textAlign: 'right' }}>£{item.price.toLocaleString()}</td>
                        <td style={{ textAlign: 'right' }}>£{(item.price * item.quantity).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className={styles.summaryBox} style={{ borderTop: '2px solid var(--primary-navy)', paddingTop: '20px' }}>
                  <div className={styles.summaryRow}>
                    <span>Subtotal</span>
                    <span>£{totalPrice.toLocaleString()}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', fontSize: '1.5rem', fontWeight: '900', color: 'var(--primary-navy)' }}>
                    <span>Amount Paid</span>
                    <span>£{totalPrice.toLocaleString()}</span>
                  </div>
                </div>

                <div className={styles.footer} style={{ borderTop: '1px dashed var(--grey-300)', marginTop: '64px' }}>
                  <div className={styles.statusBadge} style={{ color: 'var(--accent-green)', borderColor: 'var(--accent-green)' }}>PAID</div>
                  <p style={{ fontWeight: '700', color: 'var(--primary-navy)' }}>Thank you for choosing Paragon Europe for your academic excellence.</p>
                  <p style={{ fontSize: '0.75rem', marginTop: '10px' }}>This is an automatically generated receipt for your global records.</p>
                </div>
              </div>

              <div className={styles.actions} style={{ marginTop: '48px', display: 'flex', gap: '24px' }}>
                <button className="btn btn-primary btn-lg" onClick={() => window.print()} style={{ padding: '18px 48px' }}>
                  🖨️ Print Receipt
                </button>
                <Link href="/" className="btn btn-outline btn-lg" style={{ padding: '18px 48px' }}>
                  Back to Dashboard
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
