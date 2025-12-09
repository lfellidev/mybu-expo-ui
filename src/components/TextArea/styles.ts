import { StyleSheet } from "react-native";
import { setPorcentageHeight } from "../../controllers/setPorcentageHeight";

const styles = StyleSheet.create({
	container: {
		marginBottom: setPorcentageHeight(2),

	},
	label: {
		fontWeight: "600",	
		paddingLeft: 10,
		
	},

	
});

export default styles;
