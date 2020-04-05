import React, {Dispatch, ReactElement, SetStateAction, useState} from 'react';
import {ThemeScheme} from '../themes/themes';

export type ThemeContextProps = {
  theme: ThemeScheme;
  setTheme: Dispatch<SetStateAction<ThemeScheme>>;
};

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: ThemeScheme.BLUE,
  setTheme: () => {},
});

export const ThemeContextProvider = ({children}: {children: ReactElement}) => {
  const [theme, setTheme] = useState(ThemeScheme.BLUE);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
