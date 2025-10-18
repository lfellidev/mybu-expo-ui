import type { StyleProp, ViewStyle  } from "react-native";
import type { AnimationObject } from "lottie-react-native";

export type LottieTypes = {
	src?: string | AnimationObject | { uri: string };
	name?: string;
	loop?: boolean;
	width: number;
	height: number;
	style?: StyleProp<ViewStyle>;
	autoPlay?: boolean;
	skeleton?: boolean;
	autoplay?: boolean;
};
