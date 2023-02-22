import { Box, useToast } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { MainLinkPrivate } from "../../pages/private/PrivateLink";
import { useLogged } from "../hooks/useLogged";
import { CiLogout } from "react-icons/ci";
import { Navbar } from "../ui/Navbar";
import { socket, WebSocketProvider } from "../../socket.io/WebSocketContexts";
import {io} from "socket.io-client";
import jwtInterceptor from "../../shared/jwtInterceptor";
import { logout } from "../hooks/useLogout";
import AXIOS from "../../shared/jwtInterceptor";
import Footer from "../Footer";

interface PrivateRouteProps {}

const ProtectedRoute: React.FC<PrivateRouteProps> = () => {
  const logged = useLogged();

  const { user,handleLogin } = useContext(UserContext);
  const toast = useToast();
  const handleLogout =async () => {
    await logout();
    handleLogin({ token: "", isAuthenticated: false });
  };

  useEffect(()=> {


    (async () => {
      const response = await AXIOS.get("/user/profile");
      console.log(response.data)
    })()

    if(logged){
      socket.on("connect",() => {
        console.log("Salut")
        console.log(socket.id)
      })
      socket.on("connected",(data)=>{
        console.log(data)
        socket.emit("events",JSON.stringify(data))
      })
      socket.on("test",(data) => {
        console.log("data "+data)
      })
  
      return function(){
        socket.off("connect")
      }
    }
  },[])

  if (!logged) {
    return <Navigate state={{ showToast: true }} to="/login" />;
  }

  return (
    <>
      <WebSocketProvider value={socket}>
        <Navbar
          MainLink={MainLinkPrivate}
          logoutIcon={
            <Box onClick={handleLogout} cursor={"pointer"}>
              <CiLogout size="20px" />
            </Box>
          }
        ></Navbar>
        <Outlet />
        <Footer />
      </WebSocketProvider>
    </>
  );
};

export default ProtectedRoute;
