import React from 'react';

const LanguageToggle = ({ language, setLanguage }) => {
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <button onClick={toggleLanguage} style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
      {language === 'en' ? 'Switch to French' : 'Passer à l\'anglais'}
    </button>
  );
};

export default LanguageToggle;