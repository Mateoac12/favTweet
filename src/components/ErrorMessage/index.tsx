import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  type?: 'error' | 'success' | 'warning' | 'info'
}

const typesError = {
  error: 'bg-red-200 text-red-600',
  success: 'bg-green-200 text-green-600',
  warning: 'bg-yellow-200 text-yellow-600',
  info: 'bg-blue-200 text-blue-600',
}

const ErrorMessage = ({ children, type = 'error' }: Props) => {
  return (
    <span
      className={` inline-block mt-2 px-2 py-1 rounded-lg text-sm ${typesError[type]}`}
    >
      {children}
    </span>
  )
}

export default ErrorMessage
