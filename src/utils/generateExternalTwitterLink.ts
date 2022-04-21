import { ITargetTweet } from '../types'

interface Props {
  username: ITargetTweet['username']
  tweetId: ITargetTweet['tweetId']
}

export const generateExternalTwitterLink = ({ username, tweetId }: Props) => {
  const tweetIdNotNumber = isNaN(Number(tweetId))
  if (tweetIdNotNumber) return `https://twitter.com/${username}`

  const hasUsername = username.length > 0
  if (!hasUsername) return 'https://twitter.com/'

  const link = `https://twitter.com/${username}/status/${tweetId}`

  return link
}
