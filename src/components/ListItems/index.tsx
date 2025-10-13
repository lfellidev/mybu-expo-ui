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
                backgroundColor: theme.listItems.backgroundColor, 
                paddingVertical: theme.listItems.paddingVertical,
                paddingHorizontal: theme.listItems.paddingHorizontal,
                borderBottomColor: theme.listItems.borderBottomColor,			
              },
              props.style
            ]}
          >
            {item.icon ? (
           		<View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 0.1, justifyContent: 'center' }}>
                  {item.icon}
                </View>
                <View style={{ flex: 0.9, justifyContent: 'center' }}>
                    <Text style={[
											{ color: theme.listItems.color },
											props.labelStyle
                    ]}>
                    	{item.label}
                    </Text>
                  </View>
                </View>
                ) : (
                  <Text style={[{ color: theme.listItems.color }, props.labelStyle ]}>
                    {item.label}
                  </Text>
                )}
            </TouchableOpacity>
       		)}
    		/>
  </View>
	);
}

export default ListItem;
