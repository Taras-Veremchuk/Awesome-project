import React, { Children } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
	useFonts,
	Roboto_400Regular,
	Roboto_500Medium,
	Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import PostsScreen from "./src/screens/PostsScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import LoginScreen from "./src/screens/LoginScreen";
import CreatePostsScreen from "./src/screens/CreatePostsScreen";
import CommentsScreen from "./src/screens/CommentsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import MapsScreen from "./src/screens/MapsScreen";

const MainStack = createStackNavigator();
export default function App() {
	const [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_500Medium,
		Roboto_700Bold,
		// Roboto_400Regular: require("./assets/fonts/Roboto-Regular.ttf"),
		// Roboto_500Medium: require("./assets/fonts/Roboto-Medium.ttf"),
		// Roboto_700Bold: require("./assets/fonts/Roboto-Bold.ttf"),
	});
	if (!fontsLoaded) {
		return null;
	}
	return (
		<NavigationContainer>
			<MainStack.Navigator initialRouteName="Login">
				<MainStack.Screen
					options={{ headerShown: false }}
					name="Registration"
					component={RegistrationScreen}
				/>

				<MainStack.Screen
					options={{ headerShown: false }}
					name="Login"
					component={LoginScreen}
				/>
				<MainStack.Screen
					options={{ headerShown: false }}
					name="Home"
					component={PostsScreen}
				/>
				{/* <CreatePostsScreen />
        <CommentsScreen />
        <ProfileScreen />
        <MapsScreen />
        <HomeScreen /> */}
			</MainStack.Navigator>
		</NavigationContainer>
	);
}
