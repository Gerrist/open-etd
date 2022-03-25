type Trip = {
    date: string;
    id: number;
    logical_route: {
        id: number;
        route: {
            "code": string,
            "stops": {
                "actual": boolean,
                "planned": boolean
            },
            "platform"?: {
                "actual": string,
                "planned": string
            },
            "arrival"?: {
                "actual": string,
                "planned": string
            },
            "departure"?: {
                "actual": string,
                "planned": string
            },
            "location": {
                "lat": number,
                "lot": number
            }
        }[];
    }[];
};

export default Trip;
