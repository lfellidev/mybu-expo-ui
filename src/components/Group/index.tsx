import React from "react";
import { View } from "react-native";
import type { ViewStyle, StyleProp } from "react-native";

import { useTheme } from "../ThemeProvider";
import { setPorcentageHeight } from "../../controllers/setPorcentageHeight";

type Props = {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
	type?: "input" | "button";
};

const GroupComponent: React.FC<Props> = (props): React.JSX.Element => {
	const theme = useTheme();

	return (
		<View 
			style={
				props.type === "input" ?
				[{
					paddingRight: theme.group.paddingRight,
					paddingBottom: theme.group.paddingBottom,
					paddingLeft: theme.group.paddingLeft,
					paddingTop: setPorcentageHeight(10),
				}]:

				props.type === "button" ?
				[{
					paddingRight: theme.group.paddingRight,
					paddingBottom: theme.group.paddingBottom,
					paddingLeft: theme.group.paddingLeft,
					paddingTop: setPorcentageHeight(15),
				}]:

				[{
				paddingRight: theme.group.paddingRight,
				paddingBottom: theme.group.paddingBottom,
				paddingLeft: theme.group.paddingLeft,
				paddingTop: theme.group.paddingTop,
			}, 
			props.style,
		]}>
			{props.children}
		</View>
	);
}

export default GroupComponent;