import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	screenWrapper: {
		flex: 1,
		width: "100%",
		justifyContent: "flex-end",
	},
	wrapper: {
		position: "relative",
		backgroundColor: "#ffffff",
		alignItems: "center",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		paddingRight: 16,
		paddingLeft: 16,
		paddingTop: 92,
		paddingBottom: 78,
	},
	loginWrapper: {
		position: "relative",
		backgroundColor: "#ffffff",
		alignItems: "center",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		paddingRight: 16,
		paddingLeft: 16,
		paddingTop: 32,
		paddingBottom: 144,
	},
	imageWrapper: {
		position: "absolute",
		transform: [{ translateY: -60 }],
		top: 0,
	},
	userImage: {
		left: 140,
		top: -150,
		width: 120,
		height: 120,
		borderRadius: 16,
	},
	placeholderImage: {
		width: 120,
		height: 120,
		borderRadius: 16,
		backgroundColor: "#F6F6F6",
	},
	addImageBtn: {
		position: "absolute",
		width: 25,
		height: 25,
		right: 0,
		top: "60%",
		transform: [{ translateX: 12.5 }],
		borderRadius: 25,
	},
	title: {
		color: "#212121",
		fontSize: 30,
		lineHeight: 35,
		fontWeight: 500,
		textAlign: "center",
		marginBottom: 28,
	},
	loginTitle: {
		color: "#212121",
		fontSize: 30,
		lineHeight: 35,
		fontWeight: 500,
		textAlign: "center",
		marginBottom: 32,
	},
	text: {
		color: "#1B4371",
		fontSize: 16,
		lineHeight: 19,
		fontWeight: 400,
		textAlign: "center",
		marginBottom: 32,
		marginTop: 16,
	},
	errorMessage: {
		position: "absolute",
		color: "red",
		left: 40,
		top: 136,
	},
	loginErrorMessage: {
		position: "absolute",
		color: "red",
		left: 40,
		top: 76,
	},
	inputWrapper: {
		width: "100%",
	},
	textPassword: {
		fontSize: 16,
		lineHeight: 19,
		right: 32,
	},
	textColor: {
		color: "#1B4371",
	},
	showText: {
		position: "absolute",
		right: -20,
		top: -50,
	},
	textLink: {
		textDecorationLine: "underline",
	},
	passwordPosition: {
		position: "absolute",
		right: 16,
		top: 14,
	},
});
export const {
	container,
	screenWrapper,
	wrapper,
	imageWrapper,
	userImage,
	placeholderImage,
	addImageBtn,
	title,
	text,
	errorMessage,
	inputWrapper,
	textPassword,
	showText,
	textLink,
	textColor,
	passwordPosition,
	loginWrapper,
	loginTitle,
	loginErrorMessage,
} = styles;