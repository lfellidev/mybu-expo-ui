import { useTheme } from '../ThemeProvider';
import type { FontWeightType } from "../../types";

export const getButtonStyle = (packageType: string) => {
    const theme = useTheme();
    return {
        backgroundColor: packageType.toLowerCase()=== "annual" ? theme.pricing.button.TheBestValue.backgroundColor : theme.pricing.button.regular.backgroundColor,
        borderRadius: theme.pricing.borderRadius,
        borderWidth: packageType.toLowerCase()=== "annual" ? theme.pricing.button.TheBestValue.borderWidth : theme.pricing.button.regular.borderWidth,
        borderColor: packageType.toLowerCase()=== "annual" ? theme.pricing.button.TheBestValue.borderColor : theme.pricing.button.regular.borderColor,
    };
};

export const getTitleStyle = (packageType: string) => {
    const theme = useTheme();
    return {
        fontSize: packageType.toLowerCase()=== "annual" ? theme.pricing.text.theBestValue.title.fontSize : theme.pricing.text.regular.title.fontSize,
        fontWeight: (packageType.toLowerCase()=== "annual" ? theme.pricing.text.theBestValue.title.fontWeight : theme.pricing.text.regular.title.fontWeight) as FontWeightType,
        color: packageType.toLowerCase()=== "annual" ? theme.pricing.text.theBestValue.title.color : theme.pricing.text.regular.title.color,
    };
};

export const getInfoStyle = (packageType: string) => {
    const theme = useTheme();
    return {
        fontSize: packageType.toLowerCase()=== "annual" ? theme.pricing.text.theBestValue.description.fontSize : theme.pricing.text.regular.description.fontSize,
        fontWeight: (packageType.toLowerCase()=== "annual" ? theme.pricing.text.theBestValue.description.fontWeight : theme.pricing.text.regular.description.fontWeight) as FontWeightType,
        color: packageType.toLowerCase()=== "annual" ? theme.pricing.text.theBestValue.description.color : theme.pricing.text.regular.description.color,
    };
};

export const getPriceStyle = (packageType: string) => {
    const theme = useTheme();
    return {
        fontSize: packageType.toLowerCase()=== "annual" ? theme.pricing.text.theBestValue.price.fontSize : theme.pricing.text.regular.price.fontSize,
        fontWeight: (packageType.toLowerCase()=== "annual" ? theme.pricing.text.theBestValue.price.fontWeight : theme.pricing.text.regular.price.fontWeight) as FontWeightType,
        color: packageType.toLowerCase()=== "annual" ? theme.pricing.text.theBestValue.price.color : theme.pricing.text.regular.price.color,
    };
};

export const getPeriodStyle = (packageType: string) => {
    const theme = useTheme();
    return {
        fontSize: packageType.toLowerCase()=== "annual" ? theme.pricing.text.theBestValue.suffix.fontSize : theme.pricing.text.regular.suffix.fontSize,
        fontWeight: (packageType.toLowerCase()=== "annual" ? theme.pricing.text.theBestValue.suffix.fontWeight : theme.pricing.text.regular.suffix.fontWeight) as FontWeightType,
        color: packageType.toLowerCase()=== "annual" ? theme.pricing.text.theBestValue.suffix.color : theme.pricing.text.regular.suffix.color,
    };
};