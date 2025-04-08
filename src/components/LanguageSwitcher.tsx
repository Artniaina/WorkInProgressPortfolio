import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2 ">
      <button 
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-pink-500 text-white' : 'bg-gray-800 text-gray-300'}`}
      >
        EN
      </button>
      <button 
        onClick={() => changeLanguage('fr')}
        className={`px-2 py-1 rounded ${i18n.language === 'fr' ? 'bg-pink-500 text-white' : 'bg-gray-800 text-gray-300'}`}
      >
        FR
      </button>

    </div>
  );
};

export default LanguageSwitcher;