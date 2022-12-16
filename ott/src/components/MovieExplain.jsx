import React from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap';

const MovieExplain = ({item}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <img 
              className='detail_img'
              src={`https://www.themoviedb.org/t/p/original/${item.poster_path}`} alt="" />
            </Col>
          <Col md={6}>
            {item.genres?.map((item) => (
              <Badge bg="success" key={item.id}>{item.name}</Badge>
            ))}
            <h1>{item.title}</h1>
            <h1>{item.tagline}</h1>
            <div className='detail_info'>
              <p>⭐️ {item.vote_average}</p>
              <span>👥 {item.popularity}</span>
              <span className={item.adult ? 'r_rated' : 'g_rated'}>
                {item.adult ? '🔴 R-rated' : '🟢 G-rated'}
              </span>
            </div>
            <div className='detail_overview'>
              {item.overview}
            </div>
            <div>비디오</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MovieExplain