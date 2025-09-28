import type { StyleProp, TextStyle, ViewStyle } from "react-native";

export type ListItemProps = {
	data: { label: string; onPress: () => void }[];
	style?: StyleProp<ViewStyle>;
	labelStyle?: StyleProp<TextStyle>;
};