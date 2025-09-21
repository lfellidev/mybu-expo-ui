import React, { useEffect } from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";

import type { TextComponentTypes } from "./types";
import dinNextRoundPath from "../../assets/fonts/DinNextRound.ttf";
import connectcutPath from "../../assets/fonts/Connecticut.ttf";
import featherBoldPath from "../../assets/fonts/FeatherBold.ttf";
import inter400Path from "../../assets/fonts/inter/inter400.ttf";
import poppins400Path from "../../assets/fonts/poppins/poppins400.ttf";
import default400Path from "../../assets/fonts/default/default400.otf";
import { useTheme } from "../ThemeProvider";


const TextComponent: React.FC<TextComponentTypes> = (props) => {
const theme = useTheme();
	const [fontsLoaded] = useFonts({
		DinNextRound: dinNextRoundPath,
		Connectcut: connectcutPath,
		FeatherBold: featherBoldPath,
		Default400: default400Path,
		Inter400: inter400Path,
		Poppins400: poppins400Path,
	});

	

	useEffect(() => {}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<Text
			style={[{
				fontFamily:
					props.fontFamily === "DIN Next Rounded"
					? "DinNextRound"
					: props.fontFamily === "Feather Bold"
					? "FeatherBold"
					: props.fontFamily === "Connecticut"
					? "Connectcut"
					: props.fontFamily === "Inter"
					? "Inter400"
					: props.fontFamily === "Poppins"
					? "Poppins400"
					: "Default400",
			},
			{
				fontSize: theme.text.fontSize,
				color: theme.text.color,
				fontWeight: theme.text.fontWeight?.toString() as any
			},


			
				props.style,
			]}
		>
			{props.children}
		</Text>
	);
};

export default TextComponent;
