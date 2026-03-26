import Header from '../components/Header';
import Footer from '../components/Footer';
import ScheduleCalendar from '../components/ScheduleCalendar';

export default function SchedulePage() {
  return (
    <main>
      <Header />
      <div style={{ height: '140px' }}></div>
      <ScheduleCalendar />
      <Footer />
    </main>
  );
}
