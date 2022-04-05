import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'
import { ITargetTweet } from '../types'

interface Props {
  children: ReactNode | ReactNode[]
}

interface ITweetContext {
  tweet: ITargetTweet | null
  setTweet: Dispatch<SetStateAction<ITargetTweet | null>>
}

export const TweetContext = createContext<ITweetContext>({} as ITweetContext)

const TweetProvider = ({ children }: Props) => {
  const [tweet, setTweet] = useState<ITargetTweet | null>(null)

  return (
    <TweetContext.Provider value={{ tweet, setTweet }}>
      {children}
    </TweetContext.Provider>
  )
}

export default TweetProvider
