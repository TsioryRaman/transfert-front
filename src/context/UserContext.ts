import React, { createContext } from "react";

interface User {
  token?: string;
}

export const UserContext = createContext({
  user: {
    token: "",
    isAuthenticated:false
  },
  handleLogin: (user: User) => {},
});
export const UserContextProvider = UserContext.Provider;
