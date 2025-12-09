import type { StyleProp, ViewStyle, TextStyle } from "react-native";

export interface BottomSheetTypes {
  visible: boolean;
  onClose: () => void;
  text?: string;
  children?: React.ReactNode;
  buttons?: {
    primary?: {
      label?: string;
      onPress?: () => void;
      style?: StyleProp<ViewStyle> ,
      labelStyle?: StyleProp<TextStyle> ,
    };
    secondary?: {
      label?: string;
      onPress?: () => void;
      style?: StyleProp<ViewStyle>,
      labelStyle?: StyleProp<TextStyle>,
    };
  };
}