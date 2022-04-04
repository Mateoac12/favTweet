import { useEffect, useState } from 'react'
import AddTweetPanel from '../components/AddTweetPanel'
import FilterList from '../components/FilterList'
import Search from '../components/Search'
import TargetTweet from '../components/TargetTweet'
import { getTweets } from '../firebase/firestore'
import { useHandleLogin } from '../hooks/useHandleLogin'
import { ITargetTweet } from '../types'
import NonTweets from './NonTweets'

const Dashboard = () => {
  const [tweets, setTweets] = useState<ITargetTweet[]>([])
  const [loader, setLoader] = useState<boolean>(true)
  const [categories, setCategories] = useState<string[]>([])
  const { user } = useHandleLogin()

  useEffect(() => {
    const tweetsCategories = [
      ...new Set(tweets.map((tweet) => tweet.category).flat()),
    ]
    setCategories(tweetsCategories as string[])
  }, [tweets])

  useEffect(() => {
    getTweets(user?.uid!, (results: ITargetTweet[]) => {
      setTweets(results)
      setLoader(false)
    })
  }, [])

  if (loader)
    return (
      <div className="absolute mt-28">
        <h1>loading</h1>
      </div>
    )

  if (tweets.length > 0)
    return (
      <div className="max-w-screen-xl min-h-screen mx-auto pt-28">
        <h1 className="text-2xl text-slate-600">Busca tus tweets</h1>
        <Search data={tweets} sourceSearchId="dashboard-tweets" />
        <div className="flex items-center justify-start gap-4 mb-4">
          <h1 className="text-xl text-slate-600">Filtrar</h1>
          <FilterList buttonName="Categorías" list={categories} />
        </div>
        <section className="my-4 mb-12 masonry sm:masonry-sm md:masonry-md">
          {tweets.map((tweet) => (
            <TargetTweet key={`target-dashboard-${tweet.tweetId}`} {...tweet} />
          ))}
        </section>
        <div className="fixed -translate-x-1/2 bottom-4 left-1/2">
          <AddTweetPanel existCategories={categories} />
        </div>
      </div>
    )

  return <NonTweets />
}

export default Dashboard
