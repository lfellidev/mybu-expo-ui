import React, { useEffect, useRef } from 'react';

import { Animated} from 'react-native';
import { useTheme } from '../ThemeProvider';
import Text from "../Text";
import type { AlertTypes } from './types';


const Alert: React.FC<AlertTypes> = (props) => {
	const theme = useTheme();
  const slideAnim = useRef<Animated.Value>(new Animated.Value(-100)).current;

  useEffect(() => {
    if (props.visible) {
      const slideIn = () => {
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start();

        setTimeout(slideOut, 5000);
      };

      const slideOut = () => {
        Animated.timing(slideAnim, {
          toValue: -100,
          duration: 500,
          useNativeDriver: true,
        }).start();
      };

      slideIn();
    }
  }, [props.visible, slideAnim]);


  return (
    <Animated.View
      style={[
				{ 
					transform: [{ translateY: slideAnim }] ,
        	backgroundColor: 
					props.type=="danger"? theme.alert.danger.backgroundColor :
					props.type=="success"? theme.alert.success.backgroundColor :
					theme.alert.info.backgroundColor,
					paddingTop: theme.alert.paddingTop,
					paddingBottom: theme.alert.paddingBottom,
					paddingHorizontal: theme.alert.paddingHorizontal,
					position: 'absolute',
					top: 0,
					right: 0,
					left: 0,
					zIndex: 999,
					width: '100%',			
				},
				props.style,
      ]}
    >
      <Text 
				style={{
					fontSize: theme.alert.fontSize,
					fontWeight: theme.alert.fontWeight?.toString() as any,
					textAlign: theme.alert.textAlign as "left" | "right" | "center",
					color: 
						props.type=="danger"? theme.alert.danger.color :
						props.type=="success"? theme.alert.success.color :
						theme.alert.info.color,
				}}
			>
				{props.text}
			</Text>
    </Animated.View>
  );
};



export default Alert;