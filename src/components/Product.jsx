import { Card, Image } from "antd"
import Title from "antd/es/typography/Title"
import Text from "antd/es/typography/Text"

export const Product = (product) => {
  return (
    <Card className="product">
      <Image src={product.product.src} alt={product.product.title} />
      <Title level={5}>{product.product.title}</Title>
      <Text code copyable={{ text: product.product.id }}>код товара: {product.product.id}</Text>
    </Card>
  )
}
