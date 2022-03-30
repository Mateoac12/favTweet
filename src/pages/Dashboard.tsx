import Underline from '../components/Underline'
import nonTweetIcon from '../assets/non-tweet.png'
import Title from '../components/Title'
import AddTweetPanel from '../components/AddTweetPanel'

const Dashboard = () => {
  return (
    <div className="pt-28">
      <Title>
        Panel de <Underline color="indigo">tweets</Underline>
      </Title>
      <section className="min-h-screen flex flex-col justify-center items-center -mt-28">
        <img className="w-80 mx-auto" src={nonTweetIcon} />
        <p className="text-4xl mt-12 mb-8  font-semibold text-slate-600">
          No hay tweets! Puedes agregarlos aquí
        </p>
        <AddTweetPanel />
      </section>
    </div>
  )
}

export default Dashboard
