import { Menu } from '@headlessui/react'
import { useHandleLogin } from '../../hooks/useHandleLogin'
import ArrowBottomIcon from '../ArrowBottomIcon'
import Avatar from '../Avatar'
import Button from '../Button'
import LogoutIcon from '../LogoutIcon'
import Placeholder from '../Placeholder'
import Transition from '../Transition'
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
            <span className="flex items-center gap-1 text-lg font-semibold">
              {user.displayName!}
              <ArrowBottomIcon />
            </span>
          </Menu.Button>
          <Transition>
            <Menu.Items className="absolute top-full right-0 w-56 mt-2 p-2 origin-top-right bg-white/90 backdrop-blur rounded-md shadow-2xl shadow-slate-300 focus:outline-none">
              <Menu.Item>
                <button
                  onClick={handleLogout}
                  className="flex justify-between items-center w-full text-right px-4 py-2 rounded-md text-lg bg-transparent hover:bg-slate-200/40 transition-colors"
                >
                  <LogoutIcon />
                  Cerrar sesión
                </button>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        <Button onClick={handleLogin} icon={<TwitterLogoIcon />} type="twitter">
          Iniciar
        </Button>
      )}
    </>
  )
}

export default Login
