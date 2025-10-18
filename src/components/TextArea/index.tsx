import React, { useState, useEffect } from "react";
import { View, TextInput, Animated } from "react-native";
import Text from "../Text";
import type { StyleProp, TextStyle, ViewStyle } from "react-native";
import { useTheme } from "../ThemeProvider";
import styles from "./styles";


type Props = {
    style?: StyleProp<TextStyle>;
    onChangeText: (text: string) => void;
    value: string;
    label: string;
    disabled?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    showLabel?: boolean;
    required?: boolean;
    errorMessage?: string;
    height?: number;
    placeholder?: string;
    maxLength?: number;
    skeleton?: boolean;
};

const TextAreaComponent: React.FC<Props> = (props) => {
    const theme = useTheme();
    const [isFocused, setIsFocused] = useState(false);
    const skeletonOpacity = new Animated.Value(1);

    useEffect(() => {
        if (!props.skeleton) return;
        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(skeletonOpacity, {
                    toValue: 0.3,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(skeletonOpacity, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ])
        );
        animation.start();
        return () => animation.stop();
    }, [props.skeleton]);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const errorBorderStyle = props.errorMessage ? [
        {
            borderColor: theme.input.errorColor,
            borderWidth: 2,
        },
    ] : [];

    if (props.skeleton) {
        return (
            <View style={[styles.container, props.containerStyle]}>
                {props.showLabel && (
                    <Animated.View
                        style={[
                            styles.label,
                            {
                                height: theme.input.labelSize || 16,
                                backgroundColor: theme.skeleton.color || '#e0e0e0',
                                borderRadius: 4,
                                marginBottom: 4,
                            },
                            { opacity: skeletonOpacity },
                        ]}
                    />
                )}
                <View
                    style={[
                        {
                            backgroundColor: theme.input.backgroundColor,
                            borderRadius: theme.input.borderRadius,
                            borderColor: theme.input.borderColor,
                            borderWidth: 1,
                            height: props.height || 100,
                        },
                    ]}
                >
                    <Animated.View
                        style={[
                            {
                                flex: 1,
                                backgroundColor: theme.skeleton.color || '#e0e0e0',
                                borderRadius: theme.input.borderRadius - 2,
                                margin: 2,
                            },
                            { opacity: skeletonOpacity },
                        ]}
                    />
                </View>
            </View>
        );
    }

    return (
        <View style={[styles.container, props.containerStyle]}>
            {
                <Text
                    style={[
                        styles.label,
                        {
                            color: theme.input.labelColor,
                            fontSize: theme.input.labelSize,
                        },
                        props.labelStyle,
                        isFocused && { color: theme.input.borderColorFocus },
                        props.errorMessage && { color: theme.input.errorColor },
                    ]}
                >
                    {props.showLabel ? props.label + ":" : null}
                    {props.required ? "*" : null}
                </Text>
            }
            <View
                style={[
                    {
                        backgroundColor: isFocused
                            ? theme.input.backgroundColorFocus
                            : theme.input.backgroundColor,
                        borderRadius: theme.input.borderRadius,
                        borderColor: isFocused
                            ? theme.input.borderColorFocus
                            : theme.input.borderColor,
                        borderWidth: isFocused ? 2 : 1,
                    },
                    ...errorBorderStyle,
                    { height: props.height || 100 },
                ]}
            >
                <TextInput
                    onChangeText={props.onChangeText}
                    value={props.value}
                    placeholder={props.placeholder}
                    editable={!props.disabled}
                    selectionColor="#666"
                    autoCapitalize="none"
                    autoComplete="off"
                    autoCorrect={false}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={[props.style, { padding: 10, textAlignVertical: "top" }]}
                    multiline
                    maxLength={props.maxLength || 1000}
                />
            </View>
        </View>
    );
};

export default TextAreaComponent;
