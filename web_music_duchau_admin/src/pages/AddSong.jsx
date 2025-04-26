import React, { useState } from 'react'
import { assets } from '../assets/admin-assets/assets'
import axios from 'axios'
import { url } from '../App';
import { toast } from 'react-toastify';
const AddSong = () => {
  const [image,setImage] = useState(false);
  const [song,setSong] = useState(false);
  const [name,setName] = useState("");
  const [desc,setDesc] = useState("");
  const [album,setAlbum] = useState("none");
  const [loading,setLoading] = useState(false);
  const [albumdata,setAlbumData] = useState([]);
  const onSubmitHanldler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('desc', desc);
      formData.append('image', image);
      formData.append('audio', song);
      formData.append('album', album);
      const  response = await axios.post(`${url}/api/song/add`, formData )
      if( response.data.success) {
        toast.success("Thêm bài hát thành công")
        setName("");
        setDesc("");
        setAlbum("none");
        setImage(false);
        setSong(false);
      }
      else {
         toast.error("Thêm bài hát thất bại")
      }

    } catch (error) {
        toast.error("Lỗi")
    }
    setLoading(false);
  }


  return loading ? (<div className='grid place-items-center min-h-[80vh]'>
    <div className='w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin'>

    </div>
  </div>) : (
    <form className='flex flex-col items-start gap-8 text-gray-600'>
    <div className='flex gap-8'>
      <div className='flex flex-col gap-4'>
        <p>Tải bài hát</p>
        <input onChange={(e)=>{setSong(e.target.files[0])}} type='file' id='song' accept='audio/*' hidden></input>
        <label htmlFor='song'>
          <img className='w-24 cursor-pointer' alt='' src={song ? assets.upload_added :  assets.upload_song}></img>
        </label> 
      </div>
      <div className='flex flex-col gap-4'>
        <p>Tải ảnh</p>
        <input onChange={(e)=>{setImage(e.target.files[0])}} type='file' id='image' accept='image/*' hidden></input>
        <label htmlFor='image'>
          <img className='w-24 cursor-pointer' alt='' src={image ? URL.createObjectURL(image) : assets.upload_area}></img>
        </label>
      </div>
    </div>
    <div className='flex flex-col gap-2.5'>
      <p>Tên nhạc</p>
      <input onChange={(e)=>{setName(e.target.value)}} value={name} className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' placeholder='Nhập ở đây' type='text' required></input>
    </div>
    <div className='flex flex-col gap-2.5'>
      <p>Mô tả</p>
      <input onChange={(e)=>{setDesc(e.target.value)}} value={desc} className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' placeholder='Nhập ở đây' type='text' required></input>
    </div>
    <div className='flex flex-col gap-2.5'>
      <p>Album</p>
      <select onChange={(e)=>{setAlbum(e.target.value)}} defaultValue={album} className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[150px]' placeholder='Nhập ở đây' type='text' >
        <option value={'none'}>Không có</option>
      </select>
    </div>
    <button onClick={(e)=>{onSubmitHanldler(e)}} type='submit' className='text-base bg-black text-white py-2.5 px-14 cursor-pointer'>Thêm</button>
      
    </form>
  )
}

export default AddSong