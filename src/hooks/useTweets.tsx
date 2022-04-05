import { useContext, useEffect } from 'react'
import { TweetsContext } from '../context/TweetsContext'

interface IFilter {
  categories: string[]
}

export const useTweets = () => {
  const { tweets, setTweets, filteredTweets, setFilteredTweets } =
    useContext(TweetsContext)

  const handleFilter = ({ categories }: IFilter) => {
    if (categories.length === 0) return setFilteredTweets(tweets!)

    const filtered = tweets!.filter((tweet) =>
      tweet.category?.some((category) => categories.includes(category))
    )
    setFilteredTweets(filtered)
  }

  useEffect(() => {
    setFilteredTweets(tweets!)
  }, [tweets])

  return {
    tweets,
    setTweets,
    filteredTweets,
    handleFilter,
  }
}
