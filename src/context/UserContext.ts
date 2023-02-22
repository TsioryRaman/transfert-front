import React, { createContext } from "react";

export const USER = "user";

const user:User|undefined = JSON.parse(localStorage.getItem(USER) + "");

export interface User {
  token: string;
  isAuthenticated: boolean;
}


// Avoir la session de
export const getUserSession = () => ({
  token: user?.isAuthenticated ? user.token : "",
  isAuthenticated: user?.isAuthenticated ? true : false
});

export const UserContext = createContext<any>({
  user: {
    token: user?.isAuthenticated ? user?.token : "",
    isAuthenticated: user?.isAuthenticated ? true : false
  },
  handleLogin: (user: User) => {},
});
export const UserContextProvider = UserContext.Provider;
