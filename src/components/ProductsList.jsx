import imgDefault from './../assets/img/section-img.png'
import { Breadcrumb, Button, List } from 'antd'
import { filterProductsOfSection } from '../services/CatalogService.js'
import { Loading } from './Loading.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Content, Header } from 'antd/es/layout/layout.js'
import { storeSlice } from '../store/reducers/storeSlise'

export const ProductsList = () => {
  const { catalog, isLoading } = useSelector((state) => state.catalogReducer)
  const params = useParams()
  let sectionTitle = ''
  let itemsProducts = []
  const dispatch = useDispatch()
  const addCardItem = (product) => {
    dispatch(storeSlice.actions.addProductInCart(product))
  }

  catalog.sections.map((section) => {
    if (params.section == section.id) {
      sectionTitle = section.title
      itemsProducts = section.items
    }
  })
  const productsOfSection = filterProductsOfSection(
    catalog.elements,
    itemsProducts,
  )

  return (
    <Content>
      {isLoading ? (
        <Loading />
      ) : (
        <Header
          style={{
            background: 'green',
            borderRadius: '10px',
            alignItems: 'center',
            display: 'flex',
            height: 90,
          }}
        >
          <Breadcrumb
            items={[
              {
                title: (
                  <Link style={{ color: 'white' }} to={'/'}>
                    Главная
                  </Link>
                ),
              },
              {
                title: sectionTitle,
              },
            ]}
          />
        </Header>
      )}
      <List
        style={{ marginTop: 20 }}
        grid={{
          xs: 1,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 4,
          gutter: 15,
        }}
        itemLayout="horizontal"
        loading={isLoading}
        dataSource={productsOfSection}
        renderItem={(product) => (
          <Link to={`/${params.section}/${product.id}`}>
            <List.Item
              style={{
                border: '1px solid green',
                borderRadius: '12px',
                padding: '8px',
              }}
              extra={
                <Button
                  onClick={(event) => {
                    event.preventDefault()
                    addCardItem({ product })
                  }}
                  style={{ marginBottom: 10 }}
                  type="primary"
                >
                  В корзину
                </Button>
              }
            >
              <List.Item.Meta
                avatar={
                  <img
                    height={100}
                    alt={product.title}
                    src={product.src ? product.src : imgDefault}
                  />
                }
                title={product.title}
                description={`${product.price} ${product.currency}`}
              />
            </List.Item>
          </Link>
        )}
      />
    </Content>
  )
}
