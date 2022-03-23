import { ITargetTweet } from '../../types'
import { generateExternalTwitterLink } from '../../utils/generateExternalTwitterLink'
import Avatar from '../Avatar'

interface Props extends ITargetTweet {}

const AutocompleteItem = ({ name, username, text, avatar, tweetId }: Props) => {
  return (
    <a
      href={generateExternalTwitterLink({ username, tweetId })}
      target="_blank"
      className="grid search-result-grid bg-transparent hover:bg-slate-200/40 transition-colors p-2 rounded-lg divide-x"
      rel="noreferrer"
    >
      <div className="flex items-center gap-2 pr-2">
        <Avatar src={avatar} alt={username + ' avatar'} />
        <div>
          <p className="text-xl">{name}</p>
          <p className="text-slate-600">@{username}</p>
        </div>
      </div>
      <p className="p-2">{text}</p>
    </a>
  )
}

export default AutocompleteItem
