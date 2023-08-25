import React from 'react'
import { useReactMediaRecorder } from 'react-media-recorder'
import Button from 'react-bootstrap/Button';

const Screen = () => {
    const {status, startRecording, stopRecording, mediaBlobUrl} = useReactMediaRecorder({screen:true})
    return (
              <div>
                  <p>{status}</p>
                  <Button variant="success" onClick={startRecording}>Start Recording</Button>
                  <Button variant="danger" onClick={stopRecording}>Stop Recording</Button>
                  <video src={mediaBlobUrl} autoplay loop controls></video>
              </div>
      )
}

export default Screen