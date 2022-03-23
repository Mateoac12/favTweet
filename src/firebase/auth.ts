import './client'
import {
  TwitterAuthProvider,
  getAuth,
  signOut as signOutFirebase,
  signInWithPopup,
  User,
} from 'firebase/auth'
import { IUserProfile } from '../types'

const auth = getAuth()
const provider = new TwitterAuthProvider()

const signIn = () =>
  signInWithPopup(auth, provider).then(({ user }) => getUserData(user))

const signOut = () => signOutFirebase(auth)

const onAuthStateChanged = (onChange: (value: IUserProfile | null) => void) =>
  auth.onAuthStateChanged((user) => onChange(getUserData(user!) || null))

function getUserData(user: User | null): IUserProfile | null {
  if (!user) return null

  const { displayName, photoURL, uid } = user
  const userData = {
    displayName,
    photoURL,
    uid,
  }
  return userData
}

export { signIn, signOut, onAuthStateChanged }
