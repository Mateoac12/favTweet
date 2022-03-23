import type { ITargetTweet } from '../../types'
import { generateExternalTwitterLink } from '../../utils/generateExternalTwitterLink'
import { getDateFormat } from '../../utils/getDateFormat'
import Avatar from '../Avatar'
import ProtectedIcon from '../ProtectedIcon'
import Underline from '../Underline'
import VerifiedIcon from '../VerifiedIcon'

const TargetTweet = ({
  avatar,
  name,
  username,
  verified,
  isProtect,
  description,
  followers,
  following,
  userId,
  tweetId,
  text,
  createdAt,
}: ITargetTweet) => {
  return (
    <article className="bg-white/60 px-2 py-4 mb-4 rounded-lg block break-inside relative max-w-md hover:bg-white/80 shadow-none transition hover:shadow-slate-200 hover:shadow-2xl overflow-hidden">
      <span className="absolute text-xs px-2 py-1 bg-white/80 rounded-lg top-2 right-2">
        {getDateFormat(createdAt)}
      </span>
      <figure className="flex gap-2 items-start">
        <Avatar src={avatar} alt={username} />
        <figcaption>
          <div className="flex items-center gap-1">
            <h2 className="text-xl">{name}</h2>
            {verified && <VerifiedIcon w={20} h={20} />}
            {isProtect && <ProtectedIcon />}
          </div>
          <p className="text-slate-600">@{username}</p>
        </figcaption>
      </figure>
      <p className="whitespace-pre-line my-4">{text}</p>
      <div className="w-max rounded-md ml-auto text-sky-600">
        <a
          href={generateExternalTwitterLink({ username, tweetId })}
          rel="noreferrer"
          target="_blank"
          className="px-4 py-1"
        >
          <Underline color="sky">Ir al tweet</Underline>
        </a>
      </div>
    </article>
  )
}

export default TargetTweet
