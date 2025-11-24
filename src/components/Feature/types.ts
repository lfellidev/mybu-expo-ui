import type { ViewStyle, StyleProp } from 'react-native';

type FeatureItem = {
	icon?: "yes" | "no";
	text: string;
}

export type FeatureProps = {
	items: FeatureItem[];
	style?:  StyleProp<ViewStyle>;
	skeleton?: number;
}