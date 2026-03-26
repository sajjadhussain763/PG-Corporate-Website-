'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import styles from './Header.module.css';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Programmes', href: '/programmes' },
  { label: 'Packages', href: '/packages' },
  { label: 'Malta', href: '/malta' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Contact', href: '/contact' },
];

import { useRouter } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const { totalItems, dispatch } = useCart();

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      if (searchQuery.trim()) {
        router.push(`/programmes?search=${encodeURIComponent(searchQuery)}`);
      }
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} id="home">
      <div className={styles.topBar}>
        <div className={`container ${styles.topInner}`}>
          <span>🌍 Global English Education Leaders</span>
          <div className={styles.topLinks}>
            <Link href="/help">Help Center</Link>
            <Link href="/tracking">Track Order</Link>
            <Link href="/language">EN / MT</Link>
          </div>
        </div>
      </div>
      
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>PG</span>
          <span className={styles.logoText}>Training</span>
        </Link>

        <div className={`${styles.searchBox} ${searchFocused ? styles.searchFocused : ''}`}>
          <div className={styles.searchCategory} onClick={() => setShowCategories(!showCategories)}>
            All Categories
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
            
            {showCategories && (
              <div className={styles.dropdown}>
                <Link href="/programmes" className={styles.dropdownItem}>English Programmes</Link>
                <Link href="/packages" className={styles.dropdownItem}>Work Placements</Link>
                <Link href="/programmes" className={styles.dropdownItem}>Higher Education</Link>
                <Link href="/programmes" className={styles.dropdownItem}>Corporate Training</Link>
              </div>
            )}
          </div>
          <input 
            type="text" 
            placeholder="Search for English programmes, internships, mobility solutions..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
            suppressHydrationWarning
          />
          <button 
            className={styles.searchBtn} 
            aria-label="Search" 
            onClick={handleSearch}
            suppressHydrationWarning
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
            </svg>
          </button>
        </div>

        <div className={styles.actions}>
          <div className={styles.accountAction} onClick={() => setShowUserMenu(!showUserMenu)} suppressHydrationWarning>
            <span className={styles.actionLabel}>Hello, Sign in</span>
            <span className={styles.actionMain}>Account & Lists <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg></span>
            
            {showUserMenu && (
              <div className={styles.dropdown} suppressHydrationWarning>
                <div className={styles.signInBtn}>Sign in</div>
                <div className={styles.divider} />
                <Link href="/account" className={styles.dropdownItem}>Your Account</Link>
                <Link href="/tracking" className={styles.dropdownItem}>Your Orders</Link>
                <div className={styles.dropdownItem}>Your Recommendations</div>
              </div>
            )}
          </div>

          <button
            className={styles.cartBtn}
            onClick={() => dispatch({ type: 'TOGGLE_CART' })}
            aria-label="Open cart"
            suppressHydrationWarning
          >
            <div className={styles.cartIconContainer}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
            </div>
            <span className={styles.cartText}>Cart</span>
          </button>

          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
            suppressHydrationWarning
          >
            <span className={`${styles.bar} ${mobileOpen ? styles.bar1Open : ''}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.bar2Open : ''}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.bar3Open : ''}`} />
          </button>
        </div>
      </div>

      <nav className={`${styles.bottomNav} ${mobileOpen ? styles.navOpen : ''}`}>
        <div className={`container ${styles.bottomInner}`}>
          <div className={styles.allMenu} onClick={() => setShowAllServices(!showAllServices)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            All Services
            
            {showAllServices && (
              <div className={styles.dropdown}>
                <Link href="/packages" className={styles.dropdownItem}>Global Work Placements</Link>
                <Link href="/programmes" className={styles.dropdownItem}>English Language Schools</Link>
                <Link href="/programmes" className={styles.dropdownItem}>Accredited Teacher Training</Link>
                <Link href="/programmes" className={styles.dropdownItem}>Remote Internship Management</Link>
              </div>
            )}
          </div>
          <div className={styles.linksScroll}>
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.navLink}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
