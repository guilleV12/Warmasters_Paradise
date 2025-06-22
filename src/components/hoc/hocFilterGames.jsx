import React, { useState } from 'react'
import useGames from '../hooks/useGames'
import './hoc.css'
import InputFilterGames from '../InputFilterGames/InputFilterGames';
import LoadingSpinnerComponent from 'react-spinners-components';

const hocFilterGames = (Componente) => {
  return function () {
    const {games, isLoading} = useGames()
    const [filter, setFilter] = useState("")
    const [priceOrder, setPriceOrder] = useState("")

    const filtrate = () => {
      let filteredGames = games.filter((game) => game.name.toLowerCase().includes(filter))

      if (priceOrder === "mayor") {
        filteredGames.sort((prevGame, nextGame) => nextGame.price - prevGame.price)
      } else if (priceOrder === "menor") {
        filteredGames.sort((prevGame, nextGame) => prevGame.price - nextGame.price)
      }
      return filteredGames
    }

  return (
    <main className="main-container">
      {
        isLoading ? (
          <div className='spinner'>
            <LoadingSpinnerComponent type='Eater' color={ 'blueviolet' } size={ '300px' }/>
          </div>
        ) : (
          <>
            <InputFilterGames setFilter={setFilter} setPriceOrder={setPriceOrder}/>
            <Componente games={filtrate()} filter={filter} priceOrder={priceOrder}/>
          </>
        )
      }        
    </main>
  )
  }
}

export default hocFilterGames