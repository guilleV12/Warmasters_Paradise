import React, { useState } from 'react'
import ItemCountController from '../ItemCount/ItemCountController'

const ItemDetail = ({ game }) => {
  const [mainImage, setMainImage] = useState(game.images[0])

  const images = game.images.filter((image) => image !== mainImage)

  return (
    <main className="main-item-detail">
      <div className="item-detail-container">
        
        <div className="images-detail-container">
          <div className="side-images-detail">
            {
              images.map((image) => 
                (mainImage !== image) && (
                  <div className="side-img-container" key={image}>
                    <img src={image} className='side-images-img' onClick={() => {setMainImage(image)}}/>
                  </div>
                )
              )
            }
          </div>
          <div className="main-image-detail">
            <img src={mainImage} alt="" className='main-image-img'/>
          </div>
        </div>

        <div className="detail-container-details">
          <div className='detail-details-title'>
            <h1 className='detail-title-paragraph'>
              {game.name}
            </h1>
          </div>
          <div className="detail-categoria-container">
            <h2 className='subtitle-description'>Categoria</h2>
            <p>{game.category}</p>
          </div>
          <div className="detail-details-descripcion">
            <h2 className='subtitle-description'>Descripcion</h2>
            <p>
              {game.description}
            </p>
          </div>
          <div className="detail-details-price">
            <h2>
              {`$${game.price}`}
            </h2>
          </div>
          <ItemCountController game={game}/>
        </div>

      </div>
    </main>
  )
}

export default ItemDetail