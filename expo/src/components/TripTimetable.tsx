import moment from "moment";
import React from "react";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import Trip from "../types/Trip";

const TripTimetable = (props: { trip: Trip }) => {
	const tw = useTailwind();

	return (
		<View
			style={
				{
					// marginTop: -85*2
				}
			}
		>
			{props.trip.route.map((point, index) => {
				// console.log(point);
				return (
					<View
						key={Math.random()}
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<View
							style={{
								padding: 10,
								width: 120,
							}}
						>
							<View
								style={{
									flex: 1,
									flexDirection: "column",
									justifyContent: "center",
								}}
							>
								{point.arrival != null && (
									<Text style={tw(`text-white text-xl`)}>
										A{" "}
										<Text style={tw(`font-bold text-2xl`)}>
											{moment(
												point.arrival * 1000
											).format("HH:mm")}
										</Text>
									</Text>
								)}
								{/* {point.arrival == null &&
									point.departure != null &&
									index > 0 &&
									point.stops && (
										<Text style={tw(`text-white text-2xl`)}>
											A{" "}
											<Text style={tw(`font-bold`)}>
												{moment(
													point.departure * 1000
												).format("HH:mm")}
											</Text>
										</Text>
									)} */}
								{point.departure != null && (
									<Text style={tw(`text-white text-xl`)}>
										<Text
											style={tw(
												`text-xl ${
													point.stops
														? ""
														: "text-transparent"
												}`
											)}
										>
											V{" "}
										</Text>
										<Text style={tw(`font-bold text-2xl`)}>
											{moment(
												point.departure * 1000
											).format("HH:mm")}
										</Text>
									</Text>
								)}
							</View>
						</View>
						<View
							style={{
								width: 10,
								height: 85,
								marginRight: 20,
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<View
								style={{
									height:
										index == 0 ||
										index == props.trip.route.length - 1
											? 85 / 2
											: 85,
									position: "absolute",
									paddingTop: index == 0 ? 85 / 3 : 0,
								}}
							>
								<View
									style={{
										borderRightWidth: 2,
										borderColor: "#ffffff",
										borderStyle: "solid",
										marginRight: 2,
										height: index == 0 ? 85 / 2 : 85,
									}}
								>
									<Text> </Text>
								</View>
							</View>
							<View
								style={{
									...tw(
										`absolute rounded-full border border-white w-5 h-5 ${
											point.stops
												? "bg-white"
												: "border-transparent"
										}`
									),
									zIndex: 10,
								}}
							>
								<Text> </Text>
							</View>
						</View>
						<View>
							<Text style={tw(`text-white text-3xl`)}>
								{point.code}
							</Text>
						</View>
					</View>
				);
			})}
		</View>
	);
};

export default TripTimetable;
