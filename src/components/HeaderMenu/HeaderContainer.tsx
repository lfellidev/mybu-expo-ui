import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { useTheme } from "../ThemeProvider";
import type { HeaderContainerTypes } from "./types";


const HeadeContainer: React.FC<HeaderContainerTypes> = (props) => {
	const theme = useTheme();

	return (
		<View
			style={[
						styles.container,
						styles.oneCol,
				{
					backgroundColor: theme.headerMenu.backgroundColor,
					borderBottomColor: theme.headerMenu.borderBottomColor,
					paddingTop: theme.headerMenu.paddingTop,
					paddingBottom: theme.headerMenu.paddingBottom,
					marginBottom: theme.headerMenu.marginBottom,
					},
				props.style,
			]}
		>
			{props.children}
		</View>
	);
}

export default HeadeContainer;