import { useContext } from 'react';
import { AuthContext } from 'src/context/AuthContext';

export const useAuth = () => {
    const context = useContext(AuthContext);

    if(context === undefined) throw new Error("useAuth() auth can only be used inside a provide")


    return context;
}
