import React from "react"
import { Box, Button } from "@chakra-ui/react"
import { Player } from "@lottiefiles/react-lottie-player"
import { useNavigate } from "react-router-dom"

export const PageNotFound = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/acceuil");
    }

    return (
        <Box position={"relative"}>            
            <Player // set the ref to your class instance
            autoplay={true}
            loop={true}
            controls={true}
            speed={0.7}
            src="https://assets1.lottiefiles.com/packages/lf20_suhe7qtm.json"
            /* src="https://assets8.lottiefiles.com/packages/lf20_mbrocy0r.json" */
            style={{ minHeight: "100vh",height:"100vh", width: "auto" }}
          ></Player>
          <Button position={"absolute"} bottom={"16"} size="lg" colorScheme={"green"} color="white" left="0" right="0" mx="auto" onClick={handleClick}>Retour</Button>
        </Box> 
    )
}