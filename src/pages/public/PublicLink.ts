import { LinkType } from "../../Types/LinkType";
import {BiUser} from "react-icons/bi";

export const MainLinkPublic:Array<LinkType> = 
[
    {
      name:"Login",
      link:"/login",
      icon: BiUser
    },
    {
      name:"Signup",
      link:"/signup"
    }
];