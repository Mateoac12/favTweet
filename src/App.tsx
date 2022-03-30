import Circles from './components/Circles'
import Header from './components/Header'
import TweetsProvider from './context/TweetsContext'
import UserProvider from './context/UserContext'
import { Routes } from './routes/index.routes'

function App() {
  return (
    <UserProvider>
      <TweetsProvider>
        <Header />
        <Circles />
        <div className="max-w-screen-xl min-h-screen mx-auto">
          <Routes />
        </div>
      </TweetsProvider>
    </UserProvider>
  )
}

export default App
