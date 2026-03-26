import Header from '../components/Header';
import Footer from '../components/Footer';
import LeadGenForm from '../components/LeadGenForm';

export default function ContactPage() {
  return (
    <main>
      <Header />
      <div style={{ height: '140px' }}></div>
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '24px', textAlign: 'center' }}>Contact Us</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--grey-600)', marginBottom: '40px', textAlign: 'center' }}>
            Have questions about our global work placements or higher education programs? Reach out to our 24/7 global support desk.
          </p>
          <LeadGenForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
