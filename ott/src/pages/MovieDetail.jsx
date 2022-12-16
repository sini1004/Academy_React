import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { movieAction } from '../redux/action/movieAction'

const MovieDetail = () => {
  // 파라미터만 받아오기
  const {id} = useParams();

  const {detailMovies, loading} = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(movieAction.getDetailMovies(id));
  },[]);

  return (
    <div>MovieDetail-영화상세페이지입니다.</div>
  )
}

export default MovieDetail