import React from 'react';
import Text from '../Text';
import { getTitleStyle } from './styles';
import type { TitleTypes } from './types';


const Title: React.FC<TitleTypes> = (props) => {
	const key = props.packageType.toLowerCase().replace('annal', 'annual');
	const title = props.packages?.[key]?.title || '';
    return (
        <Text style={getTitleStyle(props.packageType)}>
        	{title}
        </Text>
    );
};

export default Title;
