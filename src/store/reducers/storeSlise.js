import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  catalog: {
    elements: {},
    sections: [],
  },
  cart: {},
  isLoading: false,
  error: '',
}

export const storeSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    catalogFetching(state) {
      state.isLoading = true
    },
    catalogFetchingSuccess(state, action) {
      state.isLoading = false
      state.error = ''
      state.catalog = action.payload
    },
    catalogFetchingError(state, action) {
      state.isLoading = false
      state.error = action.payload
    },
    addProductInCart(state, action) {
      if (Object.keys(state.cart).includes(action.payload.product.id)) {
        state.cart[action.payload.product.id].count++
      } else {
        state.cart[action.payload.product.id] = {
          count: 1,
        }
      }
    },
    pullProductInCart(state, action) {
      if (state.cart[action.payload.product.id].count > 1) {
        state.cart[action.payload.product.id].count--
      } else {
        delete state.cart[action.payload.product.id]
      }
    },
    removeProductInCart(state, action) {
      delete state.cart[action.payload.product.id]
    },
  },
})

export default storeSlice.reducer
