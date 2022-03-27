import {useRecoilState} from "recoil";
import {NavigationStates} from "./states/navigation";
import Shift from "./pages/Shift";
import TripScreen from "./pages/Trip";

export default function App() {
    const [page, setPage] = useRecoilState(NavigationStates.page);

    return (
        <>
            {
                page == 'home' && (
                    <h1 className="text-3xl font-bold underline">
                        Page Home placeholder
                    </h1>
                )
            }
            {
                page == 'shift' && (
                    <Shift />
                )
            }
            {
                page == 'trip' && (
                    <TripScreen />
                )
            }
        </>
    )
}