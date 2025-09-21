import React, { useState } from "react";
import { View, TextInput } from "react-native";
import type { StyleProp, TextStyle, ViewStyle } from "react-native";
import { useTheme } from "../ThemeProvider";
import styles from "./styles";
import Text from "../Text";

type Props = {
	style?: StyleProp<TextStyle>;
	onChangeText: (text: string) => void;
	value: string;
	label: string;
	disabled?: boolean;
	containerStyle?: StyleProp<ViewStyle>;
	labelStyle?: StyleProp<TextStyle>;
	showLabel?: boolean;
	required?: boolean;
	errorMessage?: boolean;
	height?: number; 
};

const TextAreaComponent: React.FC<Props> = (props) => {
	const theme = useTheme();
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	const errorBorderStyle = [
		{
			borderColor: theme.input.errorBorder,
			borderWidth: 2,
		},
	];

	return (
		<>
			{
				<Text
					style={[
						styles.label,
						{
							color: theme.input.labelColor,
							fontSize: theme.input.labelSize,
						},

						props.labelStyle,
					]}
				>
					{props.showLabel && props.value.length > 0 ? props.label + ":" : null}
					{props.required ? "*" : null}
				</Text>
			}
			<View
				style={[
					{
						backgroundColor: theme.input.backgroundColor,
						borderRadius: theme.input.borderRadius,

						borderColor: isFocused
							? theme.input.borderColorFocus
							: theme.input.borderColor,
					},
					{
						backgroundColor: isFocused
							? theme.input.backgroundColorFocus
							: theme.input.backgroundColor,
					},
					props.errorMessage ? errorBorderStyle : null,
					props.containerStyle,
					{ height: props.height ||100 }, 
				]}
			>
				<TextInput
					onChangeText={props.onChangeText}
					value={props.value}
					placeholder={props.label}
					editable={!props.disabled}
					selectionColor="#666"
					autoCapitalize="none"
					autoComplete="off"
					autoCorrect={false}
					onFocus={handleFocus}
					onBlur={handleBlur}
					style={[props.style]}
					multiline
					maxLength={1000}
				/>
			</View>
		</>
	);
};

export default TextAreaComponent;
