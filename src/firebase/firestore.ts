import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { ITargetTweet, IUserProfile } from '../types'

const db = getFirestore()

const addTweet = async (tweet: ITargetTweet, userId: IUserProfile['uid']) => {
  const newTweet = await addDoc(
    collection(db, `${userId}/tweets/${tweet.tweetId}`),
    tweet
  )
  console.log(tweet)
  return newTweet
}

export { addTweet }
