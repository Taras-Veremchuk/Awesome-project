import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	image: {
		resizeMode: "cover",
		height: Dimensions.get("window").height / 2.1,
		flex: 1,
		justifyContent: "center",
		// alignItems: "center",
		backgroundColor: "#FFFFFF",
	},
	keyboardView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	wrapper: {
		backgroundColor: "#FFFFFF",
		width: "100%",
		height: Dimensions.get("window").height / 9,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		alignItems: "center",
	},
	login: {
		height: Dimensions.get("window").height / 9,
		paddingBottom: 0,
		// marginBottom: -150,
	},

	title: {
		textAlign: "center",
		marginVertical: 20,
		fontSize: 30,
		lineHeight: 35.16,
		marginBottom: 32,
	},
	inputContainer: {
		backgroundColor: "#FFFFFF",
		display: "flex",
		gap: 16,
		width: "100%",
		paddingHorizontal: 16,
		marginBottom: 43,
	},
	input: {
		height: 50,
		backgroundColor: "#E8E8E8",
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 10,
		marginTop: 5,
		borderColor: "gray",
	},
	buttonText: {
		color: "white",
		fontWeight: "700",
		fontSize: 16,
	},
	buttonContainer: {
		backgroundColor: "#FFFFFF",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		backgroundColor: "#FF6C00",
		width: "90%",
		padding: 15,
		borderRadius: 100,
		alignItems: "center",
	},
	box: {
		marginTop: 10,
	},
	registerText: {
		color: "#FF6C00",
	},
});

export const {
	image,
	wrapper,
	title,
	inputContainer,
	input,
	buttonText,
	buttonContainer,
	button,
	box,
	registerText,
	keyboardView,
	login,
} = styles;
