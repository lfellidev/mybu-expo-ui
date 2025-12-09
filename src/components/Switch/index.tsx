import React from "react";
import { View, Switch, Text, Animated } from "react-native";
import type { ViewStyle } from "react-native";

import styles from "./styles";
import { useTheme } from "../ThemeProvider";

type Props = {
    onValueChange: (value: boolean) => void;
    value: boolean;
    label?: string;
    labelStyle?: ViewStyle;
    disabled?: boolean;
    style?: ViewStyle;
    trackColorFalse?: string;
    trackColorTrue?: string;
    skeleton?: boolean;
};

const SwitchComponent: React.FC<Props> = (props) => {
    const theme = useTheme();
    const shimmerAnim = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        if (props.skeleton) {
            const shimmer = Animated.loop(
                Animated.sequence([
                    Animated.timing(shimmerAnim, {
                        toValue: 1,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(shimmerAnim, {
                        toValue: 0,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                ])
            );
            shimmer.start();
            return () => shimmer.stop();
        }
        return () => {}; 
    }, [props.skeleton, shimmerAnim]);

    if (props.skeleton) {
        return (
            <View style={[styles.container]}>
                <Animated.Text
                    style={[
                        styles.label,
                        {
                            fontSize: theme.switch.fontSize,
                            backgroundColor: theme.skeleton.color || "#e0e0e0",
                            opacity: shimmerAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0.5, 1],
                            }),
                            width: '60%', 
                            height: 20, 
                        },
                    ]}
                />
                <Animated.View
                    style={[
                        styles.container,
                        {
                            backgroundColor: theme.skeleton.color || "#e0e0e0",
                            opacity: shimmerAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0.5, 1],
                            }),
                            width: 50,
                            height: 30, 
                            marginBottom: theme.switch.marginBottom,
                            borderRadius: 15,
                        },
                    ]}
                />
            </View>
        );
    }

    return(
    <View style={[styles.container]}>
        <Text style={[styles.label, {
            fontSize: theme.switch.fontSize,
        }]}>{props.label}</Text>
        <Switch
            trackColor={{
                false: props.trackColorFalse || theme.switch.trackColorFalse,
                true: props.trackColorTrue || theme.switch.trackColorTrue,
            }}
            value={props.value}
            disabled={props.disabled}
            style={[
                styles.container, 
                {
                    
                    marginBottom: theme.switch.marginBottom
                }
            ]}
            onValueChange={props.onValueChange}
            thumbColor={
                props.value
                    ? props.trackColorTrue || theme.switch.thumbColor
                    : undefined
            }
        />
    </View>
);
}

export default SwitchComponent;
