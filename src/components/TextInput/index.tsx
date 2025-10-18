import React, { useState, useEffect } from "react";
import { View, TextInput, Animated } from "react-native";
import Text from "../Text";
import type { StyleProp, TextStyle } from "react-native";
import { useTheme } from "../ThemeProvider";
import Icon from "../Icon";

import styles from "./styles";

type TextInputTypes = {
    label: string;
    showLabel?: boolean;
    labelStyle?: StyleProp<TextStyle>;
    value: string;
    onChangeText: (text: string) => void;
    icon: string;
    isPassword?: boolean;
    keyboardType?: "numeric" | "default" | "email-address" | "phone-pad";
    disabled?: boolean;
    style?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<TextStyle>;
    errorMessage?: string;
    required?: boolean;
    placeholder?: string;
    skeleton?: boolean;
};

const TextInputComponent: React.FC<TextInputTypes> = (
    props
): React.JSX.Element => {
    const theme = useTheme();
    const { disabled, value, onChangeText, isPassword, keyboardType, skeleton } =
        props;
    const [secureTextEntry, setSecureTextEntry] = useState(isPassword);
    const [isFocused, setIsFocused] = useState(false);
    const [fadeAnim] = useState(new Animated.Value(1));

    useEffect(() => {
        if (skeleton) {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(fadeAnim, {
                        toValue: 0.5,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(fadeAnim, {
                        toValue: 1,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                ])
            ).start();
        } else {
            fadeAnim.setValue(1);
        }
    }, [skeleton, fadeAnim]);

    const errorBorderStyle = [
        {
            borderColor: theme.input.errorColor,
            borderWidth: 2,
        },
    ];


    const labelColor = props.errorMessage
        ? theme.input.errorColor
        : isFocused
        ? theme.input.borderColorFocus
        : theme.input.labelColor;

    if (skeleton) {
        return (
            <View style={[styles.container, props.containerStyle]}>
                <View
                    style={{
                        height: theme.input.labelSize + theme.input.labelSize / 2,
                    }}
                >
                    {props.showLabel ? (
                        <Animated.View
                            style={[
                                styles.label,
                                {
                                    backgroundColor: "#e0e0e0",
                                    height: theme.input.labelSize,
                                    width: "60%",
                                    opacity: fadeAnim,
                                },
                            ]}
                        />
                    ) : null}
                </View>
                <Animated.View
                    style={[
                        styles.inputGroup,
                        {
                            backgroundColor: "#e0e0e0",
                            height: theme.input.height,
                            borderRadius: theme.input.borderRadius,
                            opacity: fadeAnim,
                            borderColor: 'transparent',
                            borderWidth: 1,
                        },
                    ]}
                />
            </View>
        );
    }

    return (
        <View style={[styles.container, props.containerStyle]}>
            <View
                style={{
                    height: theme.input.labelSize + theme.input.labelSize / 2,
                }}
            >
                {props.showLabel ? (
                    <Text
                        style={[
                            styles.label,
                            {
                                color: labelColor,
                                fontSize: theme.input.labelSize,
                                fontWeight: "600",
                            },
                            props.labelStyle,
                        ]}
                    >
                        {props.label}:{props.required ? "*" : null}
                    </Text>
                ) : null}
            </View>
            <View
                style={[
                    styles.inputGroup,
                    {
                        backgroundColor: theme.input.iconBackground,
                        borderColor: theme.input.borderColor,
                        borderRadius: theme.input.borderRadius,
                    },
                    isFocused && {
                        borderColor: theme.input.borderColorFocus,
                        borderWidth: 2,
                    },
                    props.errorMessage ? errorBorderStyle : null,
                ]}
            >
                <Icon
                    name={props.icon as any}
                    size={24}
                    color={theme.input.iconColor}
                    style={styles.icon}
                />
                <TextInput
                    editable={!disabled}
                    keyboardType={keyboardType}
                    placeholder={props.placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    autoCapitalize="none"
                    autoComplete="off"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    style={[
                        styles.textInput,
                        {
                            borderRadius: theme.input.borderRadius,
                            height: theme.input.height,
                            backgroundColor: theme.input.backgroundColor,
                            color: theme.input.color,
                            paddingTop: theme.input.paddingTop,
                            paddingRight: theme.input.paddingRight,
                            paddingBottom: theme.input.paddingBottom,
                            paddingLeft: theme.input.paddingLeft,
                            textDecorationLine: "none",
                        },
                        props.style,
                    ]}
                />
                {isPassword ? (
                    <Icon
                        name={(secureTextEntry ? "eye-off" : "eye") as any}
                        type="MaterialCommunity"
                        style={styles.passwordIcon}
                        size={theme.input.size}
                        color={theme.input.iconColor}
                        onPress={() => setSecureTextEntry(!secureTextEntry)}
                    />
                ) : null}
            </View>
        
        </View>
    );
};

export default TextInputComponent;
