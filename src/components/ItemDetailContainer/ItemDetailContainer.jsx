import React from 'react'
import './itemdetail.css'
import useGames from '../hooks/useGames'
import ItemDetail from './ItemDetail'
import LoadingSpinnerComponent from 'react-spinners-components';

const ItemDetailContainer = ({ }) => {
  const {games, isLoading} = useGames()

  return (
    <>
      {
        isLoading ? (
          <div className='spinner'>
            <LoadingSpinnerComponent type='Eater' color={ 'blueviolet' } size={ '300px' }/>
          </div>
        ) : (
          <ItemDetail game={games} isLoading={isLoading}/>
        )
      }
    </>
  )
}

export default ItemDetailContainer