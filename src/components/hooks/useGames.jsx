import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where, getDoc, doc } from 'firebase/firestore'
import db from '../../DB/db.js'

const useGames = () => {
  const [games, setGames] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {idCategory, idGame} = useParams()

  const getGames = () => {
    const gamesRef = collection( db, "games" )
    getDocs(gamesRef)
      .then((gamesData) => { 
        const gamesDB = gamesData.docs.map((game) => {
          return { id: game.id, ...game.data() }
        }) 
        setGames(gamesDB)
      })
      .catch((error) => { console.log('Error: ' + error) })
      .finally(() => { setIsLoading(false) })
  }

  const getGamesByCategory = () => {
    const gamesRef = collection( db, "games" )
    const queryCategories = query( gamesRef, where( 'category', '==', idCategory))
    getDocs(queryCategories)
      .then( (gamesData) => {
        const gamesDB = gamesData.docs.map((game) => {
          return { id: game.id, ...game.data() }
        }) 
        setGames(gamesDB)
      })
      .catch((error) => { console.log('Error: ' + error) })
      .finally(() => { setIsLoading(false) })
  }

  const getGame = () =>  {
    const gameRef = doc( db, "games", idGame )
    getDoc(gameRef)
      .then((gameData) => {
        const gameDB = { id: idGame, ...gameData.data() }
        setGames(gameDB)
      })
      .catch((error) => { console.log('Error: ' + error) })
      .finally(() => { setIsLoading(false) })
  }

  useEffect(() => {
    if (idGame) {
      getGame()
    } else if (idCategory) {
      getGamesByCategory()
    } else {
      getGames()
    }
  },[idGame, idCategory])

  return (
    {games, isLoading}
  )
}

export default useGames