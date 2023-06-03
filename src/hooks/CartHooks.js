import { useSelector } from 'react-redux'

export const useProductInCart = () => {
  const { cart, catalog, isLoading } = useSelector(
    (state) => state.catalogReducer,
  )
  let productsInCart = []
  if (!isLoading) {
    const productsInCartId = Object.keys(cart)
    productsInCart = productsInCartId.map((productId) => {
      return {
        id: catalog.elements[productId].id,
        title: catalog.elements[productId].title,
        count: cart[productId].count,
        price: catalog.elements[productId].price,
        currency: catalog.elements[productId].currency,
        key: catalog.elements[productId].id,
      }
    })
  }
  return productsInCart
}
