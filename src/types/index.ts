import { Timestamp } from 'firebase/firestore'

interface TweetData {
  in_reply_to_user_id: string
  conversation_id: string
  created_at: string
  id: string
  referenced_tweets: {
    id: string
    type: string
  }[]
  text: string
  author_id: string
  date?: Timestamp
}

export interface ITweetAPI {
  data: TweetData[]
  includes: {
    users: {
      profile_image_url: string
      name: string
      verified: boolean
      id: string
      public_metrics: {
        followers_count: number
        following_count: number
        tweet_count: number
        listed_count: number
      }
      description: string
      username: string
      protected: boolean
    }[]
    tweets: TweetData[]
  }
}

export interface ITargetTweet {
  id: string
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
  notHover?: boolean
  category?: string[]
}

export interface IUserProfile {
  displayName: string | null
  photoURL: string | null
  uid: string
  accessToken: string | null
}

export interface IconPropsSVG {
  color?: 'sky' | 'indigo' | 'slate' | 'white'
  w?: number
  h?: number
  rotate?: '0' | '90' | '180' | '270' | '-90'
}

export interface IErrors {
  message: string | null
  type: 'error' | 'success' | 'info' | 'warning' | null
}
