import { ReactNode } from 'react'

interface Props {
  children: string | Element | Element[] | ReactNode
  id?: string
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

const Title = ({ children, size = 'text-4xl', id }: Props) => {
  return (
    <h1 id={id} className={`mb-4 font-semibold text-4xl md:${size}`}>{children}</h1>
  )
}

export default Title
