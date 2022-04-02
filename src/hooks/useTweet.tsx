import { ChangeEvent, useContext, useState } from 'react'
import { TweetsContext } from '../context/TweetsContext'
import { postTweet } from '../services/getTweet'
import { checkTweetLink } from '../utils/checkTweetLink'
import { useError } from './useError'

export const useTweet = () => {
  const { tweet, setTweet } = useContext(TweetsContext)
  const [input, setInput] = useState<string>('')
  const { error, setError, resetError } = useError()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSetInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleCheckLink = async (link: string) => {
    const { tweetId, pass, error } = checkTweetLink(link)

    if (!pass) {
      return setError({
        message: error,
        type: 'error',
      })
    }

    resetError()

    setIsLoading(true)
    const { tweetData } = await postTweet({ tweetId } as { tweetId: string })

    setTweet(tweetData)
    tweetData && setIsLoading(false)
  }

  const setCategory = (categoty: string[]) => {
    setTweet((lastData) => ({
      ...lastData!,
      category: Array(
        ...new Set([...(lastData!.category?.concat(categoty) as string[])])
      ),
    }))
  }

  return {
    input,
    error,
    isLoading,
    tweet,
    handleSetInput,
    handleCheckLink,
    setCategory,
  }
}
