import React from "react";
import { assets } from "../assets/frontend-assets/assets";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div  onClick={()=>navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt=""></img>
          <p className="font-bold">Trang chủ</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt=""></img>
          <p className="font-bold">Tìm kiếm</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt=""></img>
            <p className="font-semibold">Thư viện của bạn</p>
          </div>

          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt=""></img>
            <img className="w-5" src={assets.plus_icon} alt=""></img>
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 ">
          <h1>Tạo danh sách phát đầu tiên của bạn</h1>
          <p className="font-light">Với một cách dễ dàng, bắt đầu nhé!</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 ">
            Tạo danh sách phát
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4 ">
          <h1>Hãy tìm một podcasts để theo dõi</h1>
          <p className="font-light">
            Chúng tôi sẽ đưa cho bạn podcasts mới nhất
          </p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 ">
            Tìm podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
