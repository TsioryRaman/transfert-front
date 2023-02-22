import { Text } from "@chakra-ui/react";
import { Location, NavLink, useLocation } from "react-router-dom"

interface LinkProps {
    to:string;
    name:string;
}

export const LinkActive:React.FC<LinkProps> = ({to,name}) => {

    return (<>
                <NavLink to={to}>
                {({ isActive }) =>
                    <Text padding="8" color={isActive?"green.500":"gray.600"}>{name}</Text>
                }
            </NavLink>
    </>)
} 