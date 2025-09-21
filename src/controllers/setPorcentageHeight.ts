import {Dimensions} from 'react-native';

export const setPorcentageHeight = (value:number) => {
  const height = Dimensions.get('window').height;
  return (height* value) / 100;
};
