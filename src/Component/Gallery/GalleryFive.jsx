import React from 'react';
import { FaRegThumbsDown } from "react-icons/fa";

const GalleryFive = () => {
  return (
    <div className="bg-slate-800 min-h-screen">
      

      {/* Header Section Starts */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <div>
          <div className="flex gap-2">
            {/* <img src="../assets/waving-hand.png" alt="waving-hand" className="w-5 h-5" /> */}
            {/* <FaRegThumbsDown className='w-5 h-5'/> */}
            <h2>👋</h2>
            <p className="text-white font-semibold">Hi Everyone</p>
          </div>

          <h1 className="text-4xl text-white font-bold mt-1">Virat Kohli</h1>

          <p className="text-white font-semibold text-xl mt-1">Developer</p>
        </div>

        <div className="mt-2">
          <img src="http://127.0.0.1:5501/MediaQuerySecondProject/assets/pc-image.png" alt="pc-image" className="w-40 h-30" />
        </div>
      </div>

      {/* Header Section Ends */}

      <div className="mt-10">
        <div className="flex justify-center items-center flex-col">
          <p className="text-white font-bold text-xl">Projects</p>
          <div className="mt-2 border w-10 border-yellow-300"></div>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex flex-col gap-5 justify-center items-center mt-5">
        <div className="flex md:flex-row flex-col gap-5">
          <div>
            <img src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image1" className="rounded-2xl w-40 h-40" />
            <p className="text-center text-white">Image1</p>
          </div>

          <div>
            <img src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image2" className="rounded-2xl w-40 h-40" />
            <p className="text-center text-white">Image2</p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-5">
          <div>
            <img src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image3" className="rounded-2xl w-40 h-40" />
            <p className="text-center text-white">Image3</p>
          </div>

          <div>
            <img src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image4" className="rounded-2xl w-40 h-40" />
            <p className="text-center text-white">Image4</p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default GalleryFive;
