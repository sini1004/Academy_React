import React from 'react'

const Banner = ({movie}) => {
  console.log('?????: ',movie)
  return (
    <div className='banner'
    style={{backgroundImage:`url(https://image.tmdb.org/t/p/w1920_and_h600_multi_faces/${movie.poster_path})`}}>
    </div>
  )
}

export default Banner