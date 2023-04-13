import { Card, Image } from 'antd'
import Title from 'antd/es/typography/Title'
import Text from 'antd/es/typography/Text'
import { STYLES } from '../constants/constants'

export const Product = ({ product }) => {
  return (
    <Card className="product" hoverable>
      <Image
        preview={false}
        style={STYLES.IMAGE}
        src={product.src}
        alt={product.title}
      />
      <Title level={5}>{product.title}</Title>
      <Text
        style={STYLES.TEXT_CODE_PRODUCT}
        code
        copyable={{ text: product.id }}
      >
        код товара: {product.id}
      </Text>
    </Card>
  )
}