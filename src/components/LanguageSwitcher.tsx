import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import British from "../assets/british.png";
import French from "../assets/french.png";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage); 
    } else {

      localStorage.setItem('language', i18n.language);
    }

    const handleBeforeUnload = () => {
      localStorage.removeItem('language');
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [i18n]);

  const toggleLanguage = () => {
    setIsAnimating(true);
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);

    localStorage.setItem('language', newLang);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center opacity-90 select-none">
      <button
        onClick={toggleLanguage}
        className="relative outline-none focus:outline-none transform hover:scale-105 transition-transform duration-300"
        aria-label={`Switch to ${i18n.language === 'en' ? 'French' : 'English'} language`}
      >
        <div className="w-[5rem] h-[2.2rem] relative bg-gray-100 rounded-full flex items-center justify-between px-4
                      shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_2px_2px_5px_rgba(70,70,70,0.12)]
                      hover:shadow-[inset_-1px_-1px_3px_rgba(255,255,255,0.7),inset_1px_1px_3px_rgba(70,70,70,0.12)]
                      transition-all duration-300">
          <span 
            className={`text-sm font-bold transition-all duration-300 z-10
                      ${i18n.language === 'en' 
                        ? 'text-gray-800 transform scale-110' 
                        : 'text-gray-400 transform scale-90'}`}
          >
            
          </span>
          
        
          <div 
            className={`absolute h-[2.2rem] w-[2.2rem] rounded-full bg-white 
                      transform transition-all duration-500 ease-in-out flex items-center justify-center
                      shadow-[4px_4px_8px_rgba(70,70,70,0.12),-4px_-4px_8px_rgba(255,255,255,0.9)]
                      ${i18n.language === 'en' ? 'left-1' : 'left-[calc(100%-2.4rem)]'}
                      ${isAnimating ? 'scale-90' : 'scale-100 hover:scale-105'}`}
          >
         
            <div className={`w-[1.8rem] h-[1.8rem] rounded-full overflow-hidden transform transition-all duration-300
                          ${isAnimating ? 'rotate-180' : ''}`}>
              {i18n.language === 'en' ? (
                <div className="w-full h-full relative animate-fade-in">
                  <div className="flex h-full shadow-inner">
                 <img src={British} alt="English" />
                  </div>
                </div>
              ) : (
                <div className="w-full h-full relative animate-fade-in">
                  <div className="flex h-full shadow-inner">
                 <img src={French} alt="French" />
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <span 
            className={`text-sm font-bold transition-all duration-300 z-10
                      ${i18n.language === 'fr' 
                        ? 'text-gray-800 transform scale-110' 
                        : 'text-gray-400 transform scale-90'}`}
          >
           
          </span>
        </div>
      </button>
      
      <div className={`mt-2 text-xs font-mono text-gray-500 tracking-wider transition-all duration-300
                    ${isAnimating ? 'opacity-0 transform -translate-y-1' : 'opacity-100'}`}>
        {i18n.language === 'en' ? 'ENGLISH' : 'FRENCH'}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
