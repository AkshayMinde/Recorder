import React from 'react'
import { useReactMediaRecorder } from 'react-media-recorder'
import Button from 'react-bootstrap/Button';

const Audio = () => {
    const {status, startRecording, stopRecording, mediaBlobUrl} = useReactMediaRecorder({audio:true})
    return (
              <>
                  <h2>{status}</h2>
                  <Button variant="success" onClick={startRecording}>Start Recording</Button>
                  <Button variant="danger" onClick={stopRecording}>Stop Recording</Button>
                  <video src={mediaBlobUrl} autoplay loop controls></video>
              </>
      )
}

export default Audio