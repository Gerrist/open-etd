import { TailwindProvider, useTailwind } from "tailwind-rn";
import utilities from "./tailwind.json";
import { SafeAreaView, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import MainScreen from "../src/screens/Main";
import LocationCheckScreen from "../src/screens/LocationCheck";
import Timetable from '../src/screens/Timetable';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<TailwindProvider utilities={utilities}>
			<SafeAreaView style={{ height: "100%" }}>
				<StatusBar barStyle="light-content" />
				<NavigationContainer>
					<Stack.Navigator initialRouteName="Main">
						<Stack.Screen
							name="Main"
							component={MainScreen}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="LocationCheck"
							component={LocationCheckScreen}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="Timetable"
							component={Timetable}
							options={{ headerShown: false }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaView>
		</TailwindProvider>
	);
}
