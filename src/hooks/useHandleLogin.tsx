import { useEffect, useState } from 'react'
import { onAuthStateChanged, signIn, signOut } from '../firebase'
import { IUserProfile } from '../types'

export const useHandleLogin = () => {
  const [user, setUser] = useState<IUserProfile | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleLogin = () => {
    signIn()
      .then((user) => {
        setUser(user)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }

  const handleLogout = () => {
    signOut().then(() => setUser(null))
  }

  useEffect(() => {
    onAuthStateChanged((user) => {
      setUser(user)
      setIsLoading(false)
    })
  }, [])

  return {
    user,
    isLoading,
    handleLogin,
    handleLogout,
  }
}
