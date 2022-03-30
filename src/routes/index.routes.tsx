import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { useHandleLogin } from '../hooks/useHandleLogin'

export const Routes = () => {
  const { user } = useHandleLogin()

  return <>{user ? <PrivateRoutes /> : <PublicRoutes />}</>
}
