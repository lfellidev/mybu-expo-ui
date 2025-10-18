import type { StyleProp, ViewStyle } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

type IconType = 
	"Ionicons"
  | "MaterialCommunity"
  | "Material"
  | "FontAwesome"
  | "Feather"
  | "AntDesign";

	type IconNameType = 
	keyof typeof Ionicons.glyphMap |
	keyof typeof MaterialIcons.glyphMap |
	keyof typeof MaterialCommunityIcons.glyphMap |
	keyof typeof FontAwesome.glyphMap |
	keyof typeof Feather.glyphMap |
	keyof typeof AntDesign.glyphMap

export type IconTypes = {
  type?: IconType;
  name: IconNameType;
  size: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  disabled?: boolean;
	skeleton?: boolean;
}