import type { StyleProp, TextStyle, ViewStyle } from "react-native";

export type ListItemProps = {
	data: { label: string; onPress: () => void, icon?: React.JSX.Element }[];
	style?: StyleProp<ViewStyle>;
	labelStyle?: StyleProp<TextStyle>;
};