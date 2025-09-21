import React from "react";
import { View, TouchableOpacity } from "react-native";
import {useTheme} from "../ThemeProvider";
import Text from "../Text";
import styles from "./styles";
import type { InputSpinnerTypes } from "./types";

const InputSpinnerComponent: React.FC<InputSpinnerTypes> = (props): React.JSX.Element => {
	const theme = useTheme();

	const touchableOpacityStyle = [
		styles.button, 
		{ 
			backgroundColor: theme.inputSpinner.buttonBackgroundColor,
			height: theme.inputSpinner.button.height,
			borderRadius: theme.inputSpinner.button.borderRadius,
			width: theme.inputSpinner.button.width,
		 }, 
		props.buttonStyle,
	];

	const textStyle = [
		styles.buttonText, 
		{ 
			color: theme.inputSpinner.buttonTextColor,
			fontSize: theme.inputSpinner.button.text.fontSize,

			height: theme.inputSpinner.button.text.height,
			width: theme.inputSpinner.button.text.width,
			paddingTop: theme.inputSpinner.button.text.paddingTop,
		 }, 
		props.buttonText,
	];

	const valueStyle = [styles.value, 
		{
			color: theme.inputSpinner.color,
			width: theme.inputSpinner.button.value.width,
			height: theme.inputSpinner.button.value.height,
			paddingTop: theme.inputSpinner.button.value.paddingTop,
		},
		props.valueStyle,
	];

	return(
  <>
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={props.decreaseOnPress}
        style={touchableOpacityStyle}
        disabled={props.disabled}
      >
        <Text style={textStyle}>-</Text>
      </TouchableOpacity>
      <Text style={valueStyle}>{props.value}</Text>
      <TouchableOpacity
        onPress={props.increaseOnPress}
        style={touchableOpacityStyle}
        disabled={props.disabled}
      >
        <Text style={textStyle}>+</Text>
      </TouchableOpacity>
    </View>
  </>
);
}
export default InputSpinnerComponent;
