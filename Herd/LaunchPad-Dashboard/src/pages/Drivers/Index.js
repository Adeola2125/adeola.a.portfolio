import DriverPage from "./DriverPage.js";
import DriversRiders from "./Drivers_Riders/DriversRiders.js";
import { useAuth } from 'src/hooks/useAuth';

export default function OnboardIndex() {
    const { data } = useAuth();


    return data.type === "transport" ? (
        <DriverPage />
    ) : (
        <DriversRiders />
    )
}