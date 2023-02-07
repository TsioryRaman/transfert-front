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
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">signup</Link>
            </li>
          </ul>

          <Button size='sm' colorScheme='blue' onClick={toggleColorMode}>
            Toggle Mode
          </Button>
          <Routes>
            <Route index element={<Home />} />
            <Route path="help" element={<Accueil />} />
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
