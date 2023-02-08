import React, { createContext } from "react";

interface User {
    token?: string;
}

export const UserContext = createContext({
    user: { token: '' },
    handleLogin: (user: {}) => { }
})
export const UserContextProvider = UserContext.Provider;