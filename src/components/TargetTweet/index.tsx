import type { ITargetTweet } from '../../types'
import { generateExternalTwitterLink } from '../../utils/generateExternalTwitterLink'
import Avatar from '../Avatar'
import Pill from '../Pill'
import ProtectedIcon from '../ProtectedIcon'
import Underline from '../Underline'
import VerifiedIcon from '../VerifiedIcon'

import { deleteTweet, updateCategories } from '../../firebase/firestore'
import MenuIcon from '../MenuIcon'
import {
  Popover,
  Dialog,
  Transition as TransitionLibrary,
} from '@headlessui/react'
import Transition from '../Transition'
import { useHandleLogin } from '../../hooks/useHandleLogin'
import { Fragment, useState } from 'react'
import CategoryInput from '../CategoryInput'
import { useTweet } from '../../hooks/useTweet'
import Button from '../Button'

const TargetTweet = ({
  id,
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
  category,
  notHover = false,
  existCategories,
}: ITargetTweet) => {
  const { user } = useHandleLogin()
  const { tweet, addShadowTweet } = useTweet()
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <>
      <article
        className={`bg-white/60 px-2 py-4 mb-4 rounded-lg block break-inside relative max-w-md  shadow-none transition overflow-hidden ${
          notHover
            ? 'hover:bg-white/80 hover:shadow-slate-200 hover:shadow-2xl'
            : ''
        }`}
      >
        <div className="flex items-start justify-between">
          <Popover className="relative order-1">
            <Popover.Button className="p-1 text-xs rounded-full bg-white/80">
              <MenuIcon />
            </Popover.Button>
            <Transition>
              <Popover.Panel className="absolute origin-top-right right-0 z-10 flex flex-col items-end w-48 p-2  transform bg-white rounded-md top-[calc(100%_+_.5rem)] shadow-xl shadow-slate-200">
                <button
                  onClick={() => deleteTweet(user!.uid, id)}
                  className="w-full p-2 text-lg text-right transition rounded-md text-slate-800 hover:bg-slate-50"
                >
                  Eliminar
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full p-2 text-lg text-right transition rounded-md text-slate-800 hover:bg-slate-50"
                >
                  Editar categorías
                </button>
              </Popover.Panel>
            </Transition>
          </Popover>
          <figure className="flex items-start gap-2">
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
        </div>
        <p className="my-4 whitespace-pre-line">{text}</p>
        <div
          className={`ml-auto rounded-md text-sky-600 ${
            category?.length! > 0 ? 'flex w-full items-center' : 'w-max'
          }`}
        >
          {category?.length! > 0 && (
            <div className="flex flex-wrap flex-1 gap-2">
              {category?.map((c) => (
                <Pill key={c}>{c}</Pill>
              ))}
            </div>
          )}
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
      <TransitionLibrary appear show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          onClose={() => setShowModal(false)}
        >
          <TransitionLibrary.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="max-w-md p-6 mx-auto bg-white shadow-xl rounded-2xl">
              <Dialog.Title as="h3" className="text-2xl text-slate-800">
                Lista de Categorías
              </Dialog.Title>
              <div className="mt-4">
                <CategoryInput
                  existCategories={existCategories!}
                  addedTaargetCategories={category!}
                  tweet={{
                    id,
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
                    category,
                    notHover,
                    existCategories,
                  }}
                />
              </div>

              <hr className="my-4" />
              <div className="mt-4">
                <Button
                  px="px-2"
                  onClick={() => {
                    setShowModal(false)
                    addShadowTweet(null)
                    tweet?.category &&
                      updateCategories(user!.uid, id, tweet?.category)
                  }}
                >
                  Guardar cambios
                </Button>
              </div>
            </div>
          </TransitionLibrary.Child>
        </Dialog>
      </TransitionLibrary>
    </>
  )
}

export default TargetTweet
