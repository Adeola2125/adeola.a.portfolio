import TripsDashboard from "./TripsDashboard";
import LogisticsDashboard from "./LogisticsDashboard";
import { useAuth } from 'src/hooks/useAuth';

export default function OnboardIndex() {
    const {data} = useAuth();
    
    
    return data.type === "transport"  ?  (
        <TripsDashboard />  
    ) : (
      <LogisticsDashboard />
    )
}