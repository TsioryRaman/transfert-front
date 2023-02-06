import React,{createContext } from "react";

export const value = {}

export const UserContext = createContext({
    user:null,
    setUser: () => {}
})
export const UserContextProvider = UserContext.Provider;