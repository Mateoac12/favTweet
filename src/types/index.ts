export interface ITargetTweet {
  avatar: string
  name: string
  username: string
  verified: boolean
  isProtect: boolean
  description: string
  followers: number
  following: number
  userId: string
  tweetId: string
  text: string
  createdAt: string
}

export interface IconPropsSVG {
  color?: 'sky' | 'indigo' | 'slate'
  w?: number
  h?: number
}
