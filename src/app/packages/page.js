import Header from '../components/Header';
import Footer from '../components/Footer';
import Packages from '../components/Packages';

export default function PackagesPage() {
  return (
    <main>
      <Header />
      <div style={{ height: '140px' }}></div>
      <Packages />
      <Footer />
    </main>
  );
}
