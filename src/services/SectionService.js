export const produtctCountPostfixWord = (productCount) => {
  const words = ['товар', 'товара', 'товаров']
  productCount = Math.abs(productCount) % 100
  var num = productCount % 10
  if (productCount > 10 && productCount < 20) return words[2]
  if (num > 1 && num < 5) return words[1]
  if (num == 1) return words[0]
  return words[2]
}
