import { StyleSheet } from "react-native";
import { setPorcentageHeight } from "../../controllers/setPorcentageHeight";


const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	label: {
		fontWeight: "bold",
		marginBottom: setPorcentageHeight(1),
		width: "100%",
	},
	button: {
		justifyContent: "center",
		alignItems: "center",
	},

	buttonText: {
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		fontWeight: "bold",
	},

	value: {
		textAlign: "center",
	},
});

export default styles;
