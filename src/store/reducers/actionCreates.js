import { URL_STR } from '../../constants/constants'
import { storeSlice } from './storeSlise'

export const fetchCatalog = () => async (dispatch) => {
  try {
    dispatch(storeSlice.actions.catalogFetching())
    let response = await fetch(URL_STR)
    if (response.ok) {
      let json = await response.json()
      dispatch(storeSlice.actions.catalogFetchingSuccess(json))
    }
  } catch (error) {
    console.log(error)
    dispatch(storeSlice.actions.catalogFetchingError(error.message))
  }
}
