import type { StyleProp, TextStyle } from 'react-native';

export type TextComponentTypes = {
	children: React.ReactNode;
	style?: StyleProp<TextStyle>; 
	fontFamily?: string
};