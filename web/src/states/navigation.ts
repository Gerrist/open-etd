import {atom} from "recoil";

export namespace NavigationStates {
    export const page = atom<'shift' | 'home' | 'trip'>({
        key: 'page',
        default: 'shift'
    });
}