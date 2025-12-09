
import type { ViewStyle, StyleProp } from 'react-native';

export type CheckboxTypes = {
    label?: string;
    checked: boolean;
    onChange: (value: boolean) => void;
		errorMessage?: string;
		style?: StyleProp<ViewStyle>;
		disabled?: boolean;
		skeleton?: boolean;
};