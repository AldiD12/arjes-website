import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      {['en', 'de', 'sq'].map((lng) => (
        <motion.button
          key={lng}
          onClick={() => changeLanguage(lng)}
          className={`lang-btn ${i18n.language === lng ? 'active' : ''}`}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          {lng.toUpperCase()}
        </motion.button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
