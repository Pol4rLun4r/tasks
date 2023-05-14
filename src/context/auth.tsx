import { ReactNode, createContext, useState } from "react";

interface IAuthProv {
    children: ReactNode
}

interface IAuthContext {
    auth: {}
    setAuth: React.Dispatch<React.SetStateAction<{}>>
    persist: boolean
    setPersist: any
}

const IAuthContextState = {
    auth: {},
    setAuth: () => { },
    persist: JSON.parse(localStorage.getItem("persist") || "false"),
    setPersist: () => { }
}

const AuthContext = createContext<IAuthContext>(IAuthContextState);

export const AuthProvider = ({ children }: IAuthProv) => {
    const [auth, setAuth] = useState({});
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem("persist") || "false"));

    return (
        <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;