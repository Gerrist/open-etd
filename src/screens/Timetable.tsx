import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
	SafeAreaView,
	View,
	Text,
	ActivityIndicator,
	ScrollView,
} from "react-native";
import { useTailwind } from "tailwind-rn";
import TripTimetable from "../components/TripTimetable";
import Trip from "../types/Trip";

export default function Timetable({ route }) {
	// console.log(route.params.train);
	const tailwind = useTailwind();

	const [error, setError] = useState<string | null>(null);
	const [message, setMessage] = useState<string | null>("");
	const [trip, setTrip] = useState<Trip | null>(null);

	useEffect(() => {
		setMessage("Laden...");
		try {
			(async () => {
				let trip: {
					success: boolean;
					error?: string;
					trip?: Trip;
				} = (
					await axios.get(
						`https://liveov.com/api/trip/${
							route.params.train
						}/${moment().format("YYYY-MM-DD")}`
					)
				).data;

				// setLoading(false);

				if (trip.success) {
					setTrip(trip.trip);
					setMessage(
						`${trip.trip.type} ${trip.trip.id} (${
							trip.trip.route[0].code
						}-${trip.trip.route[trip.trip.route.length - 1].code})`
					);
				} else {
					throw trip.error;
				}
			})();
		} catch (e) {
			setMessage(null);
			setError(`Fout bij ophalen ritgegevens: ${e}`);
		}
	}, []);

	return (
		<View style={tailwind("h-full bg-gray-900 flex flex-col")}>
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
			{trip != null && (
				<View>
					<View style={tailwind("bg-gray-700 p-4")}>
						<Text
							style={tailwind(
								"font-semibold text-white text-center"
							)}
						>
							Tijd tot aankomst WTV
						</Text>
						<Text
							style={tailwind(
								"font-semibold text-white text-center text-3xl"
							)}
						>
							<Text style={tailwind("font-bold")}>
								3 min 44 sec
							</Text>
						</Text>
					</View>
					<ScrollView>
						<TripTimetable trip={trip} />
					</ScrollView>
				</View>
			)}
		</View>
	);
}
