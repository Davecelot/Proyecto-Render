import React from 'react'
import '../styles/Total.css'

function Total() {
  return (
    <>
      <div className='container-total'>
        <h2>Total de películas</h2>
        <div className='card-totals'>
          <i class="fa-solid fa-film"></i> <p>12</p>
        </div>
      </div>

      <div className='container-total'>
        <h2>Total de usuarios</h2>
        <div className='card-totals'>
          <i class="fa-solid fa-user"></i> <p>5</p>
        </div>
      </div>

    </>
  )
}

export default Total
