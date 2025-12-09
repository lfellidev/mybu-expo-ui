import React from "react";
import { View } from "react-native";
import Icon from "../Icon";
import styles from "./styles";
import { setFontScale } from "../../controllers/setFontScale";
import { useTheme } from "../ThemeProvider";
import type { HeaderMenuTypes } from "./types";
import HeadeContainer from "./HeaderContainer";
import Title from "./Title";

const HeadeMenu: React.FC<HeaderMenuTypes> = (props): React.JSX.Element => {
	const theme = useTheme();
	
	if (typeof props.onPress == "function") {
		return (
			<HeadeContainer>
				<View style={styles.col1}>
					<Icon
						name="arrow-left"
						size={setFontScale(30)}
						type="MaterialCommunity"
						onPress={props.onPress}
						color={props.color || theme.headerMenu.color}
					/>
				</View>
				<View style={[styles.col2]}>
					<Title text={props.title} color={props.color}  />
				</View>
			</HeadeContainer>
		);
	} else {
		return (
			<HeadeContainer>
					<Title text={props.title} color={props.color}  />
			</HeadeContainer>
		);
	}
};

export default HeadeMenu;
