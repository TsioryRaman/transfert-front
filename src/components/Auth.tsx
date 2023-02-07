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
} from '@chakra-ui/react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Auth = () => {
  return (

    <Stack minH={'75vh'} direction={{ base: 'column', md: 'row' }}>
      
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
            speed={0.3}
            src="https://assets2.lottiefiles.com/packages/lf20_pwwZiL9I3Y.json"
            style={{ height: '500px', width: '500px' }}
          >
          </Player>
        </Center>
      </Flex>
    </Stack>
  );
}
export default Auth