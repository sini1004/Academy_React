import React from 'react'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import YouTube from 'react-youtube';

const Trailer = ({item}) => {

  const [show, setShow] = useState(false);

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  // "Official Trailer"가 있을 때
  const official = item.results?.find((item) => {
    return item.name === 'Official Trailer';
  });

  return (
    <div>
      <Button className='trailer_button' onClick={() => setShow(true)}>
        Watch a movie
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <YouTube videoId={official?.key || item.results[0].key} opts={opts} onReady={_onReady} />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Trailer