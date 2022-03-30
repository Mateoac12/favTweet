import { useState } from 'react'
import { IErrors } from '../types'

const initialError = {
  message: null,
  type: null,
}

export const useError = () => {
  const [error, setError] = useState<IErrors>(initialError)

  const resetError = () => setError(initialError)

  return {
    error,
    setError,
    resetError,
  }
}
