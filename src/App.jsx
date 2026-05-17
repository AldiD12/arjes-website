import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TourDetailPage from './pages/TourDetailPage';
import CollectionPage from './pages/CollectionPage';
import PlanYourTripPage from './pages/PlanYourTripPage';
import OurStandardPage from './pages/OurStandardPage';
import JournalPage from './pages/JournalPage';
import JournalArticlePage from './pages/JournalArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  const { i18n } = useTranslation();

  return (
    <div className="app" key={i18n.language}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tours/:slug" element={<TourDetailPage />} />
        <Route path="/collections/:category" element={<CollectionPage />} />
        <Route path="/plan-your-trip" element={<PlanYourTripPage />} />
        <Route path="/our-standard" element={<OurStandardPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/journal/:slug" element={<JournalArticlePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
