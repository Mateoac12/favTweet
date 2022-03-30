import { useLocation } from 'wouter'
import Button from '../components/Button'
import Search from '../components/Search'
import TargetTweet from '../components/TargetTweet'
import Title from '../components/Title'
import TwitterIllustrationHome from '../components/TwitterIllustrationHome/Index'
import Underline from '../components/Underline'
import { useHandleLogin } from '../hooks/useHandleLogin'
import { tweets } from '../mock/data'

const LandingPage = () => {
  const { user } = useHandleLogin()
  const [, setLocation] = useLocation()

  return (
    <>
      <section className="h-screen flex">
        <div className="flex flex-col justify-center">
          <h1 className="text-7xl font-semibold max-w-4xl leading-normal mb-8">
            <Underline type="dotted" color="rose">
              Guarda
            </Underline>{' '}
            tus <span className="text-rose-500">tweets</span> en un solo lugar y{' '}
            <Underline type="dotted" color="rose">
              buscalos
            </Underline>{' '}
            cuando quieras.
          </h1>
          <div className="flex gap-4">
            {user ? (
              <Button onClick={() => setLocation('/dashboard')} size="text-2xl">
                Ir a tus tweets
              </Button>
            ) : (
              <>
                <Button size="text-2xl">Empezar</Button>
                <Button size="text-2xl" type="secondary">
                  Información
                </Button>
              </>
            )}
          </div>
        </div>
        <TwitterIllustrationHome />
      </section>
      <section className="my-12 p-8 bg-white/20 rounded-lg shadow-2xl shadow-indigo-50">
        <Title size="text-6xl">
          Conserva tus <Underline color="indigo">tweets</Underline>
        </Title>
        <Search data={tweets} sourceSearchId="landing-page-example" />
        <section className=" mb-12 my-4 masonry sm:masonry-sm md:masonry-md">
          {tweets.map((tweet) => (
            <TargetTweet key={tweet.tweetId} {...tweet} />
          ))}
        </section>
      </section>
    </>
  )
}

export default LandingPage
