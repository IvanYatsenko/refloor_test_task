import imgDefault from './../assets/img/section-img.png'
import { Button, List } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { storeSlice } from '../store/reducers/storeSlise'
import { useProductsOfSection } from '../hooks/ProductsListHook'

export const ProductsList = () => {
  const params = useParams()
  const { isLoading } = useSelector((state) => state.catalogReducer)
  const productsOfSection = useProductsOfSection()
  const dispatch = useDispatch()

  const addCardItem = (product) => {
    dispatch(storeSlice.actions.addProductInCart(product))
  }

  return (
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
  )
}
