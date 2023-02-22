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
} from "@chakra-ui/react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { InputForm } from "../../components/ui/InputForm";
import { SignupErrorType } from "../../Types/SignupErrorType";
import { RouteProps } from "../RouteProps";

const Signup: React.FC<RouteProps> = ({ title }) => {

  // Form controle
  const [error,setError]   = useState<SignupErrorType>();

  const refUsername        = useRef<HTMLInputElement>(null);
  const refEmail           = useRef<HTMLInputElement>(null);
  const refPassword        = useRef<HTMLInputElement>(null);
  const refConfirmPassword = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = import.meta.env.VITE_PROJECT_NAME + " | " + title;
  }, []);

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(
      "username: ",refUsername.current?.value,
      "password: ",refPassword.current?.value,
      "email: :",refEmail.current?.value
    )

    const _user = {
      "username":refUsername.current?.value,
      "password":refPassword.current?.value,
      "confirmPassword":refConfirmPassword.current?.value,
      "email":refEmail.current?.value
    }

    try{
      const response = await axios.post(import.meta.env.VITE_ENDPOINT_API_BASE_URL + "/user",{
        data:JSON.stringify(_user)
      })
      console.log(response.data)
    }catch(e)
    {
      console.log(e)
    }
  }

  return (
    <Stack mt="40" direction={{ base: "column", md: "row" }}>
      <Flex flex={1} justify="center">
        <Center>
          <Player // set the ref to your class instance
            autoplay={true}
            loop={true}
            controls={true}
            speed={1.3}
            src="https://assets3.lottiefiles.com/packages/lf20_jcikwtux.json"
            style={{ height: "500px", width: "500px" }}
          ></Player>
        </Center>
      </Flex>
      <Flex px={8} flex={1} align={"center"} justify={"center"}>
        <Center>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"3xl"} mb="6">
              <Center>Connect your Google Account</Center>
            </Heading>
            <HStack>
              <form onSubmit={handleSubmit}>
                <InputForm ref={refUsername} type="text" error={error?.username.isError || false} label="Nom d'utilisateur" name="name"/>
                <InputForm ref={refEmail} type="email" error={error?.email.isError || false} label="Email" name="email"/>
                <InputForm ref={refPassword} type="password" error={error?.password.isError || false} label="Mot de passe" name="password"/>
                <InputForm ref={refConfirmPassword} type="password" error={error?.password.isError || false} label="Confirmez mot de passe" name="passwordConfirm"/>
              <Stack spacing={6}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>
                    Creating an account means you're okey with our.{" "}
                    <Link color={"blue.500"}>
                      Term of service.Privacy Policy
                    </Link>
                  </Checkbox>
                </Stack>
                <Button type="submit" colorScheme={"blue"} variant={"solid"}>
                  Create Account
                </Button>
              </Stack>
              </form>
            </HStack>
          </Stack>
        </Center>
      </Flex>
    </Stack>
  );
};
export default Signup;
