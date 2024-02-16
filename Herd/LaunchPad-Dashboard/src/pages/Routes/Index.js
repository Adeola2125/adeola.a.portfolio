import Logistics from "./Logistics.js";
import Transport from "./Transport.js";
import { useAuth } from 'src/hooks/useAuth';

export default function RouteIndex() {
    const { data } = useAuth();
    
    


    return (
        data.type === "transport" ? <Transport /> : <Logistics />
    );

}