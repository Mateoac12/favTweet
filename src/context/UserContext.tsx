import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'
import { IUserProfile } from '../types'

interface Props {
  children: ReactNode
}

interface ICreateContext {
  user: IUserProfile | null
  setUser: Dispatch<SetStateAction<IUserProfile | null>>
}

export const UserContext = createContext<ICreateContext>({} as ICreateContext)

const initialState = (): IUserProfile =>
  JSON.parse(localStorage.getItem('user') as string) || null

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<IUserProfile | null>(initialState)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
