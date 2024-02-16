
import { createContext } from "react";

export const BaseUrlContext = createContext();



export function BaseUrlContextProvider({children}) {
    // https://retailxpress.herokuapp.com/api/v1
    //http://localhost:1445/api/v1
    // http://143.198.155.229/api/v1
    const API_BASE_URL = 'https://retailxpress.herokuapp.com/api/v1';



    return (
        <BaseUrlContext.Provider value={API_BASE_URL}>
            {children}

        </BaseUrlContext.Provider>
    )
}

;
