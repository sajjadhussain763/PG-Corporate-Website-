'use client';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import styles from './SpecialOffers.module.css';

const OFFERS = [
  {
    id: 'mothers-day-bundle',
    emoji: '💐',
    title: "Mother's Day Special",
    subtitle: 'Gift the power of education',
    description: 'Treat a special educator to a transformative learning experience. Our Mother\'s Day bundle includes a 4-week programme with complimentary study materials.',
    price: 249,
    originalPrice: 299,
    tag: 'Save £50',
  },
  {
    id: 'fathers-day-bundle',
    emoji: '👔',
    title: "Father's Day Special",
    subtitle: 'Invest in leadership growth',
    description: 'Celebrate with professional advancement. Includes Administrative Excellence module with bonus strategic planning workshop access.',
    price: 279,
    originalPrice: 349,
    tag: 'Save £70',
  },
  {
    id: 'combo-bundle',
    emoji: '🎯',
    title: 'Bundle & Combo Offer',
    subtitle: 'Maximum value package',
    description: 'Combine any two programmes and receive 20% off the total. Perfect for institutions enrolling multiple staff members.',
    price: 679,
    originalPrice: 848,
    tag: '20% Off',
  },
];

export default function SpecialOffers() {
  const { dispatch } = useCart();
  const [timeLeft, setTimeLeft] = useState('23:59:59');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      const diff = endOfDay - now;
      
      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const addOffer = (offer) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { id: offer.id, name: offer.title, price: offer.price },
    });
    dispatch({ type: 'SET_OPEN', payload: true });
  };

  return (
    <section className={styles.offers} id="offers" suppressHydrationWarning>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">Limited Time <span className="text-gradient">Special Offers</span></h2>
          <div className={styles.countdownBox} suppressHydrationWarning>
            Ends in: <span className={styles.timer}>{timeLeft}</span>
          </div>
          <p className="section-subtitle">
            Don't miss out! Get these exclusive celebration bundles before the timer hits zero.
          </p>
        </div>

        <div className={styles.grid}>
          {OFFERS.map((offer) => (
            <div key={offer.id} className={styles.card} suppressHydrationWarning>
              <div className={styles.badge}>{offer.tag}</div>
              <div className={styles.emoji}>{offer.emoji}</div>
              <h3 className={styles.title}>{offer.title}</h3>
              <p className={styles.subtitle}>SPECIAL CELEBRATION DISCOUNT</p>
              <p className={styles.desc}>{offer.description}</p>
              <div className={styles.pricing}>
                <span className={styles.oldPrice}>£{offer.originalPrice}</span>
                <span className={styles.newPrice}>£{offer.price}</span>
              </div>
              <button
                className={styles.buyBtn}
                onClick={() => addOffer(offer)}
                suppressHydrationWarning
              >
                Add to Order
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
