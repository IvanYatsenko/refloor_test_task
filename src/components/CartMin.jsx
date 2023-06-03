import { ShoppingCartOutlined } from '@ant-design/icons'
import { FloatButton } from 'antd'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export const CartMin = () => {
  const { cart } = useSelector((state) => state.catalogReducer)
  const navigate = useNavigate()
  return (
    <FloatButton.Group shape="circle" style={{ right: 25, bottom: 50 }}>
      <FloatButton
        badge={{ color: 'green', count: Object.keys(cart).length }}
        type="primary"
        icon={<ShoppingCartOutlined />}
        onClick={() => navigate('/cart')}
      />
      <FloatButton.BackTop />
    </FloatButton.Group>
  )
}
