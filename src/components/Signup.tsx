import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    HStack,
    Center,
    Stack,
} from '@chakra-ui/react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Signup = () => {
    return (

        <Stack minH={'75vh'} direction={{ base: 'column', md: 'row' }}>

            <Flex flex={1} justify='center'>
                <Center>
                    <Player // set the ref to your class instance
                        autoplay={true}
                        loop={true}
                        controls={true}
                        speed={1.3}
                        src="https://assets3.lottiefiles.com/packages/lf20_jcikwtux.json"
                        style={{ height: '500px', width: '500px' }}
                    >
                    </Player>
                </Center>
            </Flex>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Center>
                    <Stack spacing={4} w={'full'} maxW={'md'}>
                        <Heading fontSize={'3xl'} mb='6'>
                            <Center>Connect your Google Account</Center>
                        </Heading>
                        <HStack>
                            <FormControl id="Name">
                                <FormLabel>Name</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <FormControl id="Username">
                                <FormLabel>Username</FormLabel>
                                <Input type="text" />
                            </FormControl>
                        </HStack>
                        <FormControl id="Email">
                            <FormLabel>Email</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="Password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={6}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>
                                    Creating an account means you're okey with our. <Link color={'blue.500'}>Term of service.Privacy Policy</Link>
                                </Checkbox>

                            </Stack>
                            <Button colorScheme={'blue'} variant={'solid'}>
                                Create Account
                            </Button>
                        </Stack>
                    </Stack>
                </Center>
            </Flex>

        </Stack>
    );
}
export default Signup