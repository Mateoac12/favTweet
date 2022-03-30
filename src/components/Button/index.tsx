interface Props {
  children?: Element | Element[] | string
  onClick?: () => void
  type?: 'primary' | 'secondary' | 'twitter'
  size?: 'text-xs' | 'text-sm' | 'text-lg' | 'text-xl' | 'text-2xl'
  icon?: JSX.Element
  px?: 'px-2' | 'px-4' | 'px-6'
  extraClasses?: string
}

const buttonType = {
  primary: 'text-white bg-indigo-600 hover:ring-indigo-300',
  secondary:
    'text-indigo-600 bg-white border border-indigo-600 hover:ring-indigo-300',
  twitter:
    'bg-sky-500 text-white font-bold px-4 py-1 rounded-full inline-flex items-center gap-2 hover:ring-sky-300',
}

const Button = ({
  children,
  onClick,
  type = 'primary',
  size = 'text-lg',
  icon,
  extraClasses,
  px = 'px-6',
}: Props) => {
  return (
    <button
      className={`${px} py-2 inline rounded-lg w-max hover:brightness-105 hover:ring-4 transition ${
        type ? buttonType[type] : ''
      } ${size} ${extraClasses}`}
      onClick={onClick}
    >
      {icon && icon}
      {children}
    </button>
  )
}

export default Button
