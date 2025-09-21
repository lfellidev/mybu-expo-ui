import React, { useState } from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { generateID } from "../../controllers/generateID";
import { useTheme } from "../ThemeProvider";


import BottomSheet from "../BottomSheet";
import Icon from "../Icon";
import styles from "./styles";

import type { Props } from "./types";
import type { SelectItemType } from "./types";

const Select: React.FC<Props> = (props) => {
	const [visible, setVisible] = useState(false);
	const theme = useTheme();

	const handlePress = () => {
		console.log("Select pressed");
		if (props.onPress) {
			props.onPress();
		}
		setVisible(true);
	};

	const handleClose = () => {
		console.log("Select closed");
		setVisible(false);
		if (props.onClose) {
			props.onClose();
		}
	};

	const handleItemPress = (item: SelectItemType) => {
		if (item.onPress) {
			item.onPress();
		}
		setVisible(false);
	};

	return (
		<>
			<View 
				style={[
					styles.container,
					{
						height: theme.select.container.height,
						marginBottom: theme.select.container.marginBottom,
					},
				 	props.containerStyle
				]
			}>
				{props.showLabel && (
					<Text style={[
						styles.label, 
						{
							color: theme.select.item.color,
							opacity: theme.select.label.opacity,
							fontSize: theme.input.labelSize,
							paddingLeft: theme.select.label.paddingLeft,
						},
						props.labelStyle
					]}>{props.label}:</Text>
				)}

				<TouchableOpacity
					style={[
						styles.textInput,
						{
							borderRadius: theme.select.borderRadius,
							backgroundColor: theme.select.backgroundColor,
							borderColor: theme.select.borderColor,
							height: theme.select.height,
						},
					]}
					onPress={handlePress}
					activeOpacity={0.7}
				>
					<Icon
						name={props.icon as any}
						type="MaterialCommunity"
						size={theme.input.size}
						color={theme.input.iconColor}
						style={{
							marginRight: theme.select.icon.marginRight
						}}
					/>
					<Text 
						style={[styles.text,
							{		
								color: theme.select.value.color,
								fontSize: theme.select.value.fontSize,
							}
						]}
						>
							{props.value}
							</Text>
					<Icon
						name="menu-down"
						type="MaterialCommunity"
						size={theme.input.size}
						color={theme.input.iconColor}
						style={[
							styles.caret,
								{
									right: theme.select.caret.right,
									top: theme.select.caret.top,
								}
						]}
					/>
				</TouchableOpacity>
			</View>

			<BottomSheet visible={visible} onClose={handleClose} text={props.label}>
				<FlatList
					data={props.data}
					keyExtractor={() => generateID()}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() => handleItemPress(item)}
							key={generateID()}
						>
							<Text 
								style={[
									styles.selectItemText, 
									{
										color: theme.select.item.color,
										marginBottom: theme.select.item.marginBottom,
									},
									props.itemTextStyle
									]}
								>
								{item.label}
							</Text>
						</TouchableOpacity>
					)}
				/>
			</BottomSheet>
		</>
	);
};

export default Select;
