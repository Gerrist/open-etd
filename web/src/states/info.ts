import {atom} from "recoil";
import Trip from "../types/Trip";

export namespace InfoStates {
    export const currentTrip = atom<Trip | null>({
        key: 'currentTrip',
        default: null
    });
}