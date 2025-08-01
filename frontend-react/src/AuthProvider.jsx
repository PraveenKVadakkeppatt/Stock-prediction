import { createContext, useState } from "react";


const AuthContext = createContext();
const AuthProvider = ({children}) =>{
    const [isLogedIn, setLogedIn] = useState(
        localStorage.getItem('accessToken')
    )
    return(
        <AuthContext.Provider value={{isLogedIn, setLogedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
export {AuthContext}