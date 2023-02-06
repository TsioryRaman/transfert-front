import { socket, WebSocketProvider } from './WebSocketContexts'
import { Home } from './components/home'
<<<<<<< HEAD
import Login from './components/login';
=======
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Help } from './components/help'
import { UserContext, UserContextProvider } from './context/UserContext'
>>>>>>> master

function App() {

  return (
    <WebSocketProvider value={socket}>
      <BrowserRouter>
      <UserContextProvider value={UserContext}>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
        </ul>
      <Routes>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Help />} />
      </Routes>
      </UserContextProvider>
      </BrowserRouter>
      <Home></Home>

      <Login />
    </WebSocketProvider>
  )
}

export default App
