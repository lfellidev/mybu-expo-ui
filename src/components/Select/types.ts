import type { StyleProp,TextStyle, ViewStyle} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

type IconNameTypes =
    | keyof typeof Ionicons.glyphMap
    | keyof typeof MaterialCommunityIcons.glyphMap
    | keyof typeof MaterialCommunityIcons.glyphMap
    | keyof typeof FontAwesome.glyphMap
    | keyof typeof Feather.glyphMap
    | keyof typeof AntDesign.glyphMap
    | keyof typeof MaterialIcons.glyphMap;

export type SelectItemType = {
    label: string;
    onPress?: () => void;
    [key: string]: any;
};

export type Props = {
    icon: IconNameTypes;
    label: string;
    onClose?: () => void;
    onPress?: () => void;
    children?: React.JSX.Element;
    containerStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    showLabel?: boolean;
    value: string;
    data?: SelectItemType[];
    renderItem?: () => React.JSX.Element;
		itemTextStyle?: StyleProp<TextStyle>;
		disabled?: boolean;
		errorMessage?: string;
		skeleton?: boolean;
};
