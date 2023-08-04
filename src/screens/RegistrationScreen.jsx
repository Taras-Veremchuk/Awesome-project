import { useState } from "react";
import {
	Image,
	Text,
	View,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
	ImageBackground,
	KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import userImg from "../images/userImage.png";
import InputField from "../components/InputField";
import Button from "../components/Button";
import {
	containerStyle,
	errorMessage,
	inputWrapper,
	textPassword,
	showText,
	text,
	textLink,
	textColor,
	title,
	addImageBtn,
	container,
	imageWrapper,
	placeholderImage,
	screenWrapper,
	userImage,
	wrapper,
} from "./ScreensStyles";

const RegistrationForm = () => {
	const [isReg, setIsReg] = useState(false);
	const [hidePassword, setHidePassword] = useState(true);
	const [loginText, setLoginText] = useState("");
	const [emailText, setEmailText] = useState("");
	const [passwordText, setPasswordText] = useState("");
	const navigation = useNavigation();
	const [validation, setValidation] = useState({
		login: { error: false, errorMessage: "" },
		email: { error: false, errorMessage: "" },
		password: { error: false, errorMessage: "" },
	});
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	const handleLoginChange = (text) => {
		setLoginText(text);
		setValidation((prevState) => ({
			...prevState,
			login: {
				...prevState.login,
				error: false,
				errorMessage: "",
			},
		}));
	};

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
			login: {
				error: !loginText.trim(),
				errorMessage: !loginText.trim() ? "Login is a required field" : "",
			},
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
			loginText,
			emailText,
			passwordText,
		};
		console.log(submitData);

		setLoginText("");
		setEmailText("");
		setPasswordText("");

		navigation.navigate("Home");
	};

	const handlePasswordFocus = () => {
		setHidePassword(true);
	};

	const onPressLogin = () => {
		navigation.navigate("Login");
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
					<View style={wrapper}>
						<View style={imageWrapper}>
							{isReg ? (
								<Image source={userImg} style={userImage} />
							) : (
								<View style={placeholderImage} />
							)}
							<TouchableOpacity style={addImageBtn}>
								<AntDesign size={25} color="#FF6C00" name="pluscircleo" />
							</TouchableOpacity>
						</View>
						<Text style={title}>Register</Text>
						{Object.values(validation).some((field) => field.error) && (
							<Text style={errorMessage}>
								All fields are required to be filled
							</Text>
						)}
						<InputField
							placeholder="Login"
							value={loginText}
							onChangeText={handleLoginChange}
							errorMessage={
								validation.login.error ? validation.login.errorMessage : ""
							}
						/>
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
								style={textPassword}
								onPress={() => {
									setHidePassword(!hidePassword);
								}}
							>
								<Text style={[textColor, showText]}>
									{hidePassword ? "Show" : "Hide"}
								</Text>
							</TouchableOpacity>
							<Button onPress={handleSubmit} title="Register" />
							<TouchableOpacity onPress={onPressLogin}>
								<Text style={text}>
									Already have an account?
									<Text style={textLink}>{""} Sign in</Text>
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</ImageBackground>
	);
};
export default RegistrationForm;
