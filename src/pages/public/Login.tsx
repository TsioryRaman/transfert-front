import {
  Button,
  Checkbox,
  Flex,
  Heading,
  Link,
  Center,
  Stack,
  useToast,
  Box,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { extendTheme } from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { RouteProps } from "../RouteProps";
import { UserContext } from "../../context/UserContext";
import { InputForm } from "../../components/ui/InputForm";
import { useLocation } from "react-router-dom";

export const Login:React.FC<RouteProps> = ({title},...props) => {
  const refUsername = useRef<HTMLInputElement>(null);
  const refPassword = useRef<HTMLInputElement>(null);
  const [error,setError] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");

  const { user, handleLogin } = useContext(UserContext);
  const location = useLocation();
  const toast = useToast();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(false);
    const userData = JSON.stringify({ username:refUsername?.current?.value, password:refPassword?.current?.value });
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        body: userData,
        headers: {
          "content-type": "application/json",
        },
      });
      if(response.ok){
        const data = await response.json();
        console.log(data)
        handleLogin({ token: data.access_token,isAuthenticated:true });
        setToken(data);
        localStorage.setItem("user",JSON.stringify({ token: data.access_token,refreshToken:data.refresh_token,isAuthenticated:true }));
      }
      else
      {
        refUsername.current?.focus()
        setError(true);
      }
    } catch (e) {
      console.error(e);

      refUsername.current?.focus()
      setError(true);
    }
  };

  useEffect(()=> {
    document.title = import.meta.env.VITE_PROJECT_NAME +  " | " + title;
  },[])

  return (
    <Stack flexGrow={1} position="relative" height="100%" direction={{ base: "column", md: "row" }}>

      <Flex px={8}   flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={["full","full","md","md"]}>
          <Box mx={"auto"} w={["200px","200px","200px","200px"]}>
          <Player // set the ref to your class instance
            autoplay={true}
            loop={true}
            controls={true}
            speed={0.7}
            src={
              error ?
               "https://assets10.lottiefiles.com/packages/lf20_6niurjte.json" : 
               "https://assets10.lottiefiles.com/packages/lf20_yt7b7vg3.json"
              }
            /* src="https://assets8.lottiefiles.com/packages/lf20_mbrocy0r.json" */
          />
          </Box>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>

      <form onSubmit={handleSubmit}>
          <InputForm ref={refUsername} name="username" label="Nom d'utilisateur" error={error} type="text" />
          <InputForm ref={refPassword} name="password" label="Mot de passe" error={error} type="password" />
          <Stack mt="4" spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.500"} href="./Signup">
                Forgot password?
              </Link>
            </Stack>
            <Button type="submit" colorScheme={"blue"} variant={"solid"}>
              Sign in
            </Button>
          </Stack>
      </form>
        </Stack>
      </Flex>
      <Flex
        flex={1}
        width={{ base: "100%", sm: "0%", md: "25%" }}
        justify="center"
      >
        <Center w={["0","500px","500px","500px"]}>
          <Player // set the ref to your class instance
            autoplay={true}
            loop={true}
            controls={true}
            speed={0.7}
            src="https://assets8.lottiefiles.com/packages/lf20_KvK0ZJBQzu.json"
            /* src="https://assets8.lottiefiles.com/packages/lf20_mbrocy0r.json" */
          ></Player>
        </Center>
      </Flex>
    </Stack>
  );
};
