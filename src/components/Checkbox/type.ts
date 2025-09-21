
import type { ViewStyle, StyleProp } from 'react-native';

export type CheckboxTypes = {
    label?: string;
    checked: boolean;
    onChange: (value: boolean) => void;
		errorMessage?: boolean;
		style?: StyleProp<ViewStyle>;
};