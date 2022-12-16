import React from 'react'
import {Badge} from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MovieCard = ({item}) => {
  // sotre에서 genresList 불러옴
  const {genreList} = useSelector((state) => state.movie);
  return (
    <div className='card_movie'
    style={{
      backgroundImage:`URL("https://www.themoviedb.org/t/p/w710_and_h400_multi_faces/${item.backdrop_path}")`
    }}>
      <div className='card_info'>
        <div className='card_info_wrap'>
          <h3>{item.title}</h3>
          <div className='badge'>
            {item.genre_ids.map((id) => (
              <Badge bg="success">{genreList.find((item) => item.id === id).name}</Badge>
            ))}
          </div>
          <div className="card_infosub">
            <p>⭐️ {item.vote_average}</p>
            <span className={item.adult ? 'r_rated' : 'g_rated'}>
              {" "}
              {item.adult ? 'R-rated' : 'G-rated'} {" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard