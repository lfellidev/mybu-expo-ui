import type { StyleProp, TextStyle } from 'react-native';


export type CountdownTypes = {
	delay: number; 
	radius?: number;
	strokeWidth?: number;
	numberStyle?: StyleProp<TextStyle>
	skeleton?: boolean;
}
