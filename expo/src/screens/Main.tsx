import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import NumberKeypad from "../components/NumberKeypad";

export default function MainScreen({ navigation }) {
	const tailwind = useTailwind();

	const [error, setError] = useState<string | null>(null);
	const [message, setMessage] = useState<string | null>(
		"Voer treinnummer in"
	);

	const onConfirm = async (value: string) => {
		try {
			if (value == "") {
				setError("Treinnummer mag niet leeg zijn");
				setMessage(null);
			} else {
				setMessage("Laden...");
				setError(null);

				let trip: {
					success: boolean;
					error?: string;
					trip?: any;
				} = (
					await axios.get(
						`https://liveov.com/api/trip/${value}/${moment().format("YYYY-MM-DD")}`
					)
				).data;

				if (!trip.success) {
					setError("Trein niet gevonden");
					setMessage(null);
				} else {
					setError(null);
					setMessage("Verwerken...");
                    navigation.navigate('LocationCheck', {
                        train: value
                    });
				}
			}
		} catch (e) {
			if (e.response.status == 404) {
				setError("Trein niet gevonden");
				setMessage(null);
			} else {
                console.warn(e);
                setError("Probleem met laden van gegevens");
                setMessage(null);
            }
		}
	};

	return (
		<View style={tailwind("h-full bg-gray-900 flex flex-col")}>
			<View style={tailwind("flex-grow")}>
				<Text> </Text>
			</View>
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
			{message != null && (
				<View style={tailwind("p-4")}>
					<Text
						style={tailwind(
							"font-semibold text-white text-center text-xl"
						)}
					>
						{message}
					</Text>
				</View>
			)}
			<NumberKeypad onConfirm={onConfirm} />
		</View>
	);
}
