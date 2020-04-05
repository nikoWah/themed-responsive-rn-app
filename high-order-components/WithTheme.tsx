import React, {Dispatch, SetStateAction, useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContextProvider';
import {themes, ThemeScheme} from '../themes/themes';

export type ThemeProps = {
  theme: any;
  setTheme: Dispatch<SetStateAction<ThemeScheme>>;
};

export const withTheme = (Component: any) => {
  return (props: any) => {
    const {theme, setTheme} = useContext(ThemeContext);

    return <Component {...props} theme={themes[theme]} setTheme={setTheme} />;
  };
};
