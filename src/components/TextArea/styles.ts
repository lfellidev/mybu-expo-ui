import { StyleSheet } from "react-native";
import { setPorcentageHeight } from "../../controllers/setPorcentageHeight";

const styles = StyleSheet.create({
	container: {
		marginBottom: setPorcentageHeight(2),

	},
	label: {
		opacity: 0.8,
		fontWeight: "600",
		paddingLeft: 10,
	},

	
});

export default styles;
