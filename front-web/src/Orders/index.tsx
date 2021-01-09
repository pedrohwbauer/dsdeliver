import { useEffect, useState } from 'react'
import { fetchProducts } from '../api'
import OrderLocation from './OrderLocation'
import ProdcutsList from './ProductsList'
import StepsHeader from './StepsHeader'
import './styles.css'
import { Product, OrderLocationData } from './types'

function Orders() {
  const [products, setProducts] = useState<Product[]>([])
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>()

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
      <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
    </div>
  )
}

export default Orders