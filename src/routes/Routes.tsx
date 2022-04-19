import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { useHandleLogin } from '../hooks/useHandleLogin'

export const Routes = () => {
  const { user } = useHandleLogin()
  console.log('user works: ', { user })
  return <>{user ? <PrivateRoutes /> : <PublicRoutes />}</>
}
