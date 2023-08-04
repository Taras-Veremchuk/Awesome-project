import React, { useState } from "react";
import {
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
	ImageBackground,
	KeyboardAvoidingView,
} from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import {
	inputWrapper,
	screenWrapper,
	container,
	text,
	loginTitle,
	textLink,
	passwordPosition,
	textColor,
	loginWrapper,
	loginErrorMessage,
} from "./ScreensStyles";

const LoginForm = () => {
	const [hidePassword, setHidePassword] = useState(true);
	const [emailText, setEmailText] = useState("");
	const [passwordText, setPasswordText] = useState("");
	const [validation, setValidation] = useState({
		email: { error: false, errorMessage: "" },
		password: { error: false, errorMessage: "" },
	});
	const navigation = useNavigation();
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	const handleEmailChange = (text) => {
		setEmailText(text);
		setValidation((prevState) => ({
			...prevState,
			email: {
				...prevState.email,
				error: !text.trim() || !emailRegex.test(text),
				errorMessage: !text.trim()
					? "Please enter a valid email address"
					: !emailRegex.test(text)
					? "Email is not valid"
					: "",
			},
		}));
	};

	const handlePasswordChange = (text) => {
		setPasswordText(text);
		setValidation((prevState) => ({
			...prevState,
			password: {
				...prevState.password,
				error: false,
				errorMessage: "",
			},
		}));
	};
	const handleSubmit = () => {
		const newValidation = {
			email: {
				error: !emailText.trim() || !emailRegex.test(emailText),
				errorMessage: !emailText.trim()
					? "Please enter a valid email address"
					: !emailRegex.test(emailText)
					? "Email is not valid"
					: "",
			},
			password: {
				error: !passwordText.trim(),
				errorMessage: !passwordText.trim()
					? "Password is a required field"
					: "",
			},
		};
		setValidation(newValidation);

		if (Object.values(newValidation).some((input) => input.error)) {
			return;
		}

		const submitData = {
			emailText,
			passwordText,
		};
		console.log(submitData);

		setEmailText("");
		setPasswordText("");

		navigation.navigate("Home");
	};

	const handlePasswordFocus = () => {
		setHidePassword(true);
	};

	const onPressRegistration = () => {
		navigation.navigate("Registration");
	};

	return (
		<ImageBackground
			source={require("../images/night-2.png")}
			style={container}
			resizeMode="cover"
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					style={screenWrapper}
					keyboardVerticalOffset={-120}
				>
					<View style={loginWrapper}>
						<Text style={loginTitle}>Login</Text>
						{Object.values(validation).some((field) => field.error) && (
							<Text style={loginErrorMessage}>
								All fields are required to be filled
							</Text>
						)}
						<InputField
							placeholder="Email"
							value={emailText}
							onChangeText={handleEmailChange}
							errorMessage={
								validation.email.error ? validation.email.errorMessage : ""
							}
						/>

						<View style={inputWrapper}>
							<InputField
								secureTextEntry={hidePassword}
								placeholder="Password"
								value={passwordText}
								onChangeText={handlePasswordChange}
								onFocus={handlePasswordFocus}
								errorMessage={
									validation.password.error
										? validation.password.errorMessage
										: ""
								}
							/>

							<TouchableOpacity
								style={passwordPosition}
								onPress={() => {
									setHidePassword(!hidePassword);
								}}
							>
								<Text style={textColor}>{hidePassword ? "Show" : "Hide"}</Text>
							</TouchableOpacity>
							<Button onPress={handleSubmit} title="Login" />

							<TouchableOpacity onPress={onPressRegistration}>
								<Text style={text}>
									Don't have an account?
									<Text style={textLink}>{""} Register now</Text>
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</ImageBackground>
	);
};

export default LoginForm;
