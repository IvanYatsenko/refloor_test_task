import { useEffect, useState } from 'react'
import { fetchURL } from './services/services'
import { Product } from './components/Product.jsx'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchURL(setProducts)
  }, [])

  return (
    <div className="app">
      {products.map((product) => {
        return <Product key={product.id} product={product} />
      })}
    </div>
  )
}

export default App
