import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const useLogged = ():boolean => {

  const { user } = useContext(UserContext);
  return user?.token ? true : false;
}