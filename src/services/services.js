import { URL_STR } from '../constants/constants'

export const fetchURL = async (callback) => {
  try {
    let response = await fetch(URL_STR)
    if (response.ok) {
      let json = await response.json()
      callback(json)
    }
  } catch (error) {
    console.log(error)
  }
}
