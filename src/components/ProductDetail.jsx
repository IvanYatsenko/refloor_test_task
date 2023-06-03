import { Breadcrumb, Button, Carousel, Layout } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Loading } from './Loading.jsx'
import { Link } from 'react-router-dom'
import { Content, Header } from 'antd/es/layout/layout.js'
import Title from 'antd/es/typography/Title.js'
import { storeSlice } from '../store/reducers/storeSlise.js'

export const ProductDetail = () => {
  const { catalog, isLoading } = useSelector((state) => state.catalogReducer)
  const params = useParams()
  const dispatch = useDispatch()
  const addCardItem = (product) => {
    dispatch(storeSlice.actions.addProductInCart(product))
  }

  let sectionTitle = ''
  let product = catalog.elements[params.product]
  let breadcrumbItems = []

  catalog.sections.forEach((section) => {
    if (section.id == params.section) {
      sectionTitle = section.title
      breadcrumbItems = [
        {
          title: (
            <Link style={{ color: 'white' }} to={'/'}>
              Главная
            </Link>
          ),
        },
        {
          title: (
            <Link style={{ color: 'white' }} to={`/${params.section}`}>
              {sectionTitle}
            </Link>
          ),
        },
        {
          title: product ? product.title : '',
          colorText: 'white ',
        },
      ]
    }
  })

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Layout>
          <Header
            style={{
              background: 'green',
              borderRadius: '10px',
              alignItems: 'center',
              display: 'flex',
              height: 90,
            }}
          >
            <Breadcrumb items={breadcrumbItems} />
          </Header>
          <Content>
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
          </Content>
        </Layout>
      )}
    </>
  )
}
