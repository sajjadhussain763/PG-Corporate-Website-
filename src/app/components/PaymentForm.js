'use client';

import { useState } from 'react';

export default function PaymentForm({ onPaymentSuccess, totalAmount }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvc: '', name: '' });

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Simulate Stripe/Gateway API Processing
    setTimeout(() => {
      if (cardDetails.number === '4242 4242 4242 4242') { // Mock success card
           onPaymentSuccess();
      } else if (cardDetails.number.length < 16) {
           setError('Invalid card number. Please try again.');
           setLoading(false);
      } else {
           // Default success for demo (or add more mock logic here)
           onPaymentSuccess();
      }
    }, 2000);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--grey-100)' }}>
      <h3 style={{ marginBottom: '24px', color: 'var(--primary-navy)' }}>Secure Payment</h3>
      
      <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
         <div style={{ padding: '8px 16px', border: '2px solid var(--primary-navy)', borderRadius: '4px', background: 'var(--grey-50)', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary-navy)' }}></div>
            <span style={{ fontWeight: '700', fontSize: '0.85rem' }}>Credit / Debit Card</span>
         </div>
         <div style={{ padding: '8px 16px', border: '1px solid var(--grey-200)', borderRadius: '4px', color: 'var(--grey-500)', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', opacity: 0.6 }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '1px solid var(--grey-300)' }}></div>
            <span style={{ fontWeight: '500', fontSize: '0.85rem' }}>PayPal</span>
         </div>
      </div>

      <form onSubmit={handlePayment} style={{ display: 'grid', gap: '20px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '8px', color: 'var(--grey-500)' }}>Cardholder Name</label>
          <input 
            type="text" 
            placeholder="John Doe" 
            required 
            style={{ width: '100%', padding: '12px', border: '1px solid var(--grey-200)', borderRadius: '4px' }}
            value={cardDetails.name}
            onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '8px', color: 'var(--grey-500)' }}>Card Number</label>
          <div style={{ position: 'relative' }}>
            <input 
              type="text" 
              placeholder="4242 4242 4242 4242" 
              required 
              style={{ width: '100%', padding: '12px', border: '1px solid var(--grey-200)', borderRadius: '4px' }}
              value={cardDetails.number}
              onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
            />
            <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: '4px' }}>
              <div style={{ width: '20px', height: '12px', background: '#ccc', borderRadius: '2px' }}></div>
              <div style={{ width: '20px', height: '12px', background: '#ccc', borderRadius: '2px' }}></div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '8px', color: 'var(--grey-500)' }}>Expiry Date</label>
            <input 
              type="text" 
              placeholder="MM / YY" 
              required 
              style={{ width: '100%', padding: '12px', border: '1px solid var(--grey-200)', borderRadius: '4px' }}
              value={cardDetails.expiry}
              onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '8px', color: 'var(--grey-500)' }}>CVC / CVV</label>
            <input 
              type="text" 
              placeholder="123" 
              required 
              style={{ width: '100%', padding: '12px', border: '1px solid var(--grey-200)', borderRadius: '4px' }}
              value={cardDetails.cvc}
              onChange={(e) => setCardDetails({...cardDetails, cvc: e.target.value})}
            />
          </div>
        </div>

        {error && <p style={{ color: 'var(--accent-red)', fontSize: '0.85rem', margin: 0 }}>{error}</p>}

        <button 
          type="submit" 
          disabled={loading}
          className="btn btn-primary" 
          style={{ width: '100%', marginTop: '12px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}
        >
          {loading ? (
             <div className="spinner" style={{ width: '20px', height: '20px', border: '2px solid white', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></div>
          ) : (
            <>Pay £{totalAmount.toLocaleString()}</>
          )}
        </button>

        <p style={{ textAlign: 'center', fontSize: '0.7rem', color: 'var(--grey-400)', marginTop: '8px' }}>
          🔒 Your data is encrypted and secure. Processed by Paragon Europe Global Finance.
        </p>
      </form>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
