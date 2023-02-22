import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { LinkType } from "../../Types/LinkType";
import { LinkActive } from "./LinkActive";
import { ButtonDarkLight } from "./ModeDarkLight";

interface NavbarProps {
  MainLink: LinkType[];
  logoutIcon?: ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({ MainLink, logoutIcon }) => {
  return (
    <Box zIndex={"10"} as="section">
      <Box as="nav" bg="bg-surface" boxShadow="sm">
        <Box px="24" py={{ base: "4", lg: "5" }}>
          <HStack spacing="10" justify="space-between">
            <NavLink to="/acceuil">
              <Text fontSize="2xl" fontWeight="bold" color="tomato">
                {import.meta.env.VITE_PROJECT_NAME}
              </Text>
            </NavLink>
            <Flex
              justify="space-between"
              alignItems={"center"}
              marginLeft="auto"
              gap="12"
            >
              {
                /** Lien Privee */
                MainLink.map((link, index) => (
                  <LinkActive to={link.link} key={index} name={link.name} />
                ))
              }
              {logoutIcon}
              {/** Mode dark light */}
              <ButtonDarkLight />
            </Flex>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};
