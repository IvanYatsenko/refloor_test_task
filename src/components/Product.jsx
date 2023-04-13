export const Product = (product) => {
  return (
    <div className="product">
      <img src={product.product.src} alt={product.product.title} />
      <p>{product.product.title}</p>
      <span>код товара: {product.product.id}</span>
    </div>
  )
}
