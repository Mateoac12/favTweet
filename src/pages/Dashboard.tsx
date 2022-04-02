import { useEffect, useState } from 'react'
import TargetTweet from '../components/TargetTweet'
import { getTweets } from '../firebase/firestore'
import { useHandleLogin } from '../hooks/useHandleLogin'
import { ITargetTweet } from '../types'
import NonTweets from './NonTweets'

const Dashboard = () => {
  const [tweets, setTweets] = useState<ITargetTweet[]>([])
  const [loader, setLoader] = useState<boolean>(true)
  const { user } = useHandleLogin()

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
      <div className="absolute mt-28">
        <section className="my-4 mb-12 masonry sm:masonry-sm md:masonry-md">
          {tweets.map((tweet) => (
            <TargetTweet key={`target-dashboard-${tweet.tweetId}`} {...tweet} />
          ))}
        </section>
      </div>
    )

  return <NonTweets />
}

export default Dashboard
