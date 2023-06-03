import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

export const useBreadcrumbItems = () => {
  const { catalog } = useSelector((state) => state.catalogReducer)
  const location = useLocation()
  if (catalog.sections.length > 0) {
    const breadcrumbItems = []
    const pathArr = location.pathname.split('/').filter((path) => path != '')
    switch (pathArr.length) {
      case 1: {
        breadcrumbItems.push(
          {
            title: (
              <Link style={{ color: 'white' }} to={'/'}>
                Главная
              </Link>
            ),
          },
          {
            title:
              pathArr == 'cart'
                ? 'Корзина'
                : catalog.sections.filter(
                    (section) => section.id == pathArr[0],
                  )[0].title,
          },
        )
        break
      }
      case 2: {
        breadcrumbItems.push(
          {
            title: (
              <Link style={{ color: 'white' }} to={'/'}>
                Главная
              </Link>
            ),
          },
          {
            title: (
              <Link
                style={{ color: 'white' }}
                to={`/${
                  catalog.sections.filter(
                    (section) => section.id == pathArr[0],
                  )[0].id
                }`}
              >
                {
                  catalog.sections.filter(
                    (section) => section.id == pathArr[0],
                  )[0].title
                }
              </Link>
            ),
          },
          {
            title: catalog.elements[pathArr[1]].title,
          },
        )
        break
      }
      default: {
        breadcrumbItems.push({
          title: 'Главная',
        })
      }
    }
    return breadcrumbItems
  }
}
