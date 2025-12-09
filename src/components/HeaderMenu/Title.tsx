import React from "react";
import Text from "../Text";
import { useTheme } from "../ThemeProvider";
import type { TitleTypes } from "./types";

const Title: React.FC<TitleTypes>  = (props) => {
	const theme = useTheme();
	return (
		<Text
			style={[
				{
					fontSize: theme.headerMenu.fontSize,
					color: props.color || theme.headerMenu.color,
					fontWeight: 700,
					},
					props.color ? { color: props.color } : null,
			]}
		>
			{props.text}
		</Text>
	);
}

export default Title;