import { socket, WebSocketProvider } from './WebSocketContexts'
import { Home } from './components/home'
import Login from './components/login';

function App() {

  return (
    <WebSocketProvider value={socket}>
      <Home></Home>

      <Login />
    </WebSocketProvider>
  )
}

export default App
