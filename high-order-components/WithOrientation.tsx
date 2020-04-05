import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

const getOrientation = () => {
  if (Dimensions.get('window').width < Dimensions.get('window').height) {
    return 'portrait';
  } else {
    return 'landscape';
  }
};

export const withOrientation = (Component: any) => {
  return (props: any) => {
    const [orientation, setOrientation] = useState(getOrientation());

    const changeDimensionHandler = () => setOrientation(getOrientation());

    useEffect(() => {
      Dimensions.addEventListener('change', changeDimensionHandler);
      return () => {
        Dimensions.removeEventListener('change', changeDimensionHandler);
      };
    }, []);

    return <Component {...props} orientation={orientation} />;
  };
};
