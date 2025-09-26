import type {StyleProp, ViewStyle } from "react-native";

export type AlertTypes = {
  text: string;
  type?: 'success' | 'danger' | 'info';
  visible: boolean;
	style?: StyleProp<ViewStyle>;
}