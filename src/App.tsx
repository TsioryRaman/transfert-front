import { socket, WebSocketProvider } from "./socket.io/WebSocketContexts";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import { useEffect, useState } from "react";
import { Login } from "./pages/public/Login";
import Signup from "./pages/public/Signup";
import { Box, Container, Flex, HStack } from "@chakra-ui/layout";
import ProtectedRoute from "./components/RouteGuard/ProtectedRoute";
import { LinkActive } from "./components/ui/LinkActive";
import { Help } from "./pages/private/Help";
import { Acceuil } from "./pages/private/Acceuil";
import { PublicRoute } from "./components/RouteGuard/PublicRoute";
import { ButtonDarkLight } from "./components/ui/ModeDarkLight";
import { MainLinkPublic } from "./pages/public/PublicLink";
import { MainLinkPrivate } from "./pages/private/PrivateLink";
import { Transfert } from "./pages/public/Transfert";

export interface User {
  token: string;
  isAuthenticated:boolean;
}

function App() {
  const [user, setUser] = useState<User>({token:"",isAuthenticated:false});

  useEffect(()=> {
  },[user])
  const handleLogin = (_user: User) => {
    console.log(_user.token)
    setUser({token:_user.token,isAuthenticated:_user.isAuthenticated});
  };

  return (
    <WebSocketProvider value={socket}>
      <BrowserRouter>
        <UserContextProvider value={{ user, handleLogin }}>
          <Box as="section" pb={{ base: "12", md: "24" }}>
            <Box as="nav" bg="bg-surface" boxShadow="sm">
              <Container py={{ base: "4", lg: "5" }}>
                <HStack spacing="10" justify="space-between">
                  <Flex justify="space-between" alignItems={"center"} flex="1">
                    {
                      /** Lien Public */
                      !user.isAuthenticated &&
                        MainLinkPublic.map((link, index) => (
                          <LinkActive
                            to={link.link}
                            key={index}
                            name={link.name}
                          />
                        ))
                    }
                    {
                      /** Lien Privee */
                      user.isAuthenticated &&
                        MainLinkPrivate.map((link, index) => (
                          <LinkActive
                            to={link.link}
                            key={index}
                            name={link.name}
                          />
                        ))
                    }
                    {/** Mode dark light */}
                    <ButtonDarkLight />
                  </Flex>
                </HStack>
              </Container>
            </Box>
          </Box>
          <Routes>
            {/** Route PRIVEE */}
            <Route element={<ProtectedRoute />}>
              <Route path="acceuil" element={<Acceuil title="acceuil"/>} />
              <Route path="help" element={<Help />} />
              <Route path="transfert" element={<Transfert title="transfert"/>} />
            </Route>
            {/** Route PUBLIC */}
            <Route element={<PublicRoute />}>
              <Route path="login" element={<Login title="login"/>} />
              <Route element={<Signup title="signup"/>} path="signup" />
            </Route>
            <Route path="*" element={<Navigate to="/acceuil" />} />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
      {/* <Home></Home> */}
    </WebSocketProvider>
  );
}

export default App;
