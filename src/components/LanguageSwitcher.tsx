import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isAnimating, setIsAnimating] = useState(false);
  
  const toggleLanguage = () => {
    setIsAnimating(true);
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={toggleLanguage}
        className="relative outline-none focus:outline-none"
        aria-label={`Switch to ${i18n.language === 'en' ? 'French' : 'English'} language`}
      >
        <div className="w-24 h-12 relative bg-gray-900 border-4 border-gray-700 rounded-md overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-3 opacity-20">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="border border-gray-800"></div>
            ))}
          </div>
          
          <div className="flex justify-between items-center h-full px-1 relative">
            <span className={`text-xs font-bold ${i18n.language === 'en' ? 'text-white' : 'text-gray-500'}`}>EN</span>
            <span className={`text-xs font-bold ${i18n.language === 'fr' ? 'text-white' : 'text-gray-500'}`}>FR</span>
          </div>
          
          <div 
            className={`absolute top-1 h-6 w-8 transition-all duration-300 ease-in-out ${
              i18n.language === 'en' ? 'left-1' : 'left-11'
            } ${isAnimating ? 'translate-y-px' : ''}`}
          >
       
            <div className="h-full w-full bg-pink-600 border-2 border-pink-800 rounded relative overflow-hidden">
    
              <div className="absolute top-0 left-0 w-1 h-1 bg-pink-300"></div>
              <div className="absolute bottom-1 right-1 w-2 h-1 bg-pink-800"></div>
            </div>
          </div>
        </div>
      </button>
      

      <div className="mt-2 text-xs font-mono text-gray-400">
        {i18n.language === 'en' ? 'ENGLISH' : 'FRENCH'}
      </div>
    </div>
  );
};

export default LanguageSwitcher;