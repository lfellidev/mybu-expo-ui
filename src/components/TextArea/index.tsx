import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import type { StyleProp, TextStyle, ViewStyle } from "react-native";
import { useTheme } from "../ThemeProvider";
import styles from "./styles";


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
	placeholder?: string;
	maxLength?: number;
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
		<View style={[styles.container, props.containerStyle]}>
			{
				<Text
					style={[
						styles.label,
						{
							color: theme.input.labelColor,
							fontSize: theme.input.labelSize,
						},
						props.labelStyle,
						isFocused && { color: theme.input.borderColorFocus },
					]}
				>
					{props.showLabel ? props.label + ":" : null}
					{props.required ? "*" : null}
				</Text>
			}
			<View
				style={[
					{
						backgroundColor: isFocused
							? theme.input.backgroundColorFocus
							: theme.input.backgroundColor,
						borderRadius: theme.input.borderRadius,
						borderColor: isFocused
							? theme.input.borderColorFocus
							: theme.input.borderColor,
						borderWidth: isFocused ? 2 : 1,
					},
					props.errorMessage ? errorBorderStyle : null,
					{ height: props.height || 100 },
				]}
			>
				<TextInput
					onChangeText={props.onChangeText}
					value={props.value}
					placeholder={props.placeholder}
					editable={!props.disabled}
					selectionColor="#666"
					autoCapitalize="none"
					autoComplete="off"
					autoCorrect={false}
					onFocus={handleFocus}
					onBlur={handleBlur}
					style={[props.style, { padding: 10, textAlignVertical: "top" }]}
					multiline
					maxLength={props.maxLength ||1000}
				/>
			</View>
		</View>
	);
};

export default TextAreaComponent;
