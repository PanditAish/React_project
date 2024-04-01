import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) =>{
    const [isAuth, setIsAuth] = useState((localStorage.getItem("isAuth")) ? true : false);

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) ?? null);

    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")) || []);

    return (
        <GlobalContext.Provider value={{
            auth:[isAuth, setIsAuth],
            users:[user, setUser],
            userData:[userData, setUserData]
        }}>
         {children}
        </GlobalContext.Provider>
    )
};

export default GlobalContext;