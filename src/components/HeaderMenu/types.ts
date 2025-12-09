import type { StyleProp, ViewStyle, TextStyle } from "react-native";

export type HeaderMenuTypes = {
	title: string;
	onPress?: () => void;
	style?: StyleProp<ViewStyle>;
	titleStyle?: StyleProp<TextStyle>;
	color?: string;
};

export type HeaderContainerTypes = {
	children: React.ReactNode;
	style?: StyleProp<ViewStyle>;
};

export type TitleTypes = {
	text: string;
	color?: string;
};
