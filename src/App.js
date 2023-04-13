import { useEffect, useState } from 'react'
import { fetchURL } from './services/services'
import { Product } from './components/Product.jsx'
import { Layout, Space } from 'antd';
import { Content } from 'antd/es/layout/layout';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchURL(setProducts)
  }, [])

  return (
    <Layout>
      <Content>
        <Space className="app">
          {products.map((product) => {
            return <Product key={product.id} product={product} />
          })}
        </Space>
      </Content>
    </Layout>
  )
}

export default App
