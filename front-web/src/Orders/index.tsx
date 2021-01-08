import { useEffect, useState } from 'react'
import { fetchProducts } from '../api'
import ProdcutsList from './ProductsList'
import StepsHeader from './StepsHeader'
import './styles.css'
import { Product } from './types'

function Orders() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
  }, [])

  console.log(products)

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProdcutsList products={products}/>
    </div>
  )
}

export default Orders