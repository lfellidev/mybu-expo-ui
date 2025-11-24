import React, { useRef, useEffect } from "react";
import { Text, Animated } from "react-native";
import { useFonts } from "expo-font";
import { BeVietnamPro_100Thin, BeVietnamPro_200ExtraLight, BeVietnamPro_300Light, BeVietnamPro_400Regular, BeVietnamPro_500Medium, BeVietnamPro_600SemiBold, BeVietnamPro_700Bold, BeVietnamPro_800ExtraBold, BeVietnamPro_900Black } from '@expo-google-fonts/be-vietnam-pro';
import { Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, Inter_900Black } from '@expo-google-fonts/inter';
import { Lexend_100Thin, Lexend_200ExtraLight, Lexend_300Light, Lexend_400Regular, Lexend_500Medium, Lexend_600SemiBold, Lexend_700Bold, Lexend_800ExtraBold, Lexend_900Black } from '@expo-google-fonts/lexend';
import { Nunito_200ExtraLight, Nunito_300Light, Nunito_400Regular, Nunito_500Medium, Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold, Nunito_900Black } from '@expo-google-fonts/nunito';
import { Poppins_100Thin, Poppins_200ExtraLight, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold, Poppins_900Black } from '@expo-google-fonts/poppins';
import { Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { Roboto_100Thin, Roboto_200ExtraLight, Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_600SemiBold, Roboto_700Bold, Roboto_800ExtraBold, Roboto_900Black } from '@expo-google-fonts/roboto';
import { Sora_100Thin, Sora_200ExtraLight, Sora_300Light, Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';

import type { TextComponentTypes } from "./types";

const TextComponent: React.FC<TextComponentTypes> = (props) => {
  const [fontsLoaded] = useFonts({
    BeVietnamPro_100Thin,
    BeVietnamPro_200ExtraLight,
    BeVietnamPro_300Light,
    BeVietnamPro_400Regular,
    BeVietnamPro_500Medium,
    BeVietnamPro_600SemiBold,
    BeVietnamPro_700Bold,
    BeVietnamPro_800ExtraBold,
    BeVietnamPro_900Black,

    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,

    Lexend_100Thin,
    Lexend_200ExtraLight,
    Lexend_300Light,
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
    Lexend_700Bold,
    Lexend_800ExtraBold,
    Lexend_900Black,

    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,

    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,

    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,

    Roboto_100Thin,
    Roboto_200ExtraLight,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_600SemiBold,
    Roboto_700Bold,
    Roboto_800ExtraBold,
    Roboto_900Black,

    Sora_100Thin,
    Sora_200ExtraLight,
    Sora_300Light,
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
    Sora_800ExtraBold,
  });

  const familyMap: Record<string, Record<string, string>> = {
    beVietnamPro: {
      100: 'BeVietnamPro_100Thin',
      200: 'BeVietnamPro_200ExtraLight',
      300: 'BeVietnamPro_300Light',
      400: 'BeVietnamPro_400Regular',
      500: 'BeVietnamPro_500Medium',
      600: 'BeVietnamPro_600SemiBold',
      700: 'BeVietnamPro_700Bold',
      800: 'BeVietnamPro_800ExtraBold',
      900: 'BeVietnamPro_900Black',
    },
    inter: {
      100: 'Inter_100Thin',
      200: 'Inter_200ExtraLight',
      300: 'Inter_300Light',
      400: 'Inter_400Regular',
      500: 'Inter_500Medium',
      600: 'Inter_600SemiBold',
      700: 'Inter_700Bold',
      800: 'Inter_800ExtraBold',
      900: 'Inter_900Black',
    },
    lexend: {
      100: 'Lexend_100Thin',
      200: 'Lexend_200ExtraLight',
      300: 'Lexend_300Light',
      400: 'Lexend_400Regular',
      500: 'Lexend_500Medium',
      600: 'Lexend_600SemiBold',
      700: 'Lexend_700Bold',
      800: 'Lexend_800ExtraBold',
      900: 'Lexend_900Black',
    },
    nunito: {
      200: 'Nunito_200ExtraLight',
      300: 'Nunito_300Light',
      400: 'Nunito_400Regular',
      500: 'Nunito_500Medium',
      600: 'Nunito_600SemiBold',
      700: 'Nunito_700Bold',
      800: 'Nunito_800ExtraBold',
      900: 'Nunito_900Black',
    },
    poppins: {
      100: 'Poppins_100Thin',
      200: 'Poppins_200ExtraLight',
      300: 'Poppins_300Light',
      400: 'Poppins_400Regular',
      500: 'Poppins_500Medium',
      600: 'Poppins_600SemiBold',
      700: 'Poppins_700Bold',
      800: 'Poppins_800ExtraBold',
      900: 'Poppins_900Black',
    },
    quicksand: {
      300: 'Quicksand_300Light',
      400: 'Quicksand_400Regular',
      500: 'Quicksand_500Medium',
      600: 'Quicksand_600SemiBold',
      700: 'Quicksand_700Bold',
    },
    roboto: {
      100: 'Roboto_100Thin',
      200: 'Roboto_200ExtraLight',
      300: 'Roboto_300Light',
      400: 'Roboto_400Regular',
      500: 'Roboto_500Medium',
      600: 'Roboto_600SemiBold',
      700: 'Roboto_700Bold',
      800: 'Roboto_800ExtraBold',
      900: 'Roboto_900Black',
    },
    sora: {
      100: 'Sora_100Thin',
      200: 'Sora_200ExtraLight',
      300: 'Sora_300Light',
      400: 'Sora_400Regular',
      500: 'Sora_500Medium',
      600: 'Sora_600SemiBold',
      700: 'Sora_700Bold',
      800: 'Sora_800ExtraBold',
      900: 'Sora_900Black',
    },
  };

  const pulseAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (props.skeleton) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
          Animated.timing(pulseAnim, { toValue: 0, duration: 500, useNativeDriver: true }),
        ])
      ).start();
    } else {
      pulseAnim.setValue(0);
    }
  }, [props.skeleton, pulseAnim]);

  const animatedStyle = {
    opacity: pulseAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 1],
    }),
  };

  const weight = props.weight || 400;
  const family = props.family || 'lexend';
  const selectedFamily = fontsLoaded ? familyMap[family]?.[String(weight)] : undefined;

  if (props.skeleton) {
    return (
      <Animated.View style={[{ backgroundColor: '#e0e0e0' }, animatedStyle]}>
        <Text style={[selectedFamily ? { fontFamily: selectedFamily } : {}, { fontWeight: weight }, { opacity: 0 }]}>
          {props.children}
        </Text>
      </Animated.View>
    );
  } else {
    return (
      <Text style={[props.style, selectedFamily ? { fontFamily: selectedFamily } : {}]}>
        {props.children}
      </Text>
    );
  }
};

export default TextComponent;
