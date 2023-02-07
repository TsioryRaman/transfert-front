/* import {
    Box, Heading, VStack, Card, FormControl, FormLabel, Input, HStack, Button,
    Stack, CardBody, Center
} from '@chakra-ui/react'
import React from "react"

const Auth = () => {
    return (
        <Box>
            <VStack as='header' spacing='6' mt='8'>
                <Heading as='h1' fontWeight='300' fontSize='24px' letterSpacing='-0.5px'>
                    Sing in to the Git
                </Heading>
            </VStack>
            <Center>
                <HStack maxW='500px'>
                <Card variant='outline' borderColor='#d8dee4'
                    maxW='md' mt='6'>
                    <CardBody>
                        <form>
                            <Stack>
                                <FormControl>
                                    <FormLabel size='sm'>Username</FormLabel>
                                    <Input type='text' borderColor='#d8dee4' size='sm' borderRadius='6px' />
                                </FormControl>
                                <FormControl>
                                    <HStack justify='space-between'>
                                        <FormLabel size='sm'>Password</FormLabel>
                                        <Button as='a' href='#' variant='link' size='xs' fontWeight='500'>Forgot</Button>
                                    </HStack>
                                    <Input type='password' borderColor='#d8dee4' size='sm' borderRadius='6px' />
                                </FormControl>
                                <Button bg='#2da44e' size='sm' _hover={{ bg: '2c974b' }} _active={{ bg: '#298e46' }}>
                                    Sing in
                                </Button>
                            </Stack>
                        </form>
                    </CardBody>
                </Card>
                </HStack>
            </Center>
        </Box>
    )
} */

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Center,
  Stack,
  Image,
} from '@chakra-ui/react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
const Auth = () => {
  return (
    <Stack minH={'90vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} justify='center'>
        <Center>
          <Player // set the ref to your class instance
            autoplay={true}
            loop={true}
            controls={true}
            speed={0.7}
            src="https://assets5.lottiefiles.com/packages/lf20_fWd36IjnsR.json"
            /* src="https://assets8.lottiefiles.com/packages/lf20_mbrocy0r.json" */
            style={{ height: '500px', width: '500px' }}
          >
          </Player>
        </Center>
      </Flex>
    </Stack>
  );
}
export default Auth