import { Space } from 'antd'
import { Product } from './Product.jsx'
import { arrayof, objectof, string } from 'prop-types'

export const ProductsList = ({ products }) => {
  return (
    <Space className="products">
      {products.map((product) => {
        return <Product key={product.id} product={product} />
      })}
    </Space>
  )
}

Product.propTypes = {
  products: arrayof(objectof(string)),
}
