'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';
import styles from './ProgrammesGrid.module.css';

const COURSES = [
  { id: 101, title: 'English for Academic Research', instructor: 'Dr. Sarah Wilson', price: 89, oldPrice: 159, rating: 4.8, reviews: 1240, badge: 'Bestseller', image: '📚' },
  { id: 102, title: 'Strategic Communication in HE', instructor: 'James Miller', price: 94, oldPrice: 199, rating: 4.9, reviews: 850, badge: 'New', image: '🗣️' },
  { id: 103, title: 'IELTS Academic Preparation', instructor: 'Global Excellence', price: 49, oldPrice: 99, rating: 4.7, reviews: 3400, badge: 'Popular', image: '✍️' },
  { id: 104, title: 'PhD Dissertation Management', instructor: 'Dr. Sarah Wilson', price: 129, oldPrice: 249, rating: 4.9, reviews: 620, badge: 'Bestseller', image: '🎓' },
  { id: 105, title: 'Erasmus+ Mobility Planning', instructor: 'Malta Global Hub', price: 65, oldPrice: 120, rating: 4.6, reviews: 450, badge: '', image: '🌍' },
  { id: 106, title: 'Digital Transformation in HE', instructor: 'Tech Partners', price: 84, oldPrice: 169, rating: 4.5, reviews: 1100, badge: 'Trending', image: '💻' },
  { id: 107, title: 'Administrative Excellence', instructor: 'James Miller', price: 74, oldPrice: 149, rating: 4.7, reviews: 890, badge: '', image: '📊' },
  { id: 108, title: 'Global Ethics in Education', instructor: 'Dr. Sarah Wilson', price: 54, oldPrice: 110, rating: 4.8, reviews: 230, badge: '', image: '⚖️' },
  { id: 109, title: 'Grant Writing Foundations', instructor: 'James Miller', price: 99, oldPrice: 199, rating: 4.9, reviews: 1450, badge: 'Bestseller', image: '🖋️' },
  { id: 110, title: 'Leadership in Change', instructor: 'Global Excellence', price: 119, oldPrice: 229, rating: 4.7, reviews: 540, badge: '', image: '🚀' },
  { id: 111, title: 'Multicultural Team Management', instructor: 'Malta Global Hub', price: 69, oldPrice: 139, rating: 4.6, reviews: 410, badge: '', image: '🤝' },
  { id: 112, title: 'Strategic Networking', instructor: 'James Miller', price: 44, oldPrice: 89, rating: 4.4, reviews: 980, badge: '', image: '🏢' },
];

export default function ProgrammesGrid() {
  const { dispatch } = useCart();
  const searchParams = useSearchParams();
  const query = searchParams.get('search')?.toLowerCase() || '';

  const filteredCourses = COURSES.filter(course => 
    course.title.toLowerCase().includes(query) || 
    course.instructor.toLowerCase().includes(query)
  );

  const router = useRouter();

  const handleAction = (course, buyNow = false) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { id: course.id, name: course.title, price: course.price }
    });
    if (buyNow) {
      dispatch({ type: 'SET_OPEN', payload: false });
      router.push('/checkout');
    } else {
      dispatch({ type: 'SET_OPEN', payload: true });
    }
  };

  return (
    <div className={styles.grid}>
      {filteredCourses.length > 0 ? (
        filteredCourses.map(course => (
          <div key={course.id} className={styles.card}>
            <div className={styles.imagePlaceholder}>{course.image}</div>
            <div className={styles.info}>
              <h3 className={styles.title}>{course.title}</h3>
              <p className={styles.instructor}>{course.instructor}</p>
              <div className={styles.rating}>
                <span className={styles.score}>{course.rating}</span>
                <div className={styles.stars}>★★★★★</div>
                <span className={styles.count}>({course.reviews.toLocaleString()})</span>
              </div>
              <div className={styles.pricing}>
                <span className={styles.price}>£{course.price}</span>
                <span className={styles.oldPrice}>£{course.oldPrice}</span>
              </div>
              {course.badge && <span className={styles.badge}>{course.badge}</span>}
              
              <div className={styles.actions}>
                <button 
                  className={styles.addBtn}
                  onClick={() => handleAction(course)}
                  suppressHydrationWarning
                >
                  Add to Cart
                </button>
                <button 
                  className={styles.buyBtn}
                  onClick={() => handleAction(course, true)}
                  suppressHydrationWarning
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: 'var(--grey-500)' }}>
          No programmes found matching "{query}". Try a different search term.
        </div>
      )}
    </div>
  );
}
