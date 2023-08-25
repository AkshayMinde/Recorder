import React from 'react'
import { useReactMediaRecorder } from 'react-media-recorder'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Audio = () => {
    const {status, startRecording, stopRecording, mediaBlobUrl} = useReactMediaRecorder({audio:true})
    return (
        <>
            <Container className='my-5'>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-evenly'}}>
                <h2>Status - {status}</h2>
                <Button className='my-2' variant="success" onClick={startRecording}>Start Recording</Button>
                <Button className='mb-3' variant="danger" onClick={stopRecording}>Stop Recording</Button>
                <video src={mediaBlobUrl} autoplay loop controls></video>
            </div>
            </Container>
        </>
      )
}

export default Audio