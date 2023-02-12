
import { socket, WebSocketProvider } from './socket.io/WebSocketContexts'
import Login, { User } from './pages/login';
import { BrowserRouter, Link, Location, Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { UserContext, UserContextProvider } from './context/UserContext'
import { useContext, useState } from 'react';
import Auth from './components/Auth';
import { useColorMode } from '@chakra-ui/color-mode';
import { Button, IconButton } from '@chakra-ui/button';
import Signup from './components/Signup';
import {IoMdMoon} from "react-icons/io";
import {BsSunFill} from "react-icons/bs"
import { Box, Container, Flex, HStack } from '@chakra-ui/layout';
import ProtectedRoute, { privateLink } from './components/RouteGuard/ProtectedRoute';
import { LinkActive } from './components/LinkActive';
import { useLogged } from './components/hooks/useLogged';
import { Help } from './pages/Help';
import { Acceuil } from './pages/Acceuil';
import { PublicRoute } from './components/RouteGuard/PublicRoute';

type LinkType = {
  name:string,
  link:string
}

const MainLinkPublic:Array<LinkType> = [
{
  name:"Login",
  link:"/login"
},
{
  name:"Signup",
  link:"/signup"
}
];

const MainLinkPrivate:Array<LinkType> = [{
  name:"Acceuil",
  link:"/acceuil"
},]

function App() {

  const { colorMode, toggleColorMode } = useColorMode()

  const logged:boolean = useLogged();
  const [user, setUser] = useState<User>()
  const handleLogin = (token: {}) => {
    setUser(token)
  }


  return (
    <WebSocketProvider value={socket}>
      <BrowserRouter>
        <UserContextProvider value={{ user, handleLogin }}>
          <Box as="section" pb={{ base: '12', md: '24' }}>
            <Box as="nav" bg="bg-surface" boxShadow="sm">
              <Container py={{ base: '4', lg: '5' }}>
                <HStack spacing="10" justify="space-between">
                  <Flex justify="space-between" alignItems={"center"} flex="1">
                    {
                      !logged && MainLinkPublic.map((link,index)=>(
                        <LinkActive to={link.link} key={index} name={link.name}/>
                    ))
                    }
                    {
                      logged && MainLinkPrivate.map((link,index)=>(
                        <LinkActive to={link.link} key={index} name={link.name}/>
                    ))
                    }

                    <Button p={0} onClick={toggleColorMode}>
                        {colorMode === "light" ? 
                        (
                          <IconButton
                          p={4}
                          icon={<IoMdMoon fontSize="1.25rem" />}
                          aria-label="Dark"
                      />):
                        (<IconButton
                              p={4}
                              icon={<BsSunFill fontSize="1.25rem" />}
                              aria-label="Light" />
                        )}
                      </Button>
                  </Flex>
                </HStack>
              </Container>
            </Box>
          </Box>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path='acceuil' element={<Acceuil />}/>
              <Route path='help' element={<Help />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="login" element={<Auth />} />
              <Route element={<Signup />} path="signup" />
            </Route>
            <Route path='*' element={<Navigate to="/acceuil" />}  />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
      {/* <Home></Home> */}
    </WebSocketProvider>
  )
}

export default App;
