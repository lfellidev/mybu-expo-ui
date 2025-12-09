import type { TextStyle, ViewStyle  } from "react-native";

export type InputSpinnerTypes = {
	increaseOnPress: () => void;
	decreaseOnPress: () => void;
	value: number;
	disabled?: boolean;
	buttonStyle?: ViewStyle;
	buttonText?: TextStyle;
	valueStyle?: TextStyle;
	skeleton?: boolean;
	label?: string
};