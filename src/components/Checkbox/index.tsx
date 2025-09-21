import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacity, View, Text, Animated } from "react-native";
import { useTheme } from "../ThemeProvider";
import styles from "./styles";
import type { CheckboxTypes } from "./type";

const Checkbox: React.FC<CheckboxTypes> = ({ label, checked, onChange, errorMessage, style }) => {
  const theme = useTheme();
	const scaleAnim = useRef(new Animated.Value(checked ? 1 : 0)).current;
  const opacityAnim = useRef(new Animated.Value(checked ? 1 : 0)).current;
  const [hasInteracted, setHasInteracted] = useState(false); 

  type SmokeParticle = {
    id: number;
    animScale: Animated.Value;
    animOpacity: Animated.Value;
    color: string;
  };

  const [smoke, setSmoke] = useState<SmokeParticle[]>([]);

  useEffect(() => {
    if (!hasInteracted) return;

    if (checked) {
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();

      triggerSmoke(theme.checkbox.selectedColor);
    } else {
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();

      triggerSmoke(theme.checkbox.selectedColor); 
    }
  }, [checked, hasInteracted]);

  const triggerSmoke = (color: string) => {
    const id = Date.now();
    const animScale = new Animated.Value(0.5);
    const animOpacity = new Animated.Value(0.8);

    setSmoke((prev) => [...prev, { id, animScale, animOpacity, color }]);

    Animated.parallel([
      Animated.timing(animScale, {
        toValue: 2,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(animOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setSmoke((prev) => prev.filter((s) => s.id !== id));
    });
  };

  const handlePress = () => {
    setHasInteracted(true); 
    onChange(!checked);
  };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <View 
            style={[
							{
								width: theme.checkbox.size,
								height: theme.checkbox.size,
								borderWidth: theme.checkbox.borderWidth,
								borderRadius: theme.checkbox.borderRadius,
								backgroundColor: theme.checkbox.backgroundColor,
							},
                styles.box, 
                checked && {
                    backgroundColor: theme.checkbox.selectedColor,
                borderColor: theme.checkbox.selectedColor
                },
								errorMessage?{borderColor: theme.checkbox.errorBorder}:null
            ]}>

        {smoke.map((s) => (
          <Animated.View
            key={s.id}
            style={[
              styles.smoke,
              {
                backgroundColor: s.color,
                opacity: s.animOpacity,
                transform: [{ scale: s.animScale }],
              },
            ]}
          />
        ))}

        <Animated.Text
          style={[
            styles.checkmark,
						{
							color: theme.checkbox.color,
							transform: [{ scale: scaleAnim }], opacity: opacityAnim 
						},
          ]}
        >
          ✓
        </Animated.Text>
      </View>
      {label && 
				<Text 
					style={[
						styles.label,
						{
							color: theme.checkbox.labelColor,
						}
				]}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default Checkbox;

