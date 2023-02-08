import { socket, WebSocketProvider } from './WebSocketContexts'
import { Home } from './pages/home';
import Login, { User } from './pages/login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Help } from './pages/help'
import { UserContext, UserContextProvider } from './context/UserContext'
import { useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import { Effect } from './pages/testUseEffect';

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
              <Link to="/home">Home</Link>
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
            <Route path="/login" element={<Login />} />

            <Route path="/home" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
          </Routes>


          {/* <Login /> */}
        </UserContextProvider>
      </BrowserRouter>
      {/* <Home></Home> */}

      <Effect />
    </WebSocketProvider>
  )
}

export default App
