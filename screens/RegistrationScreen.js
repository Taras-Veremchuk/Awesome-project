import {
	KeyboardAvoidingView,
	ImageBackground,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import BackgroundImage from "../assets/Background.png";
// import { auth } from "../firebase";

const RegistrationScreen = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigation = useNavigation();
	// if (!name || !email || !password) {
	// 	alert("Please fill all the fields");
	// 	return;
	// }
	const handleSignUp = () => {
		// auth
		// 	.createUserWithEmailAndPassword(email, password)
		// 	.then((userCredentials) => {
		// 		const user = userCredentials.user;
		// 		console.log(user.email);
		// 	})
		// 	.catch((error) => alert(error.message));

		// TODO: Sign up
		navigation.navigate("Login");
	};

	return (
		<KeyboardAvoidingView style={styles.container} bahavior="padding">
			<ImageBackground
				source={BackgroundImage}
				resizeMode="cover"
				style={styles.image}
			>
				<View style={styles.formContainer}>
					<Text style={styles.titleText}>Registration</Text>
					<View style={styles.inputContainer}>
						<TextInput
							placeholder="Name"
							value={name}
							onChangeText={(text) => setName(text)}
							style={styles.input}
						/>
						<TextInput
							placeholder="Email"
							value={email}
							onChangeText={(text) => setEmail(text)}
							style={styles.input}
						/>
						<TextInput
							placeholder="Password"
							value={password}
							onChangeText={(text) => setPassword(text)}
							style={styles.input}
							secureTextEntry
						/>
					</View>
					<View style={styles.buttonContainer}>
						<TouchableOpacity
							onPress={handleSignUp}
							style={[styles.button, styles.buttonOutline]}
						>
							<Text style={styles.buttonText}>Register</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		</KeyboardAvoidingView>
	);
};

export default RegistrationScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		// justifyContent: "center",
		// alignItems: "center",
	},
	formContainer: {
		backgroundColor: "white",
		display: "flex",
		alignItems: "center",
		height: "68%",
		marginTop: "auto",
		borderRadius: "25px",
	},
	inputContainer: {
		width: "95%",
	},
	input: {
		backgroundColor: "gray",
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 10,
		marginTop: 5,
	},
	buttonContainer: {
		width: "90%",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 40,
	},
	button: {
		backgroundColor: "#3b76e2",
		width: "100%",
		padding: 15,
		borderRadius: "50%",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: "#ffffff",
		fontSize: 18,
		fontWeight: "700",
	},
	image: {
		flex: 1,
		justifyContent: "center",
	},
	titleText: {
		fontSize: 25,
		fontWeight: "bold",
		color: "black",
	},
});
