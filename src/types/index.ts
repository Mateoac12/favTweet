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

export interface IUserProfile {
  displayName: string | null
  photoURL: string | null
  uid: string
}

export interface IconPropsSVG {
  color?: 'sky' | 'indigo' | 'slate' | 'white'
  w?: number
  h?: number
}
