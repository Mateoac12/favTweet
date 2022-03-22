import { ITargetTweet } from '../types'

interface Props {
  username: ITargetTweet['username']
  tweetId: ITargetTweet['tweetId']
}

export const generateExternalTwitterLink = ({ username, tweetId }: Props) => {
  const link = `https://twitter.com/${username}/status/${tweetId}`

  return link
}
