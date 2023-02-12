import { Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Location, NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { MainLinkPrivate } from "../../pages/private/PrivateLink";

interface LinkProps {
  to: string;
  name: string;
}

export const LinkActive: React.FC<LinkProps> = ({ to, name }) => {
  const { user } = useContext(UserContext);

  const location: Location = useLocation();
  const allowPrivateRoute: boolean = MainLinkPrivate.some((p) =>
    location.pathname.includes(p.link)
  );

  return (
    <>
      <NavLink to={to}>
        {({ isActive }) => (
          <Text color={isActive ? "green.500" : "gray.600"}>{name}</Text>
        )}
      </NavLink>
    </>
  );
};
