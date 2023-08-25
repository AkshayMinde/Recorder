import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
        <Container className='my-5'>
            <div className="row">
                <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}} className="col-lg-6 mx-auto">
                    <Card style={{ width: '300rem', height:'10rem' }} className='mx-5'>
                        <Card.Body>
                            <Card.Title className='my-3'>Video</Card.Title>
                            <Button variant="info">
                                <Link style={{textDecoration:'none'}} to='http://localhost:3000/video'>Go to record</Link>
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '300rem', height:'10rem' }} className='mx-5'>
                        <Card.Body>
                            <Card.Title className='my-3'>Audio</Card.Title>
                            <Button variant="info">
                            <Link style={{textDecoration:'none'}} to='http://localhost:3000/audio'>Go to record</Link>
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '300rem', height:'10rem' }} className='mx-5'>
                        <Card.Body>
                            <Card.Title className='my-3'>Screen</Card.Title>
                            <Button variant="info">
                            <Link style={{textDecoration:'none'}} to='http://localhost:3000/screen'>Go to record</Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Home