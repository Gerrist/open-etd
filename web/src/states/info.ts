import {atom} from "recoil";

export namespace InfoStates {
    export const currentTrip = atom<{
        id: number,
        date: string
    } | null>({
        key: 'currentTrip',
        default: {
            id: -1,
            date: ''
        }
    });
}