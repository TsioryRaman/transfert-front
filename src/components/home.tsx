import { Box, Button, useColorMode } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react"
import { Socket } from "socket.io-client";
import { WebSocketContext } from "../WebSocketContexts";

export const Home = () => {

    const socket:Socket = useContext<Socket>(WebSocketContext);

    const { colorMode, toggleColorMode } = useColorMode()

    useEffect(()=> {
        socket.on("connect",() => {
            console.log("Connected")
        })

        socket.on("message",(data) => {
            console.log(data)
        })

        return (() => {
            socket.off("connect")
            socket.off("event")
        })
    },[])

    return (
        <React.Fragment>
            <Box>
                <Button onClick={toggleColorMode}>
                    Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                </Button>
            </Box>
        </React.Fragment>
    );
}