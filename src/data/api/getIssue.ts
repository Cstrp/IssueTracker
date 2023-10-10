import axios from 'axios'
import { errorHandler } from '../utils'
import { FormValues, GithubResponse } from '../types'

export const getIssue = async (values?: FormValues) => {
  try {
    const { label, language } = values
      ? values
      : {
          label: 'good first issue',
          language: 'javascript',
        }

    const { data } = await axios.get<GithubResponse>(
      `https://api.github.com/search/issues?q=is:issue is:open label:"${label}" language:"${language}"&page=1&per_page=10&sort=created&order=desc`,
    )

    return data
  } catch (error) {
    errorHandler(error)
  }
}
