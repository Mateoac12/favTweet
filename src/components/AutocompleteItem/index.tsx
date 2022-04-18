import { ITargetTweet } from '../../types'
import { generateExternalTwitterLink } from '../../utils/generateExternalTwitterLink'
import Avatar from '../Avatar'

interface Props extends ITargetTweet {}

const AutocompleteItem = ({ name, username, text, avatar, tweetId }: Props) => {
  return (
    <a
      href={generateExternalTwitterLink({ username, tweetId })}
      target="_blank"
      className="p-2 transition-colors bg-transparent rounded-lg lg:divide-x md:grid search-result-grid hover:bg-slate-200/40"
      rel="noreferrer"
    >
      <div className="items-center hidden gap-2 md:pr-2 lg:flex">
        <Avatar src={avatar} alt={username + ' avatar'} />
        <div>
          <p className="text-xl">{name}</p>
          <p className="text-slate-600">@{username}</p>
        </div>
      </div>
      <p className="text-xl lg:hidden">{name}</p>
      <p className="md:p-2">{text}</p>
    </a>
  )
}

export default AutocompleteItem
