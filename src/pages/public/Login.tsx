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
} from "@chakra-ui/react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { extendTheme } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { RouteProps } from "../RouteProps";
import { UserContext } from "../../context/UserContext";

export const Login:React.FC<RouteProps> = ({title}) => {
  const breakpoints = {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  };
  const theme = extendTheme({ breakpoints });
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  const [token, setToken] = useState<string>("");

  const handleChange = (e:any) => {
      if(e.target.name === "username"){
        setUserName(e.target.value);
      }else{
        setPassword(e.target.value);
      }
  }
  const { user, handleLogin } = useContext(UserContext);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData = JSON.stringify({ username, password });
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        body: userData,
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await response.json();
      handleLogin({ token: data.access_token,isAuthenticated:true });
      setToken(user.token);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(()=> {
    document.title = import.meta.env.VITE_PROJECT_NAME +  " | " + title;
  },[])

  return (
    <Stack minH={"75vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>

      <form onSubmit={handleSubmit}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="text" required name="username" onChange={handleChange} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" required name="password" onChange={handleChange} />
          </FormControl>
          <Stack spacing={6}>
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

      {JSON.stringify(user)}
        </Stack>
      </Flex>

      <Flex
        flex={1}
        width={{ base: "100%", sm: "0%", md: "25%" }}
        justify="center"
      >
        <Center>
          <Player // set the ref to your class instance
            autoplay={true}
            loop={true}
            controls={true}
            speed={0.7}
            src="https://assets5.lottiefiles.com/packages/lf20_fWd36IjnsR.json"
            /* src="https://assets8.lottiefiles.com/packages/lf20_mbrocy0r.json" */
            style={{ height: "500px", width: "500px" }}
          ></Player>
        </Center>
      </Flex>
    </Stack>
  );
};
