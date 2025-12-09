import React from 'react';
import { View } from 'react-native';
import Icon from '../Icon';
import Text from '../Text';
import Skeleton from '../Skeleton';
import { setResponsiveSize } from '../../controllers/setResponsiveSize';
import { useTheme } from '../ThemeProvider';
import type { FeatureProps } from './types';
import { setPorcentageWidth } from '../../controllers/setPorcentageWidth';



const Feature: React.FC<FeatureProps> = (props) => {
  const theme = useTheme();
  if (props.skeleton && props.skeleton > 0) {
    return (
      <View>
        {Array.from({ length: props.skeleton }, (_, index) => (
          <View
            key={index}
            style={[
              {
                flexDirection: 'row',
                alignItems: 'center',
                gap: setResponsiveSize(12),
                marginBottom: setResponsiveSize(12),
              },
              props.style,
            ]}
          >
            <Skeleton
              width={theme.feature.iconSize}
              height={theme.feature.iconSize}
              style={{ borderRadius: theme.feature.iconSize / 2 }}
              loading={true}
            />
            <Skeleton
              width={setResponsiveSize(150)}
              height={setResponsiveSize(20)}
              loading={true}
            />
          </View>
        ))}
      </View>
    );
  }
  return (
    <View>
      {props.items.map((feature, index) => (
        <View
          key={index}
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
							paddingBottom: setResponsiveSize(5),
              marginBottom: setResponsiveSize(2),
            },
            props.style,
          ]}
        >
          <Icon
            name={feature.icon=="yes" ? 'check-circle':'cancel'}
            size={theme.feature.iconSize}
            color={feature.icon=="yes"?theme.feature.yesColor : theme.feature.noColor}
          />
          <Text style={{
						marginLeft: setPorcentageWidth(2),
					}}>{feature.text}</Text>
        </View>
      ))}
    </View>
  );
};

export default Feature;
