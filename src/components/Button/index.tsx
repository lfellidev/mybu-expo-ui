import React, { useState, useRef, useEffect } from "react";
import {
	Pressable,
	ActivityIndicator,
	Animated,
} from "react-native";
import type { LayoutChangeEvent } from "react-native";
import type { ViewStyle } from "react-native";
import Text from "../Text";
import { useTheme } from "../ThemeProvider";
import { setResponsiveSize } from "../../controllers/setResponsiveSize";
import type { ButtonTypes } from "./types";

const ButtonComponent: React.FC<ButtonTypes> = (props) => {
	const theme = useTheme();

	const [dims, setDims] = useState({ width: 0, height: 0 });
	const [countdown, setCountdown] = useState(props.delay || 0);
	const rippleScale = useRef(new Animated.Value(0)).current;
	const rippleOpacity = useRef(new Animated.Value(0)).current;

	const isRippleEnabled = props.type !== "tertiary" && props.type !== "link";

	useEffect(() => {
		if (countdown > 0) {
			const timer = setInterval(() => {
				setCountdown((prev) => prev - 1);
			}, 1000);

			return () => clearInterval(timer);
		}
		return undefined;
	}, [countdown]);

	const commonButtonStyles = {
		borderRadius: theme.button.borderRadius,
		marginTop: theme.button.marginTop,
		marginRight: theme.button.marginRight,
		marginBottom: theme.button.marginBottom,
		marginLeft: theme.button.marginLeft,
		padding: setResponsiveSize(16),
		overflow: "hidden" as "hidden",
		height: setResponsiveSize(16 * 3) + theme.text.fontSize,
		justifyContent: "center" as ViewStyle["justifyContent"],
		alignItems: "center" as ViewStyle["alignItems"],
	};

	const primaryButtonStyle = {
		backgroundColor: theme.button.primary.backgroundColor,
		borderBottomColor: theme.button.primary.borderBottomColor,
		borderTopWidth: theme.button.primary.borderTopWidth,
		borderRightWidth: theme.button.primary.borderRightWidth,
		borderBottomWidth: theme.button.primary.borderBottomWidth,
		borderLeftWidth: theme.button.primary.borderLeftWidth,
	};

	const primaryTextStyle = {
		color: theme.button.primary.textColor,
	};

	const secondaryButtonStyle = {
		backgroundColor: theme.button.secondary.backgroundColor,
	};

	const secondaryTextStyle = {
		color: theme.button.secondary.textColor,
	};

	const tertiaryButtonStyle = {
		backgroundColor: theme.button.tertiary.backgroundColor,
	};

	const tertiaryTextStyle = {
		color: theme.button.tertiary.textColor,
	};

	const linkButtonStyle = {
		backgroundColor: theme.button.link.backgroundColor,
	};

	const linkTextStyle = {
		color: theme.button.link.textColor,
	};

	const handlePressIn = () => {
		if (!isRippleEnabled) return;
		rippleScale.setValue(0);
		rippleOpacity.setValue(1);
		Animated.parallel([
			Animated.timing(rippleScale, {
				toValue: 1,
				duration: 400,
				useNativeDriver: true,
			}),
			Animated.timing(rippleOpacity, {
				toValue: 0,
				duration: 400,
				useNativeDriver: true,
			}),
		]).start();
	};

	const onLayout = (e: LayoutChangeEvent) => {
		const { width, height } = e.nativeEvent.layout;
		setDims({ width, height });
	};

	const rippleSize = Math.max(dims.width, dims.height) * 2;

	const getRippleColor = () => {
		if (props.type === "secondary") {
			return theme.button.secondary.rippleColor;
		} else if (props.type === "primary") {
			return theme.button.primary.rippleColor;
		} else {
			return theme.button.primary.rippleColor;
		}
	};

	const getLoadingColor = () => {
		return props.type === "secondary"
			? theme.button.secondary.ActivityIndicatorColor
			: theme.button.primary.ActivityIndicatorColor;
	};

	return (
		<Pressable
			onLayout={onLayout}
			onPressIn={handlePressIn}
			onPress={props.onPress}
			disabled={props.disabled || countdown > 0 || props.loading}
			style={[
				commonButtonStyles,
				props.type === "secondary"
					? secondaryButtonStyle
					: props.type === "tertiary"
					? tertiaryButtonStyle
					: props.type === "link"
					? linkButtonStyle
					: primaryButtonStyle,
				props.style,
			]}
		>
			{isRippleEnabled && (
				<Animated.View
					pointerEvents="none"
					style={[
						{
							width: rippleSize,
							height: rippleSize,
							borderRadius: rippleSize / 2,
							backgroundColor: getRippleColor(),
							top: dims.height / 2 - rippleSize / 2,
							left: dims.width / 2 - rippleSize / 2,
							opacity: rippleOpacity,
							transform: [{ scale: rippleScale }],
							position: "absolute",
						},
					]}
				/>
			)}
			{!props.loading ? (
				<Text
					style={[
						{		
							
							textAlign: "center",
							fontWeight: "bold"
						 },
						props.type === "secondary"
							? secondaryTextStyle
							: props.type === "tertiary"
							? tertiaryTextStyle
							: props.type === "link"
							? linkTextStyle
							: primaryTextStyle,
						props.labelStyle,
					]}
				>
					{props.label} {countdown > 0 ? ` (${countdown})` : null}
				</Text>
			) : (
				<ActivityIndicator color={getLoadingColor()} />
			)}
		</Pressable>
	);
};

export default ButtonComponent;
