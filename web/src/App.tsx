import {useRecoilState} from "recoil";
import {NavigationStates} from "./states/navigation";

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
                    <h1 className="text-3xl font-bold underline">
                        Page Shift placeholder
                    </h1>
                )
            }
            {
                page == 'trip' && (
                    <h1 className="text-3xl font-bold underline">
                        Page Trip placeholder
                    </h1>
                )
            }
        </>
    )
}