import { ITargetTweet, ITweetAPI } from '../types'

interface Props {
  tweetId: string
}

export const postTweet = async ({ tweetId }: Props) => {
  const url = import.meta.env.VITE_SERVICE_GET_TWEET as string

  const tweetData: ITargetTweet = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ tweetId }),
  })
    .then((res) => res.json())
    .then((res: ITweetAPI) => {
      const { data, includes } = res

      const userData = includes.users[0]
      const tweetData = data[0]

      return {
        avatar: userData.profile_image_url,
        createdAt: tweetData.created_at,
        name: userData.name,
        username: userData.username,
        description: userData.description,
        followers: userData.public_metrics.followers_count,
        following: userData.public_metrics.following_count,
        isProtect: userData.protected,
        text: tweetData.text,
        tweetId: tweetData.id,
        userId: userData.id,
        verified: userData.verified,
        category: [],
      }
    })

  return {
    tweetData,
  }
}
