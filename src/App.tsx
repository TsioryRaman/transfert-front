import { socket, WebSocketProvider } from './socket.io/WebSocketContexts'
import { Home } from './components/home'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Help } from './components/help'
import { UserContext, UserContextProvider } from './context/UserContext'

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
    </WebSocketProvider>
  )
}

export default App
