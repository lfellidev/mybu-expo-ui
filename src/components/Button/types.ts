
import type {
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';

export type ButtonTypes  ={
	label: string;
	onPress: () => void;
	style?: StyleProp<ViewStyle>;
	labelStyle?: StyleProp<TextStyle>;
	type?: "primary" | "secondary" | "tertiary" | "link";
	loading?: boolean;
	delay?: number;
	disabled?: boolean;
	skeleton?: boolean;
	themeStyle?: "default" | "pill";
}

