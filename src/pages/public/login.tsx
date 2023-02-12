import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import {
  Input,
  Button,
  Box, Stack,
  FormControl,
  FormLabel, Flex,
  Text,
  Heading, Checkbox, Link, Center, Badge
} from "@chakra-ui/react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { RouteProps } from "../RouteProps";
import { useEffect } from "react";

export interface User {
  token?: string;
}
interface Props { }
const Login: React.FC<RouteProps> = ({ title }) => {
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [token, setToken] = useState<string>("");
  const { user, handleLogin } = useContext(UserContext);
  const [error, setError] = useState("");
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
      console.log(data);
      console.log(user);
      handleLogin({ token: data.access_token });
      setToken(user.token);

      localStorage.setItem("usertoken", data.access_token);

      {
        if (data.statusCode === 401) {
          setError(data.message);

        }

      }

    } catch (e) {
      console.error(e);
    }

  };
  useEffect(() => {
    document.title = import.meta.env.VITE_PROJECT_NAME + " | " + title;
  }, [])

  return (

    <Stack minH={"75vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl id="username">
              <FormLabel htmlFor="username">Username:</FormLabel>
              <Input
                type="text"
                id="username"
                value={username}
                onChange={(event) => setUserName(event.target.value)}
              />
            </FormControl>
            <FormControl id="password" >
              <FormLabel htmlFor="password">Password:</FormLabel>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
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
              <Button colorScheme={"blue"} type={"submit"} variant={"solid"}>
                connexion
              </Button>
            </Stack>
          </form>
          {/* <Text>Le token - {JSON.stringify(token)}</Text> */}
          {error ? <Badge>{error}</Badge> : null}
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
export default Login;
