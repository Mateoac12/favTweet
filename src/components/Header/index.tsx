import Login from '../Login'
import Logo from '../Logo'

const Header = () => {
  return (
    <header className="fixed z-40 w-full max-w-screen-xl px-4 py-2 mx-auto my-2 -translate-x-1/2 rounded-lg shadow-2xl backdrop-blur-sm bg-white/90 left-1/2 shadow-indigo-50">
      <div className="flex items-center justify-between">
        <Logo />
        <Login />
      </div>
    </header>
  )
}

export default Header
