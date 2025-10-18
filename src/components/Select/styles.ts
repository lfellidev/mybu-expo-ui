import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	textInput: {
		flex: 1,
		padding: 10,
		borderWidth: 1,
		flexDirection: "row",
		alignItems: "center",
	},

	caret: {
		position: "absolute",
	},

	selectItemText: {
		textAlign: "center",
	},

	container: {
		position: "relative",
		width: "100%",
	},
	label: {
		fontWeight: 600,
	},
	text: {
		flex: 1,
	},
});

export default styles;
