import axios from 'axios'
import { errorHandler } from '../utils'

export const getLanguages = async () => {
  try {
    const { data } = await axios.get<Record<string, number>>('https://api.github.com/repos/microsoft/vscode/languages')

    return Object.keys(data)
  } catch (error) {
    errorHandler(error)
  }
}
