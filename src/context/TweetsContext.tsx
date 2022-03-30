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

export const TweetsContext = createContext<ITweetContext>({} as ITweetContext)

const TweetsProvider = ({ children }: Props) => {
  const [tweet, setTweet] = useState<ITargetTweet | null>(null)

  return (
    <TweetsContext.Provider value={{ tweet, setTweet }}>
      {children}
    </TweetsContext.Provider>
  )
}

export default TweetsProvider
