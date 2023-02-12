import React from "react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { AiOutlineFile } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md";

interface FilePreview {
  name: string;
  onDelete: any;
}

export const FilePreview: React.FC<FilePreview> = ({ name, onDelete }) => {
  const bgColor = useColorModeValue("green.400", "green.600");

  const color = useColorModeValue("white", "white");
  return (
    <Box bgColor={bgColor} my="2" cursor="pointer" borderRadius={"md"} p="4">
      <Flex direction={"row"} gap="4" alignItems={"center"}>
        <AiOutlineFile color={color} size={"30px"} />
          <Text isTruncated fontSize={"lg"} color={color}>
            - {name}
          </Text>

          <Flex alignItems="center" ml="auto" justifyContent="center" bgColor={"red.400"} w="4" h="4" borderRadius="full" onClick={onDelete}>
              <MdOutlineClear color={color}/>
            </Flex>
      </Flex>
    </Box>
  );
};
