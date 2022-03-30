import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { onAuthStateChanged, signIn, signOut } from '../firebase'

export const useHandleLogin = () => {
  const { user, setUser } = useContext(UserContext)
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
      localStorage.setItem('user', JSON.stringify(user))
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
