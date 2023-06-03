export const filterProductsOfSection = (products, sectionsProductsId) => {
  const productsOfSection = sectionsProductsId.map((id) => {
    return products[id]
  })
  return productsOfSection
}
