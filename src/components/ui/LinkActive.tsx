import { Text, useColorModeValue } from "@chakra-ui/react";
import React, { Children, useContext, useState } from "react";
import { IconType } from "react-icons";
import { Location, NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { MainLinkPrivate } from "../../pages/private/PrivateLink";

interface LinkProps {
  to: string;
  name: string;
  Icon?:IconType
}

export const LinkActive: React.FC<LinkProps> = ({to, name }) => {
  const { user } = useContext(UserContext);
  const bg = useColorModeValue("gray.200","whiteAlpha.300")
  const location: Location = useLocation();
  const allowPrivateRoute: boolean = MainLinkPrivate.some((p) =>
    location.pathname.includes(p.link)
  );

  return (
    <>
      <NavLink to={to}>
        {({ isActive }) => (<>
          <Text px="4" py="2" borderRadius="md" fontWeight="semibold" _hover={{bg:bg}} transitionDuration="0.25s" bg={isActive ? bg : ""}>{name}</Text>
        </>
        )}
      </NavLink>
    </>
  );
};
