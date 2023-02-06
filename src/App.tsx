import { socket, WebSocketProvider } from './WebSocketContexts'
import { Home } from './components/home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './components/Accueil';

function App() {

  return (
    <>
      <WebSocketProvider value={socket}>
        <Home></Home>
      </WebSocketProvider><div className='App'>
          <BrowserRouter>
            <Routes>
              <Route>
                <Route path='/accueil' element={<Accueil />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </>
  )
}

export default App
