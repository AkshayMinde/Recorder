import React, {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import Video from './Video';
import Audio from './Audio';
import Screen from './Screen';


const App = () => {
    const [list, setList] = useState(
        localStorage.list? JSON.parse(localStorage.list):[]
    );

    useEffect(() => {
        localStorage.list = JSON.stringify(list); 
    }, [list])

    const addRecToList = (note) => {
        setList([...list, note])
    }
   
  return (
          <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element = {<Home/>}></Route>
                    <Route path='/video' element = {<Video addRecToList={addRecToList}/>}></Route>
                    <Route path='/audio' element = {<Audio addRecToList={addRecToList}/>}></Route>
                    <Route path='/screen' element = {<Screen addRecToList={addRecToList}/>}></Route>
                </Routes>
            </BrowserRouter>
          </>  
    )
}

export default App