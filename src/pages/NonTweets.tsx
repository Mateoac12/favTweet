import nonTweetIcon from '../assets/non-tweet.png'
import AddTweetPanel from '../components/AddTweetPanel'

const NonTweets = () => {
  return (
    <div className="pt-28">
      <section className="flex flex-col items-center justify-center min-h-screen -mt-28">
        <img className="mx-auto w-80" src={nonTweetIcon} />
        <p className="mt-12 mb-8 text-4xl font-semibold text-slate-600">
          No hay tweets! Puedes agregarlos aquí
        </p>
        <AddTweetPanel />
      </section>
    </div>
  )
}

export default NonTweets
