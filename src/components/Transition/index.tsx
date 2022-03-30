import { Fragment } from 'react'
import { Transition as TransitionUI } from '@headlessui/react'

interface Props {
  children: JSX.Element | JSX.Element[]
  show?: boolean
}

const Transition = ({ children, show }: Props) => {
  return (
    <TransitionUI
      show={show}
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      {children}
    </TransitionUI>
  )
}

export default Transition
