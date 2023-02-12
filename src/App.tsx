import { socket, WebSocketProvider } from "./socket.io/WebSocketContexts";
import Login, { User } from "./pages/public/login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import { useState } from "react";
// import { Login } from "./pages/public/Auth";
// import { login } from "./pages/public/login";
import Signup from "./pages/public/Signup";
import { Box, Container, Flex, HStack } from "@chakra-ui/layout";
import ProtectedRoute from "./components/RouteGuard/ProtectedRoute";
import { LinkActive } from "./components/ui/LinkActive";
import { useLogged } from "./components/hooks/useLogged";
import { Help } from "./pages/private/Help";
import { Acceuil } from "./pages/private/Acceuil";
import { PublicRoute } from "./components/RouteGuard/PublicRoute";
import { ButtonDarkLight } from "./components/ui/ModeDarkLight";
import { MainLinkPublic } from "./pages/public/PublicLink";
import { MainLinkPrivate } from "./pages/private/PrivateLink";
import { Transfert } from "./pages/public/Transfert";

function App() {
  const logged: boolean = useLogged();
  const [user, setUser] = useState<User>();
  const handleLogin = (token: {}) => {
    setUser(token);
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
                      !logged &&
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
                      logged &&
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
              <Route path="acceuil" element={<Acceuil title="accueil" />} />
              <Route path="help" element={<Help />} />
            </Route>
            {/** Route PUBLIC */}
            <Route element={<PublicRoute />}>
              <Route path="login" element={<Login title="login" />} />
              <Route element={<Signup title="signup" />} path="signup" />
              <Route path="transfert" element={<Transfert title="transfert" />} />
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
