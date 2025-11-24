import React, { useEffect, useRef } from "react";
import { TouchableOpacity, Animated } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import type { IconTypes } from "./types";
import { useTheme } from "../ThemeProvider";

const IconComponent: React.FC<IconTypes> = (props) => {
  const fadeAnim = useRef(new Animated.Value(0.5)).current;
	const theme = useTheme();

  useEffect(() => {
    if (props.skeleton) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 0.5,
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [props.skeleton, fadeAnim]);

  if (props.skeleton) {
    return (
      <Animated.View
        style={{
          width: props.size,
          height: props.size,
          backgroundColor: theme.skeleton.color || "#e0e0e0",
          opacity: fadeAnim,
          borderRadius: props.size / 2, 
        }}
      />
    );
  }

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
      : props.type === "Ionicons"
      ? Ionicons
      : MaterialCommunityIcons

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