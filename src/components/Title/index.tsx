import { ReactNode } from 'react'

interface Props {
  children: string | Element | Element[] | ReactNode
  size?:
    | 'text-xs'
    | 'text-sm'
    | 'text-lg'
    | 'text-xl'
    | 'text-2xl'
    | 'text-3xl'
    | 'text-4xl'
    | 'text-5xl'
    | 'text-6xl'
}

const Title = ({ children, size = 'text-4xl' }: Props) => {
  return <h1 className={`mb-4 font-semibold ${size}`}>{children}</h1>
}

export default Title
