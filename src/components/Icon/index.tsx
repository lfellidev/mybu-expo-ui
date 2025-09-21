import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import type { IconTypes } from "./types";


const IconComponent: React.FC<IconTypes> = (props) => {
  const Icon =
    props.type === "MaterialCommunity"
      ? MaterialCommunityIcons
      : props.type === "Material"
      ? MaterialIcons
      : props.type === "FontAwesome"
      ? FontAwesome
      : props.type === "Feather"
      ? Feather
      : props.type === "AntDesign"
      ? AntDesign
			: props.type==="Ionicons"
      ? Ionicons:
			MaterialCommunityIcons

  const iconElement = (
    <Icon size={props.size} name={props.name as any} color={props.color} style={props.style} />
  );

  return props.onPress ? (
    <TouchableOpacity disabled={props.disabled} onPress={props.onPress}>
      {iconElement}
    </TouchableOpacity>
  ) : (
    iconElement
  );
};

export default IconComponent;