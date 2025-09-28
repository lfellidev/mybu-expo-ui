import React from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import Text from "../Text";
import { generateID } from "../../controllers/generateID";
import type { ListItemProps } from "./types";
import {useTheme} from "../ThemeProvider";
import styles from "./styles";

const ListItem: React.FC<ListItemProps> = (props) => {
	const theme = useTheme();

	return ( 
		<View>
			<FlatList
			data={props.data}
			keyExtractor={() => generateID()}
			renderItem={({ item }) => (
				<TouchableOpacity 
					onPress={item.onPress}
					style={[
						styles.container,
						{
						backgroundColor: theme.ListItems.backgroundColor, 
						paddingVertical: theme.ListItems.paddingVertical,
						paddingHorizontal: theme.ListItems.paddingHorizontal,
						borderBottomColor: theme.ListItems.borderBottomColor,			
				},
				props.style
			]}
			>
				<Text style={[
					{ color: theme.ListItems.color },
					 props.labelStyle
					 ]}>
						{item.label}
						</Text>
			</TouchableOpacity>
		)}
	/>
	</View>
);
}

export default ListItem;
