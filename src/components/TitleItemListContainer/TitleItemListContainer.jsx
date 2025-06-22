import React from 'react'
import './titleItemListContainer.css'
import { useParams } from 'react-router-dom'

const TitleItemListContainer = ({ filter, priceOrder }) => {
  const {idCategory} = useParams()
  
  return (
    <div className='titulo-item-list-container'>
      {idCategory && idCategory}
      {idCategory && ((priceOrder || filter) && ' > ')}
      {priceOrder && `Ordenados por <${priceOrder}> precio`}
      {priceOrder && (filter && ' > ')}
      {filter && `Resultados para "${filter}"`}
      
    </div>
  )
}

export default TitleItemListContainer