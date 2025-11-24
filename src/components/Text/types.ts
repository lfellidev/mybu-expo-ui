import type { StyleProp, TextStyle } from 'react-native';

export type TextComponentTypes = {
	children: React.ReactNode;
	style?: StyleProp<TextStyle>; 
	family?: 'beVietnamPro' | 'inter' | 'lexend' | 'nunito' | 'poppins' | 'quicksand' | 'roboto' | 'sora';
	weight?: 100 | 300 | 400 | 500 | 600 |700;
	skeleton?: boolean;
};