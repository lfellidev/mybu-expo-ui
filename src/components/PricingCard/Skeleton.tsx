import React, { useRef, useEffect } from "react";
import { View, Animated } from "react-native";
import { setResponsiveSize } from "../../controllers/setResponsiveSize";
import { setPorcentageWidth } from "../../controllers/setPorcentageWidth";
import { setPorcentageHeight } from "../../controllers/setPorcentageHeight";
import { useTheme } from "../ThemeProvider";
import type { SkeletonTypes } from "./types";



const Skeleton: React.FC<SkeletonTypes> = ({ packageType }) => {
    const shimmerAnim = useRef(new Animated.Value(0)).current;
		const theme = useTheme();

    useEffect(() => {
        Animated.loop(
            Animated.timing(shimmerAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            })
        ).start();
    }, [shimmerAnim]);

    const shimmerTranslateX = shimmerAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-setPorcentageWidth(100), setPorcentageWidth(100)],
    });

    const genericButtonStyle = {
        marginBottom: setPorcentageHeight(5),
        paddingVertical: setPorcentageHeight(2),
        paddingHorizontal: setPorcentageWidth(5),
    };

    return (
        <View
            style={[
                genericButtonStyle,
                { backgroundColor: theme.skeleton.color, overflow: 'hidden' }
            ]}
        >
            {packageType === 'annual' && (
                <View
                    style={{
                        position: 'absolute',
                        top: setPorcentageHeight(-2),
                        right: setPorcentageWidth(2),
                        backgroundColor: theme.skeleton.color || "#e0e0e0",
                        paddingHorizontal: setPorcentageWidth(2),
                        paddingVertical: setPorcentageHeight(0.5),
                        borderRadius: 9999,
                        width: setPorcentageWidth(15),
                        height: setPorcentageHeight(3),
                    }}
                />
            )}
            <View style={{ height: setResponsiveSize(20), backgroundColor: theme.skeleton.color || "#e0e0e0", marginBottom: setPorcentageHeight(1) }} />
            <View style={{ height: setResponsiveSize(15), backgroundColor: theme.skeleton.color || "#e0e0e0", marginBottom: setPorcentageHeight(1) }} />
            <View style={{ flexDirection: 'row', alignItems: 'baseline', marginTop: setPorcentageHeight(3) }}>
                <View style={{ width: setPorcentageWidth(10), height: setResponsiveSize(25), backgroundColor: '#e0e0e0', marginRight: setPorcentageWidth(1) }} />
                <View style={{ width: setPorcentageWidth(5), height: setResponsiveSize(15), backgroundColor: '#e0e0e0' }} />
            </View>
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    transform: [{ translateX: shimmerTranslateX }],
                }}
            />
        </View>
    );
};

export default Skeleton;