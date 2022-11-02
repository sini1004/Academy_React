import React from 'react';

function Avata({image, isNew}){

  return(
    <div className='avata'>
      <div className='photo'>
        <img src={image} alt="avata" />
      </div>

      { isNew && <span className='new'>new</span> }
    </div>
  )
}

Avata.defaultProps = { image:"https://images.unsplash.com/photo-1567460391430-9ad3b51c0f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
export default Avata
