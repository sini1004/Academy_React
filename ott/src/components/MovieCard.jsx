import React from 'react'

const MovieCard = ({item}) => {
  return (
    <div className='card'
    style={{
      backgroundImage:`URL("https://www.themoviedb.org/t/p/w710_and_h400_multi_faces/${item.backdrop_path}")`
    }}>
      <div className='card_info'>
        <h2>{item.title}</h2>
        <p>{item.vote_average}</p>
      </div>
    </div>
  )
}

export default MovieCard