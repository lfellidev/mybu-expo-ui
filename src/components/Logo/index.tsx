import React from "react";
import {
	View,
	Image,
	TouchableWithoutFeedback,
} from "react-native";

import type { LogoProps, ContainerProps } from "./types";

const Logo: React.FC<LogoProps> = (props): React.JSX.Element => {
	const Container: React.FC<ContainerProps> = (props) => {
		if (props.onPress) {
			return (
				<TouchableWithoutFeedback onPress={props.onPress}>
					{props.children}
				</TouchableWithoutFeedback>
			);
		} else {
			return props.children;
		}
	};

	return (
		<View style={{ alignItems: "center" }}>
			<Container onPress={props.onPress}>
				<Image
					source={props.src}
					style={{
						width: props.width,
						height: props.height,
						resizeMode: props.resizeMode || "contain",
					}}
				/>
			</Container>
		</View>
	);
};

export default Logo;
