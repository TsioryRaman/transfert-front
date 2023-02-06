import React,{createContext } from "react";

export const UserContext = createContext({
    user:null,
    setUser: () => {}
})
export const UserContextProvider = UserContext.Provider;