import nonTweetIcon from '../assets/non-tweet.png'
import AddTweetPanel from '../components/AddTweetPanel'

const NonTweets = () => {
  return (
    <div className="pt-28">
      <section className="flex flex-col items-center justify-center min-h-screen -mt-28">
        <img className="w-40 mx-auto md:w-80" src={nonTweetIcon} />
        <p className="mx-2 mt-12 mb-8 text-4xl font-semibold text-center md:mx-0 md:text-left text-slate-600">
          No hay tweets! Puedes agregarlos aquí
        </p>
        <AddTweetPanel existCategories={[]} />
      </section>
    </div>
  )
}

export default NonTweets
