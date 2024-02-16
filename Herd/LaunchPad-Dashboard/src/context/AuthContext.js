import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':

            return {...state, data: action.payload};
            
            // break;
        
    
        default:
            return state
            // break;
    }

}

export function AuthContextProvider({children}) {
    let data = localStorage.getItem("auth")  ? JSON.parse(localStorage.getItem("auth")) : {};

    const [state, dispatch] = useReducer(authReducer, {
        data
    });


    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}

        </AuthContext.Provider>
    )
}

;