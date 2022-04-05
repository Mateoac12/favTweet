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

interface ITweetsContext {
  tweets: ITargetTweet[] | null
  setTweets: Dispatch<SetStateAction<ITargetTweet[] | null>>
  filteredTweets: ITargetTweet[]
  setFilteredTweets: Dispatch<SetStateAction<ITargetTweet[]>>
}

export const TweetsContext = createContext<ITweetsContext>({} as ITweetsContext)

const TweetsProvider = ({ children }: Props) => {
  const [tweets, setTweets] = useState<ITargetTweet[] | null>([])
  const [filteredTweets, setFilteredTweets] = useState<ITargetTweet[]>(tweets!)

  return (
    <TweetsContext.Provider
      value={{ tweets, setTweets, filteredTweets, setFilteredTweets }}
    >
      {children}
    </TweetsContext.Provider>
  )
}

export default TweetsProvider
