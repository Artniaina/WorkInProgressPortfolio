import { createContext, useState, useContext, ReactNode } from 'react';

interface NavigationContextType {
    fromClick: boolean;
    setFromClick: (value: boolean) => void;
  }
  
  const NavigationContext = createContext<NavigationContextType>({
    fromClick: false,
    setFromClick: () => {},
  });
   
  export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [fromClick, setFromClick] = useState(false);
  
    return (
      <NavigationContext.Provider value={{ fromClick, setFromClick }}>
        {children}
      </NavigationContext.Provider>
    );
  };
  
  export const useNavigation = () => useContext(NavigationContext);
  