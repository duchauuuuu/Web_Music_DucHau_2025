import React from 'react'
import {assets} from '../assets/admin-assets/assets'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='bg-[#003a10] min-h-screen pl-[4vw]'>
        <img className='mt-5 w-[max(10vw,100px)] hidden sm:block' src={assets.logoHechotune} alt=''></img>
        <img className='mt-5 w-[max(5vw,40px)] mr-5 sm:hidden block' src={assets.logoHechotune} alt=''></img>
            <div className='flex flex-col gap-5 mt-10'>
                        <NavLink to='/add-song' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00ff5b] text-sm font-medium'>
                            <img src={assets.add_song} className='w-5' alt=''></img>
                            <p className='hidden sm:block'>Thêm bài hát</p>
                        </NavLink>
                        <NavLink to='/list-song' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00ff5b] text-sm font-medium'>
                            <img src={assets.song_icon} className='w-5' alt=''></img>
                            <p className='hidden sm:block'>Danh sách bài hát</p>
                        </NavLink>
                        <NavLink to='/add-album' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00ff5b] text-sm font-medium'>
                            <img src={assets.add_album} className='w-5' alt=''></img>
                            <p className='hidden sm:block'>Thêm album</p>
                        </NavLink>
                        <NavLink to='/list-album' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00ff5b] text-sm font-medium'>
                            <img src={assets.album_icon} className='w-5' alt=''></img>
                            <p className='hidden sm:block'>Danh sách album</p>
                        </NavLink>
            </div>
    </div>
  )
}

export default Sidebar