import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		borderBottomWidth: 1,
	},
	col1: {
		width: "20%",
		justifyContent: "center",
		alignItems: "center",
	},
	col2: {
		width: "80%",
		justifyContent: "center",
	},

	oneCol: {
		justifyContent: "center",
		alignItems: "center",
		borderBottomWidth: 1,
	},
});

export default styles;
