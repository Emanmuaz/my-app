import React from 'react'
import"Cards.css"
import img1 from './cardsImg/download (1).jpg'
import img2 from './cardsImg/download (2).jpg'
import img3 from './cardsImg/download (3).jpg'
import img4 from './cardsImg/download (4).jpg'


function Cards() {
  return (
    <div>
         <div className='container'>
        <section className='section'>
        <h2>shop for your home essentials</h2>

        <div className="card-container">

            <a href=""><div className='card'>
            <img className='card-image' src={img1} alt="" />
            <p className='card-title'>smart thermostat</p>
            </div></a>

            <a href=""><div className='card'>
            <img className='card-image' src={img2} alt="" />
            <p className='card-title'>electric toothbrush </p>
            </div></a>

            <a href=""><div className='card'>
            <img className='card-image' src={img3} alt="" />
            <p className='card-title'>vacuume cleaner</p>
            </div></a>

            <a href=""><div className='card'>
            <img className='card-image' src={img4} alt="" />
            <p className='card-title '>hair drier</p>
            </div></a>
        </div>

            <p>discover more in home</p>
            </section>
    </div>
       
    </div>
  )
}

export default Cards
