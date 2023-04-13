import { useEffect, useState } from 'react'
import { fetchURL } from '../services/services'

export const useFetchProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchURL(setProducts)
  }, [])

  return { products }
}
