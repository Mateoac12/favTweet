import twitterIcon from '../../assets/twitter-illustration.png'
import heartIcon from '../../assets/heart-illustration.png'

const TwitterIllustrationHome = () => {
  return (
    <div className="flex-1 items-center flex">
      <figure className="relative">
        <img className="drop-shadow-2xl" src={twitterIcon} />
        <img
          className="absolute w-20 bottom-10 left-10 drop-shadow-2xl"
          src={heartIcon}
        />
        <img
          className="absolute w-20 top-4 right-14 drop-shadow-2xl"
          src={heartIcon}
        />
      </figure>
    </div>
  )
}

export default TwitterIllustrationHome
