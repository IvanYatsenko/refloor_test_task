import { useEffect, useState } from 'react'

function App() {
  const [products, setProducts] = useState([])

  const fetchURL = async () => {
    let response = await fetch('https://moscow.fargospc.ru/test/json/')
    if (response.ok) {
      let json = await response.json()
      setProducts(json)
      console.log(json)
    } else {
      alert('Ошибка HTTP: ' + response.status)
    }
  }

  useEffect(() => {
    fetchURL()
  }, [])

  return (
    <div className="app">
      {products.map((element) => (
        <div key={element.id} className="product">
          <p>{element.title}</p>
          <img src={element.src} alt={element.title} />
        </div>
      ))}
    </div>
  )
}

export default App
