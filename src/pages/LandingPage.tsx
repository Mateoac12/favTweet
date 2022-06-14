import { useLocation } from 'wouter'
import Button from '../components/Button'
import CategoriesTag from '../components/CategoriesTag'
import Search from '../components/Search'
import TargetTweet from '../components/TargetTweet'
import Title from '../components/Title'
import TwitterIllustrationHome from '../components/TwitterIllustrationHome/Index'
import Underline from '../components/Underline'
import { useHandleLogin } from '../hooks/useHandleLogin'
import { categoryTweet, tweets } from '../mock/data'

const LandingPage = () => {
  const { user, handleLogin } = useHandleLogin()
  const [, setLocation] = useLocation()

  return (
    <>
      <section className="flex h-screen px-2 xl:px-0">
        <div className="flex flex-col justify-center">
          <h1 className="max-w-4xl mb-8 text-4xl font-bold leading-normal text-center md:font-semibold md:text-left md:text-7xl">
            <Underline type="dotted" color="rose">
              Guarda
            </Underline>{' '}
            tus <span className="text-rose-500">tweets</span> en un solo lugar y{' '}
            <Underline type="dotted" color="rose">
              buscalos
            </Underline>{' '}
            cuando quieras.
          </h1>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            {user ? (
              <Button onClick={() => setLocation('/dashboard')} size="text-2xl">
                Ir a tus tweets
              </Button>
            ) : (
              <>
                <Button size="text-2xl" onClick={handleLogin}>Empezar</Button>
                <Button size="text-2xl" type="secondary">
                  <a href='#description-section'>
                    Información
                  </a>
                </Button>
              </>
            )}
          </div>
        </div>
        <TwitterIllustrationHome />
      </section>
      <section className="p-8 my-12 rounded-lg shadow-2xl bg-white/20 shadow-indigo-50">
        <Title id="description-section" size="text-6xl">
          Conserva tus <Underline color="indigo">tweets</Underline>
        </Title>
        <Search data={tweets} sourceSearchId="landing-page-example" />
        <section className="my-4 mb-12 masonry sm:masonry-sm md:masonry-md">
          {tweets.map((tweet) => (
            <TargetTweet key={tweet.tweetId} {...tweet} isExample={true} />
          ))}
        </section>
      </section>
      <section className="p-8 my-20 rounded-lg shadow-2xl bg-white/20 shadow-indigo-50">
        <Title size="text-6xl">
          Organiza por <Underline color="indigo">categorías</Underline>
        </Title>
        <div className="gap-16 mt-12 md:flex">
          <div className="md:w-1/2">
            <p className="mb-8 text-xl md:mb-0">
              Puedes asignar tus tweets a categorías que estén relacionadas con
              un tema.
              <br />
              Te equivocaste en alguna de ellas o quieres agregar más?
              <br />
              ¡Puedes hacerlo!
            </p>
            <CategoriesTag
              categories={[
                'JavaScript',
                'React',
                'Libros',
                'Apartamentos',
                'Trabajos',
                'Luces',
                'Restaurantes',
              ]}
              removeCategory={() => { }}
              setCategories={() => { }}
            />
          </div>
          <div className="mt-12 md:mt-0 md:mx-auto">
            <TargetTweet {...categoryTweet} isExample={true} />
          </div>
        </div>
      </section>
      <footer className="py-2 mb-4 text-center rounded-lg mt-28 bg-sky-600/40 text-sky-50">
        <p>
          Creado por{' '}
          <a
            className="text-sky-800"
            href="https://twitter.com/maadeval"
            target="_blank"
          >
            @maadeval
          </a>
        </p>
      </footer>
    </>
  )
}

export default LandingPage
