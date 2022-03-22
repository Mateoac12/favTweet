import Circles from './components/Circles'
import Header from './components/Header'
import { PublicRoutes } from './routes/index.routes'

function App() {
  return (
    <>
      <Header />
      <Circles />
      <div className="max-w-screen-xl mx-auto min-h-screen">
        <PublicRoutes />
      </div>
    </>
  )
}

export default App
