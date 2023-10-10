import { AxiosError } from 'axios'
import { notifier } from './notifier.ts'

interface ErrorResponse {
  message: string
  status: number
  data: { message: string } | undefined
}

export const errorHandler = (error: (AxiosError & ErrorResponse) | unknown, description?: string) => {
  const defaultDesciption = 'Something went wrong. Please try again later.'

  if (error instanceof AxiosError) {
    if (error.response) {
      notifier({
        type: 'error',
        message: error.response?.data?.message || error.message,
        description: description || defaultDesciption,
      })
    } else if (error.request) {
      notifier({
        type: 'error',
        message: 'Network error',
        description: description || defaultDesciption,
      })
    } else {
      notifier({
        type: 'error',
        message: error.message,
        description: description || defaultDesciption,
      })
    }
  }
}
