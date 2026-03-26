import Header from '../components/Header';
import Footer from '../components/Footer';
import MaltaExperience from '../components/MaltaExperience';

export default function MaltaPage() {
  return (
    <main>
      <Header />
      <div style={{ height: '140px' }}></div>
      <MaltaExperience />
      <Footer />
    </main>
  );
}
