import axios from "axios";
import moment from "moment";
import React, {useEffect, useState} from "react";
import {
    SafeAreaView,
    View,
    Text,
    ActivityIndicator,
    ScrollView,
} from "react-native";
import {useTailwind} from "tailwind-rn";
import TripTimetable from "../components/TripTimetable";
import Trip from "../types/Trip";
import * as Location from "expo-location";

export default class Timetable extends React.Component<{ route: any }, {
    error: string | null,
    message: string | null,
    trip: Trip | null,
    status: {
        status: "loading"
            | "waitingOnPosition"
            | "arrived"
            | "departed"
            | "ready"
    };
}> {
    componentWillMount() {
        this.setState({
            error: null,
            message: null,
            trip: null,
            status: {
                status: "loading"
            }
        });
    }

    componentDidMount() {
        let {route} = this.props;

        this.setState({...this.state, message: "Laden..."});

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
                    this.setState({
                        ...this.state,
                        message: `${trip.trip.type} ${trip.trip.id} (${trip.trip.route[0].code}-${trip.trip.route[trip.trip.route.length - 1].code})`,
                        trip: trip.trip,
                        status: {status: "waitingOnPosition"}
                    });
                    // runSync();

                } else {
                    throw trip.error;
                }
            })();
        } catch (e) {
            this.setState({...this.state, message: null, error: `Fout bij ophalen ritgegevens: ${e}`});
        }
    }

    render() {
        let {route} = this.props;
        // console.log(route.params.train);
        const tailwind = useTailwind();

        // const [error, setError] = useState<string | null>(null);
        // const [message, setMessage] = useState<string | null>("");
        // const [trip, setTrip] = useState<Trip | null>(null);
        // const [status, setStatus] = useState<{
        //     status:
        //         | "loading"
        //         | "waitingOnPosition"
        //         | "arrived"
        //         | "departed"
        //         | "ready";
        // }>({
        //     status: "loading",
        // });

        async function runSync() {
            await Location.getCurrentPositionAsync();
            Location.watchPositionAsync(
                {
                    // timeInterval: 5*1000
                    distanceInterval: 0,
                    accuracy: Location.Accuracy.Highest,
                },
                (location) => {
                    this.setState({...this.state, message: "ready"});
                    console.log(
                        this.state.status.status,
                        location.coords.latitude,
                        location.coords.longitude,
                        location.coords.speed
                    );
                }
            );
        }

        // useEffect(() => {
        // 	if (status.status != "loading") {
        // 		setTimeout(() => {
        // 			update();
        // 		}, 5000);
        // 		update();
        // 	}
        // }, [trip]);

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
                        <View
                            style={tailwind(
                                "bg-gray-700 h-1/6 flex items-center justify-center"
                            )}
                        >
                            {status.status == "loading" && (
                                <Text
                                    style={tailwind(
                                        "font-semibold text-white text-center text-2xl"
                                    )}
                                >
                                    <Text style={tailwind("font-bold")}>
                                        Dienstregeling ophalen
                                    </Text>
                                </Text>
                            )}
                            {status.status == "waitingOnPosition" && (
                                <Text
                                    style={tailwind(
                                        "font-semibold text-white text-center text-2xl"
                                    )}
                                >
                                    <Text style={tailwind("font-bold")}>
                                        Wachten op positie
                                    </Text>
                                </Text>
                            )}
                            {status.status == "ready" && (
                                <Text
                                    style={tailwind(
                                        "font-semibold text-white text-center text-2xl"
                                    )}
                                >
                                    <Text style={tailwind("font-bold")}>
                                        Wachten
                                    </Text>
                                </Text>
                            )}
                        </View>
                        <ScrollView>
                            <TripTimetable trip={trip}/>
                        </ScrollView>
                    </View>
                )}
            </View>
        );
    }
}
