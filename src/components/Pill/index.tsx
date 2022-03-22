interface Props {
  children: JSX.Element | JSX.Element[] | string
  size?:
    | 'text-sm'
    | 'text-lg'
    | 'text-xl'
    | 'text-2xl'
    | 'text-3xl'
    | 'text-4xl'
    | 'text-5xl'
    | 'text-6xl'
}

const Pill = ({ children, size }: Props) => {
  return (
    <span className={`px-4 ${size || ''} bg-sky-200 text-sky-600 rounded-lg`}>
      {children}
    </span>
  )
}

export default Pill
