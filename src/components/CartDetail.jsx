import { Breadcrumb, Button, Layout, Space, Table } from 'antd'
import { useProductInCart } from '../hooks/CartHooks'
import Column from 'antd/es/table/Column'
import { Content, Header } from 'antd/es/layout/layout'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Title from 'antd/es/typography/Title'
import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons'
import { storeSlice } from '../store/reducers/storeSlise'

export const CartDetail = () => {
  const { isLoading } = useSelector((state) => state.catalogReducer)
  const productsInCart = useProductInCart()
  const dispatch = useDispatch()

  const addCartItem = (productId) => {
    dispatch(storeSlice.actions.addProductInCart(productId))
  }
  const pullCartItem = (productId) => {
    dispatch(storeSlice.actions.pullProductInCart(productId))
  }
  const removeCartItem = (productId) => {
    dispatch(storeSlice.actions.removeProductInCart(productId))
  }

  let curretnSum = {
    summ: 0,
    currency: '',
  }
  productsInCart.forEach((product) => {
    curretnSum.summ += product.count * product.price
    curretnSum.currency = product.currency
  })

  const breadcrumbItems = [
    {
      title: (
        <Link style={{ color: 'white' }} to={'/'}>
          Главная
        </Link>
      ),
    },
    {
      title: 'Корзина',
      colorText: 'white ',
    },
  ]
  return (
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
        <Table
          loading={isLoading}
          dataSource={productsInCart}
          pagination={false}
          footer={() => (
            <Title
              level={5}
            >{`Итого: ${curretnSum.summ} ${curretnSum.currency}`}</Title>
          )}
        >
          <Column title="ID" dataIndex="id" />
          <Column title="Товар" dataIndex="title" />
          <Column title={`Цена ${curretnSum.currency}`} dataIndex="price" />
          <Column title="Колличество" dataIndex="count" />
          <Column
            title={`Итого ${curretnSum.currency}`}
            render={(product) => <Space>{product.price * product.count}</Space>}
          />
          <Column
            title="Действия"
            render={(product) => (
              <Space size="middle">
                <Button
                  onClick={() => addCartItem({ product })}
                  type="primary"
                  icon={<PlusCircleOutlined />}
                ></Button>
                <Button
                  onClick={() => pullCartItem({ product })}
                  icon={<MinusCircleOutlined />}
                ></Button>
                <Button
                  onClick={() => removeCartItem({ product })}
                  icon={<DeleteOutlined />}
                ></Button>
              </Space>
            )}
          />
        </Table>
      </Content>
    </Layout>
  )
}
