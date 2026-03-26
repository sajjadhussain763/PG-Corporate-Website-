'use client';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.logoArea}>
            <a href="#home" className={styles.logo}>
              PG<span>Training</span>
            </a>
            <p className={styles.tagline}>
              Global leaders in English language education and international work placement solutions since 2000.
            </p>
            <div className={styles.socials}>
              {['fb', 'tw', 'ig', 'li'].map(s => (
                <a key={s} href="#" className={styles.socialIcon}>
                  {s.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Company</h4>
            <div className={styles.links}>
              <a href="#about" className={styles.link}>About Us</a>
              <a href="#programmes" className={styles.link}>Our Programmes</a>
              <a href="#packages" className={styles.link}>Pricing Packages</a>
              <a href="#contact" className={styles.link}>Contact Us</a>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Services</h4>
            <div className={styles.links}>
              <a href="#" className={styles.link}>Mobility Solutions</a>
              <a href="#" className={styles.link}>Academic Placements</a>
              <a href="#" className={styles.link}>Remote Internships</a>
              <a href="#" className={styles.link}>Corporate Training</a>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Support</h4>
            <div className={styles.links}>
              <a href="#" className={styles.link}>Help Center</a>
              <a href="#" className={styles.link}>Order Tracking</a>
              <a href="#" className={styles.link}>FAQs</a>
              <a href="#" className={styles.link}>Language / EN</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} PG Training. All Rights Reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.link}>Privacy Policy</a>
            <a href="#" className={styles.link}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
