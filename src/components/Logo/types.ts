import type { ImageSourcePropType } from "react-native";

export type LogoProps = {
	width: number;
	height: number;
	resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center";
	onPress?: () => void;
	src: ImageSourcePropType;
};

export type ContainerProps = {
	children?: React.ReactNode;
	onPress?: () => void;
};