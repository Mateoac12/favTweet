import { Popover } from '@headlessui/react'
import { addTweet } from '../../firebase/firestore'
import { useHandleLogin } from '../../hooks/useHandleLogin'
import { useTweet } from '../../hooks/useTweet'
import { ITargetTweet } from '../../types'
import ArrowBottomIcon from '../ArrowBottomIcon'
import Button from '../Button'
import CategoryInput from '../CategoryInput'
import ErrorMessage from '../ErrorMessage'
import TargetTweet from '../TargetTweet'
import Transition from '../Transition'
import TweetPlaceholder from '../TweetPlaceholder'

interface Props {
  existCategories: string[]
}

const AddTweetPanel = ({ existCategories }: Props) => {
  const { user } = useHandleLogin()
  const {
    error,
    handleCheckLink,
    handleSetInput,
    input,
    isLoading,
    resetTweet,
    tweet,
  } = useTweet()

  const handleSubmitTweet = async () => {
    await addTweet({ ...tweet } as ITargetTweet, user?.uid!)
  }

  return (
    <Popover as="div" className="relative z-40 p-4">
      <Popover.Button as="div">
        <Button size="text-2xl">Agregar tweet</Button>
      </Popover.Button>
      <Transition>
        <Popover.Panel className="w-screen absolute left-1/2 md:min-w-full -translate-x-1/2 bottom-[calc(100%_+_16px)] md:w-auto p-4 rounded-lg origin-bottom bg-white/90 backdrop-blur shadow-2xl shadow-slate-300">
          {({ close }) => (
            <>
              <p className="text-indigo-600">Pega la URL del tweet</p>
              <div className="flex items-center gap-2 mt-2 md:gap-4">
                <input
                  value={input}
                  onChange={handleSetInput}
                  className="block w-full px-4 py-2 transition border rounded-lg md:w-80 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-300"
                  placeholder="URL del tweet..."
                />
                <Button
                  px="px-2"
                  extraClasses="py-2 self-normal"
                  size="text-xl"
                  onClick={() => handleCheckLink(input)}
                  icon={
                    <ArrowBottomIcon rotate="-90" color="white" h={16} w={16} />
                  }
                ></Button>
              </div>
              {error.message && (
                <ErrorMessage type={error.type!}>{error.message}</ErrorMessage>
              )}
              {isLoading && <TweetPlaceholder />}
              {tweet && (
                <>
                  <div className="mt-4">
                    <TargetTweet {...tweet} />
                  </div>
                  <p className="mt-4 text-lg text-indigo-400 border-b border-indigo-200">
                    Agregar categorías
                  </p>
                  <div className="my-4">
                    <CategoryInput existCategories={existCategories} />
                  </div>
                  <div className="flex justify-center pt-4 pb-2 border-t">
                    <Button
                      type="secondary"
                      size="text-sm"
                      extraClasses="w-full"
                      onClick={() => {
                        handleSubmitTweet()
                        close()
                        resetTweet()
                      }}
                    >
                      Guardar tweet
                    </Button>
                  </div>
                </>
              )}
            </>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default AddTweetPanel
