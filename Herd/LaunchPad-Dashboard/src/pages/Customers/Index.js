import CustomerPage from "./CustomerPage";
import CustomerPage2 from "./CustomerPage2";
import { useAuth } from 'src/hooks/useAuth';

export default function OnboardIndex() {
    const {data} = useAuth();
    
    
    return data.type === "transport"  ?  (
        <CustomerPage />  
    ) : (
      <CustomerPage2 />
    )
}