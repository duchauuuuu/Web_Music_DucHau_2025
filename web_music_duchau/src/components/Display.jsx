import React, { useEffect, useRef } from 'react'
import DisplayHome from './DisplayHome'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayAlbum from './DisplayAlbum'

import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const Display = () => {
  const {albumsData} = useContext(PlayerContext);

  const displayRef = useRef();
  const location= useLocation();
  const isAlbum = location.pathname.includes('album');
  const albumId=  isAlbum ? location.pathname.split('/').pop() : "";
  const bgColor = isAlbum && albumsData.length > 0 ?  albumsData.find((item)=> (item._id === albumId)).bgColour : "#121212"
  useEffect(()=>{
    if(isAlbum){
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    }else{
      displayRef.current.style.background = "#121212";
    }
  })
  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w[75%] lg:ml-0'>
        { albumsData.length > 0 ?  <Routes>
            <Route path='/' element={<DisplayHome/>}></Route>
            <Route path='/album/:id' element={<DisplayAlbum album={albumsData.find((item)=>(item._id===albumId))} />}></Route>
            
        </Routes> : null} 
       
    </div>
  )
}

export default Display