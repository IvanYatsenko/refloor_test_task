import { FloatButton, Layout } from 'antd'
import { useEffect } from 'react'
import { fetchCatalog } from './store/reducers/actionCreates.js'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router'
import { SectionsList } from './components/SectionsList.jsx'
import { ProductsList } from './components/ProductsList.jsx'
import { CartDetail } from './components/CartDetail.jsx'
import { ProductDetail } from './components/ProductDetail.jsx'
import { ShoppingCartOutlined } from '@ant-design/icons'

function App() {
  const { cart } = useSelector((state) => state.catalogReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCatalog())
  }, [dispatch])

  const navigate = useNavigate()

  return (
    <Layout>
      <Layout>
        <Routes>
          <Route path="/" element={<SectionsList />} />
          <Route path="/:section" element={<ProductsList />} />
          <Route path="/:section/:product" element={<ProductDetail />} />
          <Route path="/cart" element={<CartDetail />} />
        </Routes>
        <FloatButton.Group shape="circle" style={{ right: 25, bottom: 50 }}>
          <FloatButton
            badge={{ color: 'green', count: Object.keys(cart).length }}
            type="primary"
            icon={<ShoppingCartOutlined />}
            onClick={() => navigate('/cart')}
          />
          <FloatButton.BackTop />
        </FloatButton.Group>
      </Layout>
    </Layout>
  )
}

export default App
