interface Props {
  children: JSX.Element | JSX.Element[] | string
  type?: 'wavy' | 'dotted' | 'dashed' | 'solid'
  color?: 'sky' | 'rose' | 'indigo'
}

const underlineType = {
  wavy: 'decoration-wavy',
  dotted: 'decoration-dotted',
  dashed: 'decoration-dashed',
  solid: 'decoration-solid',
}

const colorType = {
  sky: 'decoration-sky-500',
  rose: 'decoration-rose-500',
  indigo: 'decoration-indigo-500',
}

const Underline = ({ children, type = 'solid', color = 'sky' }: Props) => {
  return (
    <span
      className={`underline ${type ? underlineType[type] : ''} ${
        color ? colorType[color] : ''
      }`}
    >
      {children}
    </span>
  )
}

export default Underline
