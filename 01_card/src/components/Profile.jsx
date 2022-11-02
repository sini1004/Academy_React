import React from 'react';
import Avata from './Avata';

function Profile({image, name, job, isNew}){

  return(
    <div className='profile'>
      <Avata image={image} isNew={isNew} />
      <h2>{name}</h2>
      <p>{job}</p>
    </div>
  )
}

Profile.defaultProps = { name:'unnamed', job:"..." }
export default Profile
