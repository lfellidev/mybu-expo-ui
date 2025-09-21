import React from "react";
import { View, Switch, Text } from "react-native";
import type { ViewStyle } from "react-native";

import styles from "./styles";
import { useTheme } from "../ThemeProvider";

type Props = {
	onValueChange: (value: boolean) => void;
	value: boolean;
	label?: string;
	labelStyle?: ViewStyle;
	disabled?: boolean;
	style?: ViewStyle;
	trackColorFalse: string;
	trackColorTrue: string;
};

const SwitchComponent: React.FC<Props> = (props) => {
	const theme = useTheme();
	return(
	<View style={[styles.container]}>
		<Text style={[styles.label, {
			fontSize: theme.switch.fontSize,
		}]}>{props.label}</Text>
		<Switch
			trackColor={{
				false: props.trackColorFalse || theme.switch.trackColorFalse,
				true: props.trackColorTrue || theme.switch.trackColorTrue,
			}}
			value={props.value}
			disabled={props.disabled}
			style={[
				styles.container, 
				{
					
					marginBottom: theme.switch.marginBottom
				}
			]}
			onValueChange={props.onValueChange}
			thumbColor={
				props.value
					? props.trackColorTrue || theme.switch.thumbColor
					: undefined
			}
		/>
	</View>
);
}

export default SwitchComponent;
