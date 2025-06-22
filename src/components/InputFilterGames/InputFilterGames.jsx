import React from 'react'

const InputFilterGames = ({ setFilter, setPriceOrder }) => {

  return (
    <div className="buscador-container">
      <h4 className='buscador-title'>Buscar juegos</h4>
      <input type="text" placeholder='Buscar...' className='buscador-juegos' maxLength="10" onChange={(event) => {setFilter(event.target.value.toLowerCase())}}/>
      <h4 className='buscador-title'>Ordenar por precio</h4>
      <div className="ordenar-container">
        <button className="ordenar-precio" onClick={() => {setPriceOrder('mayor')}}>Mayor</button>
        <button className='ordenar-precio' onClick={() => {setPriceOrder('menor')}}>Menor</button>
      </div>
    </div>
  )
  
}

export default InputFilterGames