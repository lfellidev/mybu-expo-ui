import {Dimensions} from 'react-native';

export const setPorcentageWidth = (value:number) => {
  const width = Dimensions.get('window').width;
  return (width * value) / 100;
};
