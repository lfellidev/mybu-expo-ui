import React, { useEffect, useRef, useState } from "react";
import { View, Animated, Easing } from "react-native";
import Text from "../Text";
import { Svg, Circle } from "react-native-svg";
import { useTheme } from "../ThemeProvider";
import { formatTime } from "../../controllers/formatTime";
import type { CountdownTypes } from "./types";
import styles from "./styles";

const CountdownComponents: React.FC<CountdownTypes> = (props) => {
	const theme = useTheme();
	const [timeLeft, setTimeLeft] = useState<number>(props.delay);
	const animatedValue = useRef<Animated.Value>(new Animated.Value(0)).current;

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
		}, 1000);

		Animated.timing(animatedValue, {
			toValue: 1,
			duration: props.delay * 1000,
			easing: Easing.linear,
			useNativeDriver: true,
		}).start();

		return () => {
			clearInterval(intervalId);
		};
	}, [props.delay]);

	const radius = props.radius || theme.Countdown.radius;
	const strokeWidth = props.strokeWidth || theme.Countdown.strokeWidth;
	const size = radius * 2 + strokeWidth;
	const circumference = 2 * Math.PI * radius;

	const strokeDashoffset = animatedValue.interpolate({
		inputRange: [0, 1],
		outputRange: [0, circumference],
	});

	return (
		<View style={styles.container}>
			<Svg width={size} height={size}>
				<Circle
					stroke={theme.Countdown.passedTime}
					fill="none"
					cx={size / 2}
					cy={size / 2}
					r={radius}
					strokeWidth={strokeWidth}
				/>
				<AnimatedCircle
					stroke={theme.Countdown.remaningTime}
					fill="none"
					cx={size / 2}
					cy={size / 2}
					r={radius}
					strokeWidth={strokeWidth}
					strokeDasharray={`${circumference} ${circumference}`}
					strokeDashoffset={strokeDashoffset}
				/>
			</Svg>
			<Text 
				style={[
					styles.text,
					{fontSize: theme.Countdown.fontSize, color: theme.Countdown.color}, 
					props.numberStyle
					]}
				>
				{formatTime(timeLeft)}
			</Text>
		</View>
	);
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default CountdownComponents;
