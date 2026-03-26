'use client';

import { Suspense } from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import InfoGrid from './components/InfoGrid';
import Benefits from './components/Benefits';
import AboutUs from './components/AboutUs';
import Programmes from './components/Programmes';
import Packages from './components/Packages';
import Engagement from './components/Engagement';
import Footer from './components/Footer';
import FlashSale from './components/FlashSale';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

import SpecialOffers from './components/SpecialOffers';
import MaltaExperience from './components/MaltaExperience';
import ScheduleCalendar from './components/ScheduleCalendar';
import ProgrammesGrid from './components/ProgrammesGrid';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Header />
      <FlashSale />
      
      {/* Header (140px) + Flash Sale (~45px) Spacer */}
      <div style={{ height: '185px' }}></div>

      <HeroCarousel />
      <InfoGrid />
      
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h2 className="section-title" style={{ margin: 0 }}>Bestselling <span className="text-gradient">Programmes</span></h2>
            <Link href="/programmes" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'underline' }}>View All Categories</Link>
          </div>
          <Suspense fallback={<div>Loading catalogues...</div>}>
            <ProgrammesGrid />
          </Suspense>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--bg-main)' }}>
        <div className="container">
          <Benefits />
        </div>
      </section>

      <SpecialOffers />
      
      <section style={{ background: 'var(--grey-100)' }}>
        <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
          <MaltaExperience />
          <Link href="/malta" className="btn btn-outline" style={{ marginTop: '40px' }}>Deep Dive into Malta</Link>
        </div>
      </section>

      <Testimonials />
      
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h2 className="section-title" style={{ margin: 0 }}>Upcoming <span className="text-gradient">Cohorts</span></h2>
            <Link href="/schedule" style={{ color: 'var(--accent)', fontWeight: 700 }}>See Full 2024 Calendar</Link>
          </div>
          <ScheduleCalendar />
        </div>
      </section>

      <FAQ />
      
      <AboutUs />
      
      <Footer />
    </main>
  );
}

