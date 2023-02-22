import { Box, Container, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { MainLinkPublic } from "../../pages/public/PublicLink";
import { useLogged } from "../hooks/useLogged";
import { LinkActive } from "../ui/LinkActive";
import { ButtonDarkLight } from "../ui/ModeDarkLight";
import { Navbar } from "../ui/Navbar";

export const PublicRoute = () => {
  const logged = useLogged();

  if (logged) {
    console.log("Logged");
    return <Navigate to="/acceuil" />;
  }

  return (
    <>
      <Box
        position="absolute"
        opacity="0.1"
        top="0"
        bottom="0"
        w={["0","0","75%","50%"]}
        backgroundImage="url('/src/assets/image/background_base.jpg')"
        bgSize={"cover"}
        bgPosition="center"
        bgRepeat="no-repeat"
        zIndex={0}
      />
      <Navbar MainLink={MainLinkPublic} />
      <Outlet />
    </>
  );
};
