import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import { SocialCard } from "../../components/Card";
export const Contributeur = ({title}) => {
    return (
            <Flex gap="12" align="center" justify="center">
            <SocialCard />

            <SocialCard />

            <SocialCard />

            <SocialCard />

            <SocialCard />
        </Flex>
    );
}