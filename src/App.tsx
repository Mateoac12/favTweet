import Circles from './components/Circles'
import Header from './components/Header'
import TweetProvider from './context/TweetContext'
import UserProvider from './context/UserContext'
import { Routes } from './routes/index.routes'

function App() {
  return (
    <UserProvider>
      <TweetProvider>
        <Header />
        <Circles />
        <div className="max-w-screen-xl min-h-screen mx-auto">
          <Routes />
        </div>
      </TweetProvider>
    </UserProvider>
  )
}

export default App
