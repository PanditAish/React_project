import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) =>{
    const [isAuth, setIsAuth] = useState((localStorage.getItem("isAuth")) ? true : false);

    const [user, setUser] = useState((localStorage.getItem("user")) ?? null);
    return (
        <GlobalContext.Provider value={{
            auth:[isAuth, setIsAuth],
            users:[user, setUser]
        }}>
         {children}
        </GlobalContext.Provider>
    )
};

export default GlobalContext;