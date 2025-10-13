import { StyleSheet } from "react-native";
import { setPorcentageHeight } from "../../controllers/setPorcentageHeight";
import { setPorcentageWidth } from "../../controllers/setPorcentageWidth";


const styles = StyleSheet.create({
	container: {
		position: "relative",
		height: setPorcentageHeight(10),
		marginBottom: setPorcentageHeight(2),
		width: "100%",
	},

	inputGroup: {
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: 10,
		borderWidth: 1,
	},

	icon: {
		marginRight: setPorcentageWidth(2),
	},
	label: {
	fontWeight: "500",	
		paddingLeft: 10,
	},
	text: {
		flex: 1,
	},
	textInput: {
		flex: 1,
		textDecorationLine: "none",
	},
	passwordIcon: {
		position: "absolute",
		right: setPorcentageWidth(3),
		top: setPorcentageHeight(-1.5),
	},

});

export default styles;
