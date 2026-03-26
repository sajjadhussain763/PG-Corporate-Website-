'use client';

import { useState } from 'react';
import { useCart } from '../context/CartContext';
import styles from './Packages.module.css';

const PACKAGES = [
  {
    id: 'silver',
    tier: 'Silver',
    name: 'Foundation Placement',
    price: 350,
    features: ['20 hours/week placement', 'Study-expertise alignment', 'Basic support services'],
    color: '#94A3B8',
  },
  {
    id: 'gold',
    tier: 'Gold',
    name: 'Standard Mobility',
    price: 850,
    features: ['30 hours/week placement', 'Job interview preparation', 'Credit transfer support'],
    color: '#FF9900',
    popular: true,
  },
  {
    id: 'platinum',
    tier: 'Platinum',
    name: 'Holistic Suite',
    price: 1850,
    features: ['40 hours/week premier placement', 'Accommodation coordination', 'Guaranteed job offer'],
    color: '#131921',
  },
];

const MOBILITY_TYPES = [
  { id: 'physical', label: 'Physical', icon: '📍' },
  { id: 'remote', label: 'Remote', icon: '💻' },
  { id: 'blended', label: 'Blended', icon: '🔄' },
];

import { useRouter } from 'next/navigation';

export default function Packages() {
  const { dispatch } = useCart();
  const [selectedMobility, setSelectedMobility] = useState('physical');
  const router = useRouter();

  const handleAction = (pkg, buyNow = false) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { 
        id: `${pkg.id}-${selectedMobility}`, 
        name: `${pkg.tier}: ${pkg.name} (${selectedMobility})`, 
        price: pkg.price 
      },
    });
    if (buyNow) {
      dispatch({ type: 'SET_OPEN', payload: false });
      router.push('/checkout');
    } else {
      dispatch({ type: 'SET_OPEN', payload: true });
    }
  };

  return (
    <section className={styles.packages} id="packages">
      <div className="container">
        <div className={styles.variantSelector}>
          <span className={styles.variantLabel}>Step 1: Choose Mobility Type</span>
          <div className={styles.mobilityGrid}>
            {MOBILITY_TYPES.map((type) => (
              <label key={type.id} className={`${styles.mobilityOption} ${selectedMobility === type.id ? styles.activeMobility : ''}`}>
                <input 
                  type="radio" 
                  name="mobility" 
                  value={type.id} 
                  checked={selectedMobility === type.id}
                  onChange={(e) => setSelectedMobility(e.target.value)}
                  suppressHydrationWarning
                />
                <span className={styles.mobilityIcon}>{type.icon}</span>
                <span className={styles.mobilityName}>{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className={`${styles.card} ${pkg.popular ? styles.popular : ''}`}>
              {pkg.popular && <div className={styles.badge}>Best Value</div>}
              <div className={styles.tierTag}>{pkg.tier}</div>
              <h3 className={styles.name}>{pkg.name}</h3>
              <div className={styles.pricing}>
                <span className={styles.currency}>£</span>
                <span className={styles.amount}>{pkg.price}</span>
              </div>
              <ul className={styles.features}>
                {pkg.features.map(f => (
                  <li key={f} className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              
              <div className={styles.buttonGroup}>
                <button className={styles.addBtn} onClick={() => handleAction(pkg)} suppressHydrationWarning>
                  Add to Cart
                </button>
                <button className={styles.buyBtn} onClick={() => handleAction(pkg, true)} suppressHydrationWarning>
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Sticky Mobile Bar */}
      <div className={styles.stickyBar}>
        <div className={styles.stickyInner}>
          <div className={styles.stickyInfo}>
            <span className={styles.stickyLabel}>Selected Mobility:</span>
            <span className={styles.stickyValue}>{selectedMobility}</span>
          </div>
          <button className={styles.stickyBtn} onClick={() => handleAction(PACKAGES[1], true)} suppressHydrationWarning>
            Fast Checkout
          </button>
        </div>
      </div>
    </section>
  );
}
