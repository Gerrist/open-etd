import React, { useState } from "react";
import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import { useTailwind } from "tailwind-rn/dist";

const Button = (props: { text: string; onPress: () => void }) => {
	const tw = useTailwind();

	return (
		<TouchableHighlight
			onPress={props.onPress}
			style={tw(`p-6 bg-gray-600`)}
		>
			<Text
				style={tw(
					`text-white text-2xl font-semibold uppercase text-center`
				)}
			>
				{props.text}
			</Text>
		</TouchableHighlight>
	);
};

export default Button;
