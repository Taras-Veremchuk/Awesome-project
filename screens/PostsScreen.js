import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const PostsScreen = () => {
	const navigation = useNavigation();
	const handleSignOut = () => {
		navigation.replace("Login");
	};
	return (
		<View style={styles.container}>
			<Text>Email: </Text>
			<TouchableOpacity onPress={handleSignOut} style={styles.button}>
				<Text style={styles.buttonText}>Sign out</Text>
			</TouchableOpacity>
		</View>
	);
};

export default PostsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	button: {
		backgroundColor: "#3b76e2",
		width: "60%",
		padding: 15,
		borderRadius: "50%",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 20,
	},
	buttonText: {
		color: "#ffffff",
		fontSize: 18,
		fontWeight: "700",
	},
});
