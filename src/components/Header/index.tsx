import Login from '../Login'
import Logo from '../Logo'

const Header = () => {
  return (
    <header className="fixed w-full backdrop-blur-sm bg-white/90 left-1/2 -translate-x-1/2 max-w-screen-xl px-4 py-2 mx-auto my-2 rounded-lg shadow-2xl shadow-indigo-50 z-40">
      <div className="flex justify-between items-center">
        <Logo />
        <Login />
      </div>
    </header>
  )
}

export default Header
