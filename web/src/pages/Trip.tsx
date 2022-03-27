import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import Trip from "../types/Trip";
import {NavigationStates} from "../states/navigation";
import {InfoStates} from "../states/info";
import moment from "moment";
import * as turf from "@turf/turf";

let updateInterval: NodeJS.Timer;

function TripIndicator(props: { trip: Trip }) {
    const [page, setPage] = useRecoilState(NavigationStates.page);
    const [currentTrip, setCurrentTrip] = useRecoilState(InfoStates.currentTrip);

    return (
        <div className={`flex items-center justify-center`}>
            <div
                onClick={() => {
                    setPage('shift');
                    setCurrentTrip(null);
                    clearInterval(updateInterval);
                }}
                className={`text-blue-500 font-semibold flex-grow p-2`}
            >Terug
            </div>
            {/*<div className={`flex flex-row items-center justify-center`}>*/}
            {/*    <div className={'p-2 m-1 rounded text-white bg-blue-500'}>{props.trip.id}</div>*/}
            {/*    <div className={'p-2 m-1'}>*/}
            {/*        {props.trip.logical_route[0].route[0].code} - {props.trip.logical_route[props.trip.logical_route.length - 1].route[props.trip.logical_route[props.trip.logical_route.length - 1].route.length - 1].code}*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={`flex flex-grow opacity-0`}>Mijn dienst</div>*/}
        </div>
    );
}

function TripOverview(props: {
    trip: Trip,
    pointOffset: number,
    pointProperties: {
        [key in string]: {
            arrived: boolean;
            departed: boolean;
            distance: number;
        }
    }
}) {
    console.log('props', props.pointProperties);

    return (
        <>
            {props.trip.logical_route.map(logicalRoute => {
                return (
                    <div className={`p-1`}>
                        <div className={`p-1`}>{logicalRoute.id}</div>
                        <div className={`p-1 flex flex-col`}>{
                            logicalRoute.route.map((routePoint, index: number) => {
                                return index >= props.pointOffset && (
                                    <div
                                        key={Math.random()}
                                        className={`flex h-20 items-center`}
                                    >
                                        <div className={`w-1/4`}>
                                            {routePoint.arrival?.planned && routePoint.arrival?.planned != routePoint.departure?.planned && (
                                                <div>
                                                    A <span
                                                    className={`text-2xl`}>{moment(routePoint.arrival?.planned).format('HH:mm')}</span>
                                                </div>
                                            )}
                                            {routePoint.departure?.planned && (
                                                <div>
                                                    V <span
                                                    className={`text-2xl`}>{moment(routePoint.arrival?.planned).format('HH:mm')}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className={`w-1/4 relative flex items-center justify-center`}>
                                            {logicalRoute.route.length - 1  - props.pointOffset != index - props.pointOffset && index  - props.pointOffset != 0 - props.pointOffset && (
                                                <div className={`absolute h-20 border-l-2 border-r-2 w-0`}>&nbsp;</div>
                                            )}
                                            {index - props.pointOffset == 0 && (
                                                <div
                                                    className={`absolute h-10 border-l-2 border-r-2 w-0 mt-12`}>&nbsp;</div>
                                            )}
                                            {logicalRoute.route.length - 1 - props.pointOffset == index - props.pointOffset && (
                                                <div
                                                    className={`absolute h-10 border-l-2 border-r-2 w-0 mb-12`}>&nbsp;</div>
                                            )}
                                            <div className={`border-2 z-10 rounded-full
                                                ${routePoint.stops.actual ? 'w-6 h-6' : 'w-4 h-4 bg-white'} 
                                                ${routePoint.stops.actual == routePoint.stops.planned ? 'border-blue-600 bg-blue-600' : 'border-red-600 bg-red-600'} 
                                            `}>&nbsp;</div>
                                        </div>
                                        <div className={`w-1/4 text-2xl`}>
                                            {routePoint.code}
                                        </div>
                                        <div className={`w-1/4 text-2xl`}>
                                            {/*{*/}
                                            {/*    props.pointProperties && props.pointProperties[routePoint.code] && <div>*/}
                                            {/*        {*/}
                                            {/*            props.pointProperties[routePoint.code].arrived && <div>Arrived</div>*/}
                                            {/*        }*/}
                                            {/*        /!*{*!/*/}
                                            {/*        /!*    props.pointProperties[routePoint.code].distance && <div>{props.pointProperties[routePoint.code].distance}</div>*!/*/}
                                            {/*        /!*}*!/*/}
                                            {/*    </div>*/}
                                            {/*}*/}
                                        </div>
                                    </div>
                                )
                            })
                        }</div>
                    </div>
                );
            })}
        </>
    );
}

export default function TripScreen() {
    const [page, setPage] = useRecoilState(NavigationStates.page);
    const [currentTrip, setCurrentTrip] = useRecoilState(InfoStates.currentTrip);
    const [tripInfo, setTripInfo] = useState<Trip>();
    const [pointOffset, setPointOffset] = useState<number>(0);
    const [pointProperties, setPointProperties] = useState<{
        [key in string]: {
            arrived: boolean;
            departed: boolean;
            distance: number;
        }
    }>({});

    function update(position: GeolocationPosition) {
        let tmpPointPropeties = Object.assign({}, pointProperties);

        if (currentTrip) {
            currentTrip.logical_route.forEach(route => {
                route.route.forEach((routePoint, index) => {
                    // console.log(routePoint.code, routePoint.location);
                    let dist = turf.distance(
                        turf.point([routePoint.location.lon, routePoint.location.lat]),
                        turf.point([position.coords.longitude, position.coords.latitude]),
                    );

                    tmpPointPropeties[routePoint.code] = {
                        arrived: dist < 1,
                        departed: false,
                        distance: dist
                    }

                    if (dist < 0.300) {
                        setPointOffset(index);
                    }
                });
            });
        }

        setPointProperties(tmpPointPropeties);


    }

    useEffect(() => {
        if (currentTrip) {
            setTripInfo(currentTrip);
        }

        navigator.geolocation.watchPosition((position => {
            update(position);
        }), (error) => {
            alert(error);
            console.error(error);
        }, {
            enableHighAccuracy: true,
            maximumAge: 5000,
            timeout: 5000
        });

        // clearInterval(updateInterval);
        // updateInterval = setInterval(() => {
        // }, 5000);
    }, []);


    return (
        <div className={`p-2 flex flex-col`}>
            {
                tripInfo && <TripIndicator trip={tripInfo}/>
            }
            {
                tripInfo && <TripOverview trip={tripInfo} pointProperties={pointProperties} pointOffset={pointOffset}/>
            }
        </div>
    )
}