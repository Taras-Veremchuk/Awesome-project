import {
	ImageBackground,
	KeyboardAvoidingView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
// import { Stack, IconButton } from "@react-native-material/core";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	updateProfile,
} from "firebase/auth";
import {
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
} from "./ScreenStyles";

const RegistrationScreen = () => {
	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigation = useNavigation();

	// useEffect(() => {
	// 	const unsubscribe = auth.onAuthStateChanged((user) => {
	// 		if (user) {
	// 			navigation.navigate("Login");
	// 		}
	// 	});
	// 	return unsubscribe;
	// }, []);

	const handleRegister = () => {
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userCredentials) => {
				const user = userCredentials.user;
				console.log("Registered in with:", user.email);
			})
			.catch((error) => alert(error.message));
	};

	const handleLogin = () => {
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userCredentials) => {
				const user = userCredentials.user;
				console.log("Logged in with:", user.email);
			})
			.catch((error) => alert(error.message));
	};

	const LoginScreen = () => {
		const [isShowKeyboard, setIsShowKeyboard] = useState(false);

		const handleFocus = () => {
			setIsShowKeyboard(true);
		};
		const handleKeyboardHide = () => {
			setIsShowKeyboard(false);
			Keyboard.dismiss();
		};
	};

	return (
		<KeyboardAvoidingView
			style={keyboardView}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<ImageBackground style={image} source={require("../assets/night-2.png")}>
				<View style={wrapper}>
					<Text style={title}>Register</Text>
					<View style={inputContainer}>
						<TextInput
							placeholder="Login"
							value={login}
							onChangeText={(text) => setLogin(text)}
							style={input}
						/>
						<TextInput
							placeholder="Email"
							value={email}
							onChangeText={(text) => setEmail(text)}
							style={input}
						/>
						<TextInput
							placeholder="Password"
							value={password}
							onChangeText={(text) => setPassword(text)}
							style={input}
							secureTextEntry
						/>
					</View>
					<View style={buttonContainer}>
						<TouchableOpacity onPress={handleRegister} style={button}>
							<Text style={buttonText}>Register</Text>
						</TouchableOpacity>
						<Text style={box}>
							Already have an account?
							<Text
								style={registerText}
								onPress={() => navigation.navigate("Login")}
							>
								{""} Sign in
							</Text>
						</Text>
					</View>
				</View>
			</ImageBackground>
		</KeyboardAvoidingView>
	);
};

export default RegistrationScreen;
