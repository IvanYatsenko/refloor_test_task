import { Card, Image } from 'antd'
import Title from 'antd/es/typography/Title'
import Text from 'antd/es/typography/Text'

export const Product = (product) => {
  const imageStyle = {
    objectFit: 'cover',
    height: '150px',
    width: '150px',
  }

  const codeTextStyle = {
    position: 'absolute',
    right: '15px',
    top: '15px',
  }

  return (
    <Card className="product" hoverable>
      <Image
        preview={false}
        style={imageStyle}
        src={product.product.src}
        alt={product.product.title}
      />
      <Title level={5}>{product.product.title}</Title>
      <Text style={codeTextStyle} code copyable={{ text: product.product.id }}>
        код товара: {product.product.id}
      </Text>
    </Card>
  )
}
