import type { ReactNode } from "react";
import type { ViewStyle, TextStyle, StyleProp} from "react-native";

type AlertProps = {
	type: "success" | "danger" | "info";
	visible: boolean;
	text: string;
};

type BottomSheetButton = {
	onPress: () => void;
	label: string;
	style?: StyleProp<ViewStyle>;
	labelStyle?: StyleProp<TextStyle>;
};

type BottomSheetProps = {
	visible: boolean;
	onClose: () => void;
	buttons: {
		primary: BottomSheetButton;
		secondary: BottomSheetButton;
	};
};

type HeaderProps = {
	title: string;
	onPress?: () => void;
	style?: StyleProp<ViewStyle>;
	titleStyle?: StyleProp<TextStyle>;
	color?: string;
};

export type ContainerTypes = {
	children?: ReactNode;
	modal?: ReactNode;
	header?: HeaderProps;
	alert?: AlertProps;
	statusbar?: boolean;
	scrollable?: boolean;
	paddingTop?: number;
	paddingBottom?: number;
	viewStyle?: StyleProp<ViewStyle>;
	text?: string;
	bottomSheet?: BottomSheetProps;
	style?: StyleProp<ViewStyle>;
	noBackHandler?: boolean;
};
