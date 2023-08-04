import {
	ImageBackground,
	KeyboardAvoidingView,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
	login,
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
import { KeyboardAwareScrollView } from "@pietile-native-kit/keyboard-aware-scrollview";

const LoginScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigation = useNavigation();

	const handleSignIn = () => {
		navigation.navigate("Posts");
	};

	return (
		// <KeyboardAvoidingView
		// 	style={keyboardView}
		// 	enabled
		// 	behavior={Platform.OS === "ios" ? "padding" : "height"}
		// >
		<View style={keyboardView}>
			<ImageBackground style={image} source={require("../assets/night-2.png")}>
				<View style={[wrapper, login]}>
					<Text style={title}>Login</Text>
					{/* <View style={inputContainer}> */}
					{/* <ScrollView> */}

					<KeyboardAvoidingView
						style={inputContainer}
						behavior={Platform.OS === "ios" ? "padding" : "height"}
					>
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
					</KeyboardAvoidingView>
					{/* </ScrollView> */}
					{/* </View> */}
					<View style={buttonContainer}>
						<TouchableOpacity onPress={handleSignIn} style={button}>
							<Text style={buttonText}>Login</Text>
						</TouchableOpacity>
						<Text style={box}>
							Don't have an account?
							<Text
								style={registerText}
								onPress={() => navigation.navigate("Registration")}
							>
								{""} Register now
							</Text>
						</Text>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
};

export default LoginScreen;
