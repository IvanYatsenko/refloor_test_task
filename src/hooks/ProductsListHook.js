import { useSelector } from "react-redux"
import { useParams } from "react-router"

export const useProductsOfSection = () => {
  const { catalog } = useSelector((state) => state.catalogReducer)
  const params = useParams()
  let itemsProducts = []

  catalog.sections.forEach((section) => {
    if (params.section == section.id) {
      itemsProducts = section.items
    }
  })

  const productsOfSection = itemsProducts.map((id) => {
      return catalog.elements[id]
    })

  return productsOfSection
}
