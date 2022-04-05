import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  Timestamp,
} from 'firebase/firestore'
import { ITargetTweet, IUserProfile } from '../types'

const db = getFirestore()

const addTweet = async (tweet: ITargetTweet, userId: IUserProfile['uid']) => {
  const newTweet = await addDoc(collection(db, `${userId}`), {
    ...tweet,
    date: Timestamp.fromDate(new Date()),
  })
  return newTweet
}

const getTweets = (
  userId: IUserProfile['uid'],
  callback: (result: ITargetTweet[]) => void
) => {
  const collRef = collection(db, `${userId}`)

  onSnapshot(collRef, ({ docs }) => {
    const results = docs.map((doc) => doc.data() as ITargetTweet)
    callback(results)
  })
}

export { addTweet, getTweets }
