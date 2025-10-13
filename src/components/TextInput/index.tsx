import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import type { StyleProp, TextStyle } from "react-native";
import { useTheme } from "../ThemeProvider";
import Icon from "../Icon";

import styles from "./styles";

type TextInputTypes = {
	label: string;
	showLabel?: boolean;
	labelStyle?: StyleProp<TextStyle>;
	value: string;
	onChangeText: (text: string) => void;
	icon: string;
	isPassword?: boolean;
	keyboardType?: "numeric" | "default" | "email-address" | "phone-pad";
	disabled?: boolean;
	style?: StyleProp<TextStyle>;
	containerStyle?: StyleProp<TextStyle>;
	errorMessage?: string;
	required?: boolean;
	placeholder?: string;
};

const TextInputComponent: React.FC<TextInputTypes> = (
	props
): React.JSX.Element => {
	const theme = useTheme();
	const { disabled, value, onChangeText, isPassword, keyboardType } =
		props;
	const [secureTextEntry, setSecureTextEntry] = useState(isPassword);
	const [isFocused, setIsFocused] = useState(false);
	const errorBorderStyle = [
		{
			borderColor: theme.input.errorBorder,
			borderWidth: 2,
		},
	];

	return (
		<View style={[
			styles.container, 
		props.containerStyle]}>
			<View
				style={{
					height: theme.input.labelSize + (theme.input.labelSize/2) ,
				}}
			>
				{props.showLabel ? (
					<Text
						style={[
							styles.label,
							{
								color: theme.input.labelColor,
								fontSize: theme.input.labelSize,
								fontWeight: "600",
								
							},
							props.labelStyle,
							isFocused && { color: theme.input.borderColorFocus },
						]}
					>
						{props.label}:{props.required ? "*" : null}
					</Text>
				) : null}
			</View>
			<View
				style={[
					styles.inputGroup,
					{
						backgroundColor: theme.input.iconBackground,
						borderColor: theme.input.borderColor,
						borderRadius: theme.input.borderRadius,
					},
					isFocused && {
						borderColor: theme.input.borderColorFocus,
						borderWidth: 2,
					},
					props.errorMessage ? errorBorderStyle : null,
				]}
			>
				<Icon
					name={props.icon as any}
					size={24}
					color={theme.input.iconColor}
					style={styles.icon}
				/>
				<TextInput
					editable={!disabled}
					keyboardType={keyboardType}
					placeholder={props.placeholder}
					value={value}
					onChangeText={onChangeText}
					secureTextEntry={secureTextEntry}
					autoCapitalize="none"
					autoComplete="off"
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					style={[
						styles.textInput,
						{
							borderRadius: theme.input.borderRadius,
							height: theme.input.height,
							backgroundColor: theme.input.backgroundColor,
							color: theme.input.color,
							paddingTop: theme.input.paddingTop,
							paddingRight: theme.input.paddingRight,
							paddingBottom: theme.input.paddingBottom,
							paddingLeft: theme.input.paddingLeft,
							textDecorationLine: "none",
						},
						props.style,
					]}
				/>
				{isPassword ? (
					<Icon
						name={(secureTextEntry ? "eye-off" : "eye") as any}
						type="MaterialCommunity"
						style={styles.passwordIcon}
						size={theme.input.size}
						color={theme.input.iconColor}
						onPress={() => setSecureTextEntry(!secureTextEntry)}
					/>
				) : null}
			</View>
		</View>
	);
};

export default TextInputComponent;
