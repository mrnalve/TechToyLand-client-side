import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState("Tablets")
  const [toys, setToys] = useState([])
  const handleTabChange = tabName => {
    setActiveTab(tabName)
  }
  useEffect(()=>{
    fetch(`http://localhost:5000/toysByCategory/${activeTab}`)
    .then(res=>res.json())
    .then(data => {
      console.log(data);
      setToys(data)
    })
  },[activeTab])
  return (
    <div className="py-8 bg-gray-100 rounded-xl" data-aos="zoom-in-right">
      <div className="container mx-auto px-4">
        <div>
          <div className="flex justify-center space-x-4">
            <button onClick={()=> handleTabChange("Tablets")} className={`py-2 px-4 bg-white text-black border-none cursor-pointer rounded-xl hover:bg-gray-300 focus:bg-[#ffc837] focus:rounded-xl ${activeTab === "Tablets" ? 'bg-[#ffc837] rounded-xl' : ''}`}>
            Tablets
            </button>
            <button onClick={()=> handleTabChange("Drone")} className={`py-2 px-4 bg-white text-black border-none cursor-pointer rounded-xl hover:bg-gray-300 focus:bg-[#ffc837] focus:rounded-xl ${activeTab === "Drone" ? 'bg-[#ffc837] rounded-xl' : ''}`}>
            Drone
            </button>
            <button onClick={()=> handleTabChange("Camera")} className={`py-2 px-4 bg-white text-black border-none cursor-pointer rounded-xl hover:bg-gray-300 focus:bg-[#ffc837] focus:rounded-xl ${activeTab === "Camera" ? 'bg-[#ffc837] rounded-xl' : ''}`}>
            Camera
            </button>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
             {
              toys.map(toy => <ToyCard toy={toy} key={toy._id}></ToyCard>)
             }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
