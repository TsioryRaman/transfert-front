import { socket, WebSocketProvider } from './socket.io/WebSocketContexts'
import { Home } from './components/home'
import Login, { User } from './components/login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Help } from './components/help'
import { UserContext, UserContextProvider } from './context/UserContext'
import { useState } from 'react';
import Accueil from './components/Accueil';
import Auth from './components/Auth';
import { useColorMode } from '@chakra-ui/color-mode';
import { Button } from '@chakra-ui/button';
import Signup from './components/Signup';
import { Box, Container, Flex, HStack } from '@chakra-ui/layout';
function App() {

  const [user, setUser] = useState<User>()
  const { colorMode, toggleColorMode } = useColorMode()
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
                  <Flex justify="space-between" flex="1">
                    <Link to="/">Home</Link>
                    <Link to="/Accueil">Accueil</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">signup</Link>
                  </Flex>
                </HStack>
              </Container>
            </Box>
          </Box>
          <Button size='sm' colorScheme='blue' onClick={toggleColorMode}>
            Toggle Mode
          </Button>
          <Routes>
            <Route index element={<Home />} />
            <Route path="Accueil" element={<Accueil />} />
            <Route path="Login" element={<Auth />} />
            <Route path="Signup" element={<Signup />} />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
      {/* <Home></Home> */}
    </WebSocketProvider>
  )
}

export default App
