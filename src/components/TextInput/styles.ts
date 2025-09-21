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
		borderRadius: 10,
		paddingLeft: 10,
		borderWidth: 1,
	},

	icon: {
		marginRight: 10,
	},
	label: {
		opacity: 0.8,
		fontWeight: "600",	
		paddingLeft: 10,
	},
	textInput: {
		flex: 1,
		height: 40,
		borderRadius: 7,
		paddingHorizontal: 10,
		textDecorationLine: "none",
	},
	passwordIcon: {
		position: "absolute",
		right: setPorcentageWidth(3),
		top: setPorcentageHeight(-1.5),
	},

});

export default styles;
