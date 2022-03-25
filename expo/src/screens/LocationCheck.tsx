import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import Button from "../components/Button";
import * as Location from "expo-location";

export default function LocationCheckScreen({ route, navigation }) {
	// console.log(route.params.train);
	const tailwind = useTailwind();

	const [error, setError] = useState<string | null>(null);
	const [message, setMessage] = useState<string | null>(
		"Voer treinnummer in"
	);

	useEffect(() => {
		(async () => {
			let locationStatus = await Location.getForegroundPermissionsAsync();

			if(locationStatus.granted) {
				navigation.navigate('Timetable', {
					train: route.params.train
				})
			}
		})();
	}, []);

	return (
		<View style={tailwind("h-full bg-gray-900 flex flex-col justify-end")}>
			<View style={tailwind("m-2 p-2")}>
				<Text style={tailwind("text-white text-2xl")}>
					We hebben je positiegegevens nodig om de dienstregeling op
					de juiste manier weer te geven. De dienstregeling-weergave functioneert
					alleen goed als je je daadwerkelijk in de opgegeven trein bevind.
				</Text>
			</View>
			<Button
				text="Toestemming geven"
				onPress={async () => {
					let { status } =
						await Location.requestForegroundPermissionsAsync();

					if (status !== "granted") {
						setError("Toestemming voor locatie geweigerd");
						return;
					} else {
						setError(null);
						navigation.navigate('Timetable', {
							train: route.params.train
						})
					}
				}}
			/>
			{error != null && (
				<View style={tailwind("bg-red-500 p-4")}>
					<Text
						style={tailwind(
							"font-semibold text-white text-center text-xl"
						)}
					>
						{error}
					</Text>
				</View>
			)}
		</View>
	);
}
