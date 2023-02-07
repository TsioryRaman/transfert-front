import { socket, WebSocketProvider } from './WebSocketContexts'
import { Home } from './components/home'
import Login, { User } from './components/login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Help } from './components/help'
import { UserContext, UserContextProvider } from './context/UserContext'
import { useState } from 'react';

function App() {

  const [user, setUser] = useState<User>()

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
          </ul>
          <Routes>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Help />} />
            <Route path="Login" element={<Login />} />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
      {/* <Home></Home> */}
    </WebSocketProvider>
  )
}

export default App
