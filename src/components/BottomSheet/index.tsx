import React, { useState, useEffect} from 'react';
import {
  Modal,
  Animated,
  TouchableWithoutFeedback,
  View,
	StyleSheet,
} from 'react-native';
import { useTheme } from '../ThemeProvider';
import Icon from '../Icon';
import Text from '../Text';
import Button from '../Button';
import Group from '../Group';

import type { BottomSheetTypes } from './types';


const BottomSheet: React.FC<BottomSheetTypes> = ({
  visible,
  onClose,
  text,
  buttons,
  children,
}) => {
  const [animation] = useState(new Animated.Value(0));

	const theme = useTheme();
  useEffect(() => {
    Animated.timing(animation, {
      toValue: visible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });
  const overlayOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.7],
  });

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <Animated.View
          style={[{
						...StyleSheet.absoluteFillObject, 	
							backgroundColor: theme.bottomSheet.overlayColor,
					 		opacity: overlayOpacity
					 }]}
        />
      </TouchableWithoutFeedback>

      <Animated.View style={[{
			    position: 'absolute',
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: theme.bottomSheet.backgroundColor,
					borderTopLeftRadius: theme.bottomSheet.borderTopLeftRadius,
					borderTopRightRadius: theme.bottomSheet.borderTopRightRadius,
					paddingHorizontal: theme.bottomSheet.paddingHorizontal,
					paddingTop: theme.bottomSheet.paddingTop,
					paddingBottom: theme.bottomSheet.paddingBottom,
					maxHeight: '80%',	
			}, { transform: [{ translateY }] }]}>
        <View style={{alignItems: 'flex-end'}}>
          <Icon
            type="MaterialCommunity"
            name="close"
            onPress={onClose}
            size={30}
            color={theme.bottomSheet.closeColor}
          />
        </View>

        {!children ? (
          <>
            <Group>
              <Text style={{
								textAlign: 'left',
								paddingTop: theme.bottomSheet.textPaddingTop,
								paddingRight: theme.bottomSheet.textPaddingRight,
								paddingBottom: theme.bottomSheet.textPaddingBottom,
								paddingLeft: theme.bottomSheet.textPaddingLeft,
								fontSize: theme.bottomSheet.fontSize,
								color: theme.bottomSheet.color,
							}}>{text}</Text>
            </Group>
            <Group>
            <Button
                label={buttons?.primary?.label || ''}
                onPress={buttons?.primary?.onPress || (() => {})}
                style={buttons?.primary?.style}
                labelStyle={buttons?.primary?.labelStyle}
              />
              <Button
                type="secondary"
                label={buttons?.secondary?.label || ''}
                onPress={buttons?.secondary?.onPress || onClose}
                style={buttons?.secondary?.style}
                labelStyle={buttons?.secondary?.labelStyle}
              />
            </Group>
          </>
        ) : (
          <Group>{children}</Group>
        )}
      </Animated.View>
    </Modal>
  );
};

export default BottomSheet;