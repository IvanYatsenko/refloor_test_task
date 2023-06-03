import { Layout } from 'antd'
import { useEffect } from 'react'
import { fetchCatalog } from './store/reducers/actionCreates.js'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router'
import { SectionsList } from './components/SectionsList.jsx'
import { ProductsList } from './components/ProductsList.jsx'
import { CartDetail } from './components/CartDetail.jsx'
import { ProductDetail } from './components/ProductDetail.jsx'
import { CartMin } from './components/CartMin.jsx'
import { Head } from './components/Head.jsx'
import { Content } from 'antd/es/layout/layout.js'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCatalog())
  }, [dispatch])

  return (
    <Layout>
      <Head />
      <Layout>
        <Content>
          <Routes>
            <Route path="/" element={<SectionsList />} />
            <Route path="/:section" element={<ProductsList />} />
            <Route path="/:section/:product" element={<ProductDetail />} />
            <Route path="/cart" element={<CartDetail />} />
          </Routes>
        </Content>
        <CartMin />
      </Layout>
    </Layout>
  )
}

export default App
