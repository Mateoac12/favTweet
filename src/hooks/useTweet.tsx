import { ChangeEvent, useContext, useState } from 'react'
import { TweetContext } from '../context/TweetContext'
import { postTweet } from '../services/getTweet'
import { ITargetTweet } from '../types'
import { checkTweetLink } from '../utils/checkTweetLink'
import { useError } from './useError'
import { useTweets } from './useTweets'

export const useTweet = () => {
  const { tweets } = useTweets()
  const { tweet, setTweet } = useContext(TweetContext)
  const [input, setInput] = useState<string>('')
  const { error, setError, resetError } = useError()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSetInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleCheckLink = async (link: string) => {
    const { tweetId, pass, error } = checkTweetLink(link)
    const hasExist = tweets!.find((t) => t.tweetId === tweetId)

    if (!pass) {
      return setError({
        message: error,
        type: 'error',
      })
    }

    if (hasExist) {
      return setError({
        message: `El tweet ya existe!`,
        type: 'info',
      })
    }

    resetError()

    setIsLoading(true)
    const { tweetData } = await postTweet({ tweetId } as { tweetId: string })

    setTweet(tweetData)
    tweetData && setIsLoading(false)
  }

  // necesario para cuando queremos modificar o eliminar categorias, sino el tweet es null y no tiene a que agregarle los nuevos valores
  const addShadowTweet = (tweet: ITargetTweet | null) => {
    setTweet(tweet)
  }

  const setCategory = (categoty: string[]) => {
    setTweet((lastData) => ({
      ...lastData!,
      category: Array(
        ...new Set([...(lastData!.category?.concat(categoty) as string[])])
      ),
    }))
  }

  const removeCategory = (category: string) => {
    setTweet((lastTweets) => ({
      ...lastTweets!,
      category: lastTweets!.category!.filter((c) => c !== category),
    }))
  }

  const resetTweet = () => {
    setTweet(null)
  }

  return {
    input,
    error,
    isLoading,
    tweet,
    resetTweet,
    handleSetInput,
    handleCheckLink,
    setCategory,
    removeCategory,
    addShadowTweet,
  }
}
