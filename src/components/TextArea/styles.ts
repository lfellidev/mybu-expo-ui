import { StyleSheet } from "react-native";
import { setPorcentageHeight } from "../../controllers/setPorcentageHeight";

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
	
		width: "100%",
		marginBottom: setPorcentageHeight(5),
		textAlignVertical: "top",
		height: setPorcentageHeight(30),
	},
	label: {
		opacity: 0.8,
		fontWeight: "600",
		paddingLeft: 10,
	},

	
});

export default styles;
