import { Suspense } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProgrammesGrid from '../components/ProgrammesGrid';

export default function ProgrammesPage() {
  return (
    <main>
      <Header />
      <div style={{ height: '140px' }}></div>
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '24px' }}>All Programmes</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--grey-600)', marginBottom: '40px' }}>
            Choose from over 500+ specialized courses for PhD candidates and Higher Education professionals.
          </p>
          <Suspense fallback={<div>Loading programmes...</div>}>
            <ProgrammesGrid />
          </Suspense>
        </div>
      </section>
      <Footer />
    </main>
  );
}
