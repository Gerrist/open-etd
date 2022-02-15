type Trip = {
	date: string;
	id: number;
	operator: string;
	type: string;
	path: any;
	route: {
		arrival?: number;
		arrivalDelay?: number;
		departure?: number;
		departureDelay?: number;
		code: string;
		shunt: boolean;
		stock: {
			number?: string;
			type?: string;
		};
		stops: boolean;
		stopsChanged: boolean;
		track: string;
		trackChanged: boolean;
	}[];
};

export default Trip;
