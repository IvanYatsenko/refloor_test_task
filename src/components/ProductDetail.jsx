import { Button, Carousel, Space } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Loading } from './Loading.jsx'
import Title from 'antd/es/typography/Title.js'
import { storeSlice } from '../store/reducers/storeSlise.js'

export const ProductDetail = () => {
  const { catalog, isLoading } = useSelector((state) => state.catalogReducer)
  const params = useParams()
  const dispatch = useDispatch()
  const addCardItem = (product) => {
    dispatch(storeSlice.actions.addProductInCart(product))
  }

  let product = catalog.elements[params.product]

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Space direction="vertical" align="center">
          <Title level={3} style={{ textAlign: 'center' }}>
            {product ? product.title : ''}
          </Title>
          <Carousel
            autoplay
            style={{
              width: '290px',
              color: '#fff',
              background: 'green',
              margin: '20px auto',
            }}
          >
            <img src={product ? product.src : ''} alt="img" />
            {product
              ? product.photo.map((photo) => (
                  <img key={photo.id} src={photo.src} alt="img" />
                ))
              : ''}
          </Carousel>
          <Title level={5} style={{ textAlign: 'center' }}>
            {product ? `${product.price} ${product.currency}` : ''}
          </Title>
          <Button
            onClick={(event) => {
              event.preventDefault()
              addCardItem({ product })
            }}
            style={{ display: 'block', margin: '10px auto' }}
            type="primary"
          >
            В корзину
          </Button>
        </Space>
      )}
    </>
  )
}
