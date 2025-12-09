import React, { useState, useEffect, useRef } from "react";
import { FlatList, View, TouchableOpacity, Animated } from "react-native";
import Text from "../Text";
import { generateID } from "../../controllers/generateID";
import { useTheme } from "../ThemeProvider";


import BottomSheet from "../BottomSheet";
import Icon from "../Icon";
import styles from "./styles";

import type { Props } from "./types";
import type { SelectItemType } from "./types";

const Select: React.FC<Props> = (props) => {
    const [visible, setVisible] = useState(false);
    const theme = useTheme();
    const fadeAnim = useRef(new Animated.Value(0.3)).current;

    useEffect(() => {
        if (props.skeleton) {
            const animation = Animated.loop(
                Animated.sequence([
                    Animated.timing(fadeAnim, {
                        toValue: 1,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(fadeAnim, {
                        toValue: 0.3,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                ])
            );
            animation.start();
            return () => animation.stop();
        } else {
            return;
        }
    }, [props.skeleton, fadeAnim]);

    const handlePress = () => {
        if (props.onPress) {
            props.onPress();
        }
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
        if (props.onClose) {
            props.onClose();
        }
    };

    const handleItemPress = (item: SelectItemType) => {
        if (item.onPress) {
            item.onPress();
        }
        setVisible(false);
    };

    if (props.skeleton) {
        return (
            <View 
                style={[
                    styles.container,
                    {
                        height: theme.select.container.height,
                        marginBottom: theme.select.container.marginBottom,
                    },
                    props.containerStyle
                ]}
            >
                {props.showLabel && (
                    <Animated.View style={[
                        {
                            backgroundColor: ( theme.skeleton.color) || '#e0e0e0',
                            opacity: fadeAnim,
                            height: theme.input.labelSize,
                            width: '60%',
                            borderRadius: 4,
                            marginBottom: 8,
                        }
                    ]} />
                )}
                <Animated.View style={[
                    styles.textInput,
                    {
                        borderRadius: theme.select.borderRadius,
                        backgroundColor: (theme.skeleton && theme.skeleton.color) || 'red',
                        opacity: fadeAnim,
                        height: theme.select.height,
                        borderColor: 'transparent',
                        borderWidth: 0,
                    },
                ]} />
            </View>
        );
    }

    return (
        <>
            <View 
                style={[
                    styles.container,
                    {
                        height: theme.select.container.height,
                        marginBottom: theme.select.container.marginBottom,
                    },
                    props.containerStyle
                ]}
            >
                {props.showLabel && (
                    <Text style={[
                        styles.label, 
                        {
                            color: props.errorMessage ? theme.input.errorColor : theme.input.labelColor,
                            fontSize: theme.input.labelSize,
                            paddingLeft: theme.select.label.paddingLeft,
                        },
                        props.labelStyle
                    ]}>{props.label}:</Text>
                )}

                <TouchableOpacity
                    style={[
                        styles.textInput,
                        {
                            borderRadius: theme.select.borderRadius,
                            backgroundColor: theme.select.backgroundColor,
                            borderColor: props.errorMessage ? theme.input.errorColor : theme.select.borderColor,
                            borderWidth: props.errorMessage ? 2 : 0,
                            height: theme.select.height,
                        },
                    ]}
                    onPress={handlePress}
                    activeOpacity={0.7}
                >
                    <Icon
                        name={props.icon as any}
                        type="MaterialCommunity"
                        size={theme.input.size}
                        color={theme.input.iconColor}
                        style={{
                            marginRight: theme.select.icon.marginRight
                        }}
                    />
                    <Text 
                        style={[styles.text,
                            {		
                                color: props.errorMessage ? theme.input.errorColor : theme.select.value.color,
                                fontSize: theme.select.value.fontSize,
                            }
                        ]}
                        >
                            {props.value}
                            </Text>
                    <Icon
                        name="menu-down"
                        type="MaterialCommunity"
                        size={theme.input.size}
                        color={props.errorMessage ? theme.input.errorColor : theme.input.iconColor}
                    />
                </TouchableOpacity>
            </View>

            <BottomSheet visible={visible} onClose={handleClose} text={props.label}>
                <FlatList
                    data={props.data}
                    keyExtractor={() => generateID()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => handleItemPress(item)}
                            key={generateID()}
                        >
                            <Text 
                                style={[
                                    styles.selectItemText, 
                                    {
                                        color: theme.select.item.color,
                                        marginBottom: theme.select.item.marginBottom,
                                    },
                                    props.itemTextStyle
                                    ]}
                                >
                                {item.label}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </BottomSheet>
        </>
    );
};

export default Select;