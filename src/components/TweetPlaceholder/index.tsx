import Placeholder from '../Placeholder'

const TweetPlaceholder = () => {
  return (
    <div className="mt-6 mb-4">
      <div className="flex items-center gap-2">
        <Placeholder h={40} w={40} rounded={'full'} id={'avatar-user'} />
        <div className="flex flex-col gap-2">
          <Placeholder h={16} w={100} rounded={'lg'} id={'avatar-user-name'} />
          <Placeholder h={12} w={80} rounded={'lg'} id={'avatar-nickname'} />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <Placeholder h={12} w={280} rounded={'lg'} id={'line-1'} />
        <Placeholder h={12} w={260} rounded={'lg'} id={'line-2'} />
        <Placeholder h={12} w={240} rounded={'lg'} id={'line-3'} />
      </div>
    </div>
  )
}

export default TweetPlaceholder
