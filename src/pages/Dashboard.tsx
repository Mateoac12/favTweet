import { useEffect, useState } from 'react'
import AddTweetPanel from '../components/AddTweetPanel'
import FilterList from '../components/FilterList'
import Placeholder from '../components/Placeholder'
import Search from '../components/Search'
import TargetTweet from '../components/TargetTweet'
import { getTweets } from '../firebase/firestore'
import { useHandleLogin } from '../hooks/useHandleLogin'
import { useTweets } from '../hooks/useTweets'
import { ITargetTweet } from '../types'
import NonTweets from './NonTweets'

const Dashboard = () => {
  const { tweets, filteredTweets, setTweets } = useTweets()
  const [loader, setLoader] = useState<boolean>(true)
  const [categories, setCategories] = useState<string[]>([])
  const { user } = useHandleLogin()

  useEffect(() => {
    // se hace el flat para aplanar el array de arrays que devuelve: [ [...], [...], [...], ... ]
    // de esta manera obtenemos un array con valores unicos y aplanados: [ ..., ..., ..., ... ]
    const tweetsCategories = [
      ...new Set(tweets!.map((tweet) => tweet.category).flat()),
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
      <div className="max-w-screen-xl min-h-screen mx-auto mb-40 pt-28">
        <div className="flex flex-col gap-4">
          <Placeholder id="text-search" w={200} h={28} />
          <Placeholder id="search" w={1200} h={38} />
        </div>
        <div className="flex gap-4 mt-4">
          <Placeholder id="text-category" w={80} h={28} />
          <Placeholder id="category" w={100} h={28} />
        </div>
        <div className="flex gap-4 mt-8">
          <Placeholder id="tweet-target-1" w={400} h={320} rounded={'md'} />
          <Placeholder id="tweet-target-2" w={460} h={260} rounded={'md'} />
          <Placeholder id="tweet-target-3" w={300} h={340} rounded={'md'} />
        </div>
      </div>
    )

  if (tweets!.length > 0)
    return (
      <div className="max-w-screen-xl min-h-screen mx-auto mb-40 pt-28">
        <h1 className="text-2xl text-slate-600">Busca tus tweets</h1>
        <Search data={tweets!} sourceSearchId="dashboard-tweets" />
        <div className="flex items-center justify-start gap-4 mb-4">
          <h1 className="text-xl text-slate-600">Filtrar</h1>
          <FilterList buttonName="Categorías" list={categories} />
        </div>
        <section className="my-4 mb-12 masonry sm:masonry-sm md:masonry-md">
          {(tweets !== filteredTweets ? filteredTweets : tweets)!.map(
            (tweet) => (
              <TargetTweet
                key={`target-dashboard-${tweet.tweetId}`}
                {...tweet}
              />
            )
          )}
        </section>
        <div className="fixed -translate-x-1/2 bottom-4 left-1/2">
          <AddTweetPanel existCategories={categories} />
        </div>
      </div>
    )

  return <NonTweets />
}

export default Dashboard
