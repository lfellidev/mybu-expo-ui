import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 8,
	},
	box: {
		borderColor: "transparent",
		alignItems: "center",
		justifyContent: "center",
		overflow: "hidden",
	},

	checkmark: {
		fontSize: 20,
		fontWeight: "bold",
	},
	label: {
		marginLeft: 10,
		fontSize: 16,
		
	},
	smoke: {
		position: "absolute",
		width: 30,
		height: 30,
		borderRadius: 15,
	},
});

export default styles;