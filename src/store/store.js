import { combineReducers, configureStore } from '@reduxjs/toolkit'
import catalogReducer from './reducers/storeSlise'

const rootReducer = combineReducers({
  catalogReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}
