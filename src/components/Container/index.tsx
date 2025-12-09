import React, {useEffect} from "react";
import { View, ScrollView, Platform, KeyboardAvoidingView, BackHandler } from "react-native";
import { StatusBar } from "expo-status-bar";
import type { StatusBarStyle } from "expo-status-bar";
import type { ContainerTypes } from "./types";
import Alert from "../Alert";
import BottomSheet from "../BottomSheet";
import HeadeMenu from "../HeaderMenu";
import { useTheme } from "../ThemeProvider";
import { setPorcentageHeight } from "../../controllers/setPorcentageHeight";

const Container: React.FC<ContainerTypes> = (props) => {
	const theme = useTheme();

	useEffect(() => {
		if (props.noBackHandler) {
			const backHandler = BackHandler.addEventListener("hardwareBackPress", () => true);
			return () => backHandler.remove();
		}
		return undefined;
	}, [props.noBackHandler]);

	return (
		<>
			{props.modal}
			{props.header ? (
				<HeadeMenu
					title={props.header.title}
					onPress={props.header.onPress}
					style={props.header.style}
					titleStyle={props.header.titleStyle}
				/>
			) : null}

			{props.alert && (
				<Alert
					type={props.alert.type}
					visible={props.alert.visible}
					text={props.alert.text}
				/>
			)}

			<View
				style={[
					{ flex: 1, backgroundColor: theme.backgroundColor },
					props.style,
				]}
			>
				{props.statusbar ? (
					<StatusBar
						style={theme.statusbar.barStyle as StatusBarStyle}
						backgroundColor={theme.statusbar.backgroundColor}
					/>
				) : null}
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : undefined}
					style={{ flex: 1 }}
				>
					{props.scrollable ? (
						<ScrollView>
							{props.children}
							<View 
								style={{
									height: setPorcentageHeight(10),
									width: '100%',
								}}
							/>
						</ScrollView>
					) : (
						props.children
					)}
				</KeyboardAvoidingView>
			</View>

			{props.bottomSheet && props.bottomSheet.visible ? (
				<BottomSheet
					visible={props.bottomSheet.visible}
					onClose={props.bottomSheet.onClose}
					text={props.text}
					buttons={props.bottomSheet.buttons}
				/>
			) : null}
		</>
	);
};

export default Container;
