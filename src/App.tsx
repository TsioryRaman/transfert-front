import { socket, WebSocketProvider } from './WebSocketContexts'
import { Home } from './components/home'

function App() {

  return (
    <WebSocketProvider value={socket}>
      <Home></Home>
    </WebSocketProvider>
  )
}

export default App
