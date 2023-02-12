import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { BsSunFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";

export const ButtonDarkLight = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box p={0} onClick={toggleColorMode}>
      {colorMode === "light" ? (
        <IconButton
          p={4}
          icon={<IoMdMoon fontSize="1.25rem" />}
          aria-label="Dark"
        />
      ) : (
        <IconButton
          p={4}
          icon={<BsSunFill fontSize="1.25rem" />}
          aria-label="Light"
        />
      )}
    </Box>
  );
};
