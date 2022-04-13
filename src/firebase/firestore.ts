import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  Timestamp,
  deleteDoc,
  doc,
  updateDoc,
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
    const results = docs.map(
      (doc) =>
        ({
          ...doc.data(),
          id: doc.id,
        } as ITargetTweet)
    )
    callback(results)
  })
}

const deleteTweet = (userId: IUserProfile['uid'], id: ITargetTweet['id']) => {
  const docRef = doc(db, `${userId}`, `${id}`)
  deleteDoc(docRef).then((res) => console.log(res))
}

const updateCategories = (
  userId: IUserProfile['uid'],
  id: ITargetTweet['id'],
  category: string[]
) => {
  const docRef = doc(db, `${userId}`, `${id}`)
  updateDoc(docRef, { category }).then((res) => console.log(res))
}

export { addTweet, getTweets, deleteTweet, updateCategories }
