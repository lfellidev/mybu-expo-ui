import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from 'react-native';
import Text from "../Text";
import { setPorcentageWidth } from "../../controllers/setPorcentageWidth";
import { setPorcentageHeight } from "../../controllers/setPorcentageHeight";
import type { PricingCardTypes } from './types';
import { getButtonStyle, getInfoStyle, getPriceStyle, getPeriodStyle } from './styles';
import { getInfoText, getUnitText } from './utils';
import Skeleton from './Skeleton';
import BestValueTag from './BestValueTag';
import Title from './Title';

const PricingCard: React.FC<PricingCardTypes> = (props) => {
  if (props.skeleton && props.skeleton > 0) {
    return (
      <View>
  	    {Array.from({ length: props.skeleton }, (_, index) => (
        	<Skeleton key={index} packageType={props.packageType} />
     	  ))}
     </View>
    );
  }

  const genericButtonStyle = {
    marginBottom: setPorcentageHeight(5),
    paddingVertical: setPorcentageHeight(2),
    paddingHorizontal: setPorcentageWidth(5),
  };

  return (
  	<TouchableOpacity
      onPress={props.onPress}
      style={[genericButtonStyle, getButtonStyle(props.packageType)]}
  	>
    
			<BestValueTag 
				packageType={props.packageType} 
				theBestValueText={props.theBestValueText}
			/>
 		 	
			<Title 
				packageType={props.packageType} 
				packages={props.packages}
			/>
      	
			<Text style={getInfoStyle(props.packageType)}>
                {getInfoText(props.packageType, props)}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'baseline', marginTop: setPorcentageHeight(3) }}>
                <Text style={getPriceStyle(props.packageType)}>
                    {props.priceString}
                </Text>
                <Text style={getPeriodStyle(props.packageType)}>
                    {getUnitText(props.packageType, props)}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default PricingCard;