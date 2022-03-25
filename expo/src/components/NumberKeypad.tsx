import React, { useState } from "react";
import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import { useTailwind } from "tailwind-rn/dist";

const NumberKeypad = (props: {
	onConfirm: (value: string) => void;
}) => {
	const tw = useTailwind();

	const [value, setValue] = useState<string>("");

	return (
		<View>
			<View style={tw(`keypad-value`)}>
				<Text style={tw(`keypad-value-text`)}>{value}</Text>
			</View>
			<View style={tw("keypad")}>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, "remove", 0, "confirm"].map(
					(v) => {
						if (typeof v == "number" && ((v) => 0 && v <= 9)) {
							return (
								<TouchableHighlight
									key={`v-${v}-${Math.random()}`}
									style={tw(`keypad-button`)}
									onPress={() => {
										setValue(`${value}${v}`);
									}}
								>
									<Text style={tw(`keypad-button-text`)}>
										{v}
									</Text>
								</TouchableHighlight>
							);
						}

						if (v == "confirm") {
							return (
								<TouchableHighlight
									key={`v-${v}-${Math.random()}`}
									style={tw(`keypad-button`)}
									onPress={() => {
										props.onConfirm(value);
									}}
								>
									<Text style={tw(`keypad-button-text`)}>
										Enter
									</Text>
								</TouchableHighlight>
							);
						}

						if (v == "empty") {
							return (
								<View
									style={tw(`keypad-button`)}
									key={`v-${v}-${Math.random()}`}
								>
									<Text
										style={tw(`keypad-button-text`)}
									></Text>
								</View>
							);
						}

						if (v == "remove") {
							return (
								<TouchableHighlight
									style={tw(`keypad-button`)}
									key={`v-${v}-${Math.random()}`}
									onPress={() => {
										setValue(value.slice(0, -1));
									}}
								>
									<Text style={tw(`keypad-button-text`)}>
										Wis
									</Text>
								</TouchableHighlight>
							);
						}

						// Default
						return (
							<View
								key={`v-${v}-${Math.random()}`}
								style={tw(`keypad-button`)}
							>
								<Text style={tw(`keypad-button-text`)}>?</Text>
							</View>
						);
					}
				)}
			</View>
		</View>
	);
};

export default NumberKeypad;
