import './app.scss';
import Home from './pages/home.tsx';
import Second from './pages/second'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/navbar';
import Third from './pages/third';
import Four from './pages/four';
import Five from './pages/five';
import Searchpg from './pages/searchpg';
import { useState } from 'react';

const App =()=> {
  const [playerimg,setplayerimg]=useState([])
  const [playername,setplayername]=useState([])
  const [playergoals,setplayergoals]=useState([])
  const [playerapp,setplayerapp]=useState([])
  const [playerdri,setplayerdri]=useState([])
  const [playerduel,setplayerduel]=useState([])
  return (
   <div className='bg'>
    <BrowserRouter>
      <Navbar set={setplayerimg} set2={setplayername} set3={setplayergoals} set4={setplayerapp} set5={setplayerdri} set6={setplayerduel}/>    
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='2' element={<Second />}/>
          <Route path='3' element={<Third />}/>
          <Route path='4' element={<Four />}/>
          <Route path='5' element={<Five />}/>
          <Route path='6' element={<Searchpg searchedimg={playerimg} searchedname={playername} searchedgoals={playergoals} searchedapp={playerapp} searcheddri={playerdri} searchedduel={playerduel} />}/>
        </Routes>
    </BrowserRouter> 
   </div> 
  );                                                                                   
}

export default App;