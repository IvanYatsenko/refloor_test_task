import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { useFetchProducts } from './hooks/useFetchProducts'
import { ProductsList } from './components/ProductsList.jsx'

function App() {
  const { products } = useFetchProducts()

  return (
    <Layout>
      <Content>
        <ProductsList products={products} />
      </Content>
    </Layout>
  )
}

export default App
