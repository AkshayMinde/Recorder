import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import Video from './Video';
import Audio from './Audio';
import Screen from './Screen';


const App = () => {
   
  return (
          <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element = {<Home/>}></Route>
                    <Route path='/video' element = {<Video/>}></Route>
                    <Route path='/audio' element = {<Audio/>}></Route>
                    <Route path='/screen' element = {<Screen/>}></Route>
                </Routes>
            </BrowserRouter>
          </>  
    )
}

export default App