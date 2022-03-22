interface Props {
  children: JSX.Element | JSX.Element[] | string
  onClick?: () => void
  type?: 'primary' | 'secondary'
  size?: 'text-xs' | 'text-sm' | 'text-lg' | 'text-xl' | 'text-2xl'
}

const buttonType = {
  primary: 'text-white bg-indigo-600 hover:ring-indigo-300',
  secondary:
    'text-indigo-600 bg-white border border-indigo-600 hover:ring-indigo-300',
}

const Button = ({
  children,
  onClick,
  type = 'primary',
  size = 'text-lg',
}: Props) => {
  return (
    <button
      className={`px-6 py-2 inline rounded-lg w-max hover:brightness-105 hover:ring-4 transition ${
        type ? buttonType[type] : ''
      } ${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
