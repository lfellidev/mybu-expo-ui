import React from "react";
import { View } from "react-native";
import { useTheme } from '../ThemeProvider';
import Text from "../Text";
import Lottie from "../Lottie";
import { setResponsiveSize } from "../../controllers/setResponsiveSize";
import { setPorcentageWidth } from "../../controllers/setPorcentageWidth";
import { setPorcentageHeight } from "../../controllers/setPorcentageHeight";
import type { FontWeightType } from "../../types";
import type { TheBestValueTagTypes } from "./types";

const BestValueTag: React.FC<TheBestValueTagTypes> = ({ packageType, theBestValueText }) => {
    const theme = useTheme();

    if (packageType.toLowerCase() !== 'annual') return null;

    return (
        <View
            style={{
                position: 'absolute',
                top: setPorcentageHeight(-2),
                right: setPorcentageWidth(2),
                backgroundColor: theme.pricing.theBestValueTag.backgroundColor,
                paddingHorizontal: setPorcentageWidth(2),
                paddingVertical: setPorcentageHeight(0.5),
                borderWidth: theme.pricing.theBestValueTag.borderWidth,
                borderColor: theme.pricing.theBestValueTag.borderColor,
                borderRadius: 9999,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Lottie
                name="star"
                width={setResponsiveSize(20)}
                height={setResponsiveSize(20)}
                loop
            />
            <Text
                weight={theme.pricing.theBestValueTag.fontWeight as FontWeightType}
                style={{
                    color: theme.pricing.theBestValueTag.color,
                    fontSize: theme.pricing.theBestValueTag.fontSize,
                }}
            >
                {theBestValueText}
            </Text>
        </View>
    );
};

export default BestValueTag;