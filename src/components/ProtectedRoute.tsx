import React from 'react'
import { Button, Box } from '@chakra-ui/react';
const MyButton: React.FC = () => {

    return <Box>
        <Button type={"submit"} mt='4' w='full' colorScheme='blue'>{count}</Button>
    </Box>
}