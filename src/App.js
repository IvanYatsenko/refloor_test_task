import { Product } from './components/Product.jsx'
import { Layout, Space } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { useFetchProducts } from './hooks/useFetchProducts'

function App() {
  const { products } = useFetchProducts()

  return (
    <Layout>
      <Content>
        <Space className="products">
          {products.map((product) => {
            return <Product key={product.id} product={product} />
          })}
        </Space>
      </Content>
    </Layout>
  )
}

export default App
