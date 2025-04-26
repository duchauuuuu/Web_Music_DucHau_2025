import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from '../App';
import { toast } from 'react-toastify';

const ListSong = () => {
  const [data,setData] =useState([]);
  
  const fetchSongs = async () =>{
    try {
      const response = await axios.get(`${url}/api/song/list`)
      // console.log(reponse.data)
      if(response.data.success) {
        setData(response.data.data);
      }
    } catch (error) {
      toast.error("Lỗi")
    }
  }
  const removeSong = async (id) =>{
    try {
        const response = await axios.post(`${url}/api/song/remove`,{id});
        if(response.data.success) {
          toast.success("Xóa bài hát thành công")
           await fetchSongs();
        }
       
    } catch (error) {
       toast.error("Lỗi")
    }
  }
  useEffect(()=>{
    fetchSongs();
  },[]) 

  return (
    <div>
      <p>
        Danh sách bài hát
      </p>
      <br></br>
      <div>
        <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
          <b>Ảnh</b>
          <b>Tên</b>
          <b>Album</b>
          <b>Thời lượng</b>
          <b>Hành động</b>
        </div>
        {
          data.map((item,index)=>{
            console.log(item)
              return (
                <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
                  <img className='w-12' src={item.image} alt=''></img>
                  <p>{item.name}</p>
                  <p>{item.album}</p>
                  <p>{item.duration}</p>
                  <p className='cursor-pointer' onClick={()=>removeSong(item._id)}>x</p>
                </div>
              )
          })
        }
      </div>
    </div>
  )
}

export default ListSong