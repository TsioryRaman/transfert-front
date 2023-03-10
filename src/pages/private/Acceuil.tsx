import {
  Stack,
  Center,
  Heading,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect } from "react";
import { Pricing } from "../../components/Pricing";
import AXIOS from "../../shared/jwtInterceptor";
import { RouteProps } from "../RouteProps";

export const Acceuil:React.FC<RouteProps> = ({title}) => {

  const isDesktop = useBreakpointValue({ base: false, lg: true });

  useEffect(()=> {
    document.title = import.meta.env.VITE_PROJECT_NAME +  " | " + title;
  },[])

  const loadUser = async () => {
    const response =  await AXIOS.get('/user/profile');
    console.log(response.data)
  }

  return (
    <>
      <Stack mt="16" spacing="6">
        <Center>
          <Heading as="h2" fontSize={"4xl"}>
            Big Transfers, Bigger <br />
            <Center>Impact</Center>
          </Heading>
        </Center>
      </Stack>
      <Stack spacing="6" pt="12">
        <Center>
          <Heading as="h2" size="md">
            The simplest way to send big ideas around the word,and <br />
            <Center>discover new creative work while you're at it.</Center>
          </Heading>
        </Center>
      </Stack>
      <Player // set the ref to your class instance
        autoplay={true}
        loop={true}
        controls={true}
        speed={0.7}
        src="https://assets5.lottiefiles.com/packages/lf20_fWd36IjnsR.json"
        /* src="https://assets8.lottiefiles.com/packages/lf20_mbrocy0r.json" */
        style={{ height: "450px", width: "500px" }}
      ></Player>
      <Pricing />
    </>
  );
};
