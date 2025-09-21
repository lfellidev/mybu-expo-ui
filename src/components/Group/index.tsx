import React from "react";
import { View } from "react-native";
import type { ViewStyle, StyleProp } from "react-native";

import { useTheme } from "../ThemeProvider";

type Props = {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

const GroupComponent: React.FC<Props> = (props): React.JSX.Element => {
	const theme = useTheme();

	return (
		<View 
			style={[{
				paddingRight: theme.Group.paddingRight,
				paddingBottom: theme.Group.paddingBottom,
				paddingLeft: theme.Group.paddingLeft,
				paddingTop: theme.Group.paddingTop,
			}, 
			props.style,
		]}>
			{props.children}
		</View>
	);
}

export default GroupComponent;