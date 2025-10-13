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

const TextComponent: React.FC<TextComponentTypes> = (props) => {
	const [fontsLoaded] = useFonts({
		DinNextRound: dinNextRoundPath,
		Connectcut: connectcutPath,
		FeatherBold: featherBoldPath,
		Default400: default400Path,
		Inter400: inter400Path,
		Poppins400: poppins400Path,
	});

	useEffect(() => {
		if (!fontsLoaded) {
			console.log("Fontes ainda carregando...");
		} else {
			console.log("Fontes carregadas:", fontsLoaded);
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}


	const getFontFamily = (fontFamily: string | undefined) => {
		console.log("fontFamily prop:", fontFamily);
		switch (fontFamily) {
			case "DIN Next Rounded":
				return "DinNextRound";
			case "Feather Bold":
				return "FeatherBold";
			case "Connecticut":
				return "Connectcut";
			case "Inter":
				return "Inter400";
			case "Poppins":
				return "Poppins400";
			default:
				return "Default400";
		}
	};

	return (
		<Text
			style={
			props.fontFamily?
			[		
				{	fontFamily: getFontFamily(props.fontFamily) },
				props.style, 
			]: props.style
		}
		>
			{props.children}
		</Text>
	);
};

export default TextComponent;
