import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useHandleLogin } from '../../hooks/useHandleLogin'
import Avatar from '../Avatar'
import Placeholder from '../Placeholder'
import TwitterLogoIcon from '../TwitterLogoIcon'

const Login = () => {
  const { user, isLoading, handleLogin, handleLogout } = useHandleLogin()

  if (isLoading)
    return (
      <div className="flex items-center gap-1">
        <Placeholder w={32} h={32} id="avatar" />
        <Placeholder w={80} h={24} id="username" />
      </div>
    )

  return (
    <>
      {user ? (
        <Menu>
          <Menu.Button className="flex items-center gap-2 relative">
            <Avatar src={user.photoURL!} alt={user.displayName!} size={'w-8'} />
            <span className="text-lg font-semibold">{user.displayName!}</span>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute top-full right-0 w-56 mt-2 p-2 origin-top-right bg-white/90 backdrop-blur rounded-md shadow-2xl shadow-slate-300 focus:outline-none">
              <Menu.Item>
                <button
                  onClick={handleLogout}
                  className="w-full text-right px-4 py-2 rounded-md text-lg bg-transparent hover:bg-slate-200/40 transition-colors"
                >
                  Cerrar sesión
                </button>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        <button
          className="bg-sky-500 text-white font-bold px-4 py-1 rounded-full text-lg inline-flex items-center gap-2"
          onClick={handleLogin}
        >
          <TwitterLogoIcon />
          Iniciar
        </button>
      )}
    </>
  )
}

export default Login
