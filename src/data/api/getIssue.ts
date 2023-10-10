import axios from 'axios'
import { errorHandler } from '../utils'
import { GithubResponse } from '../types'

export const getIssue = async (label: string, lang: string) => {
  try {
    const { data } = await axios.get<GithubResponse>(
      `https://api.github.com/search/issues?q=is:issue is:open label:"${label}" language:"${lang}"&page=1&per_page=10&sort=created&order=desc`,
    )

    return data
  } catch (error) {
    errorHandler(error)
  }
}
