import React from 'react';


const GalleryFour = () => {
  return (
    <div className="bg-gray-800">
      <div className="w-full h-1 bg-white mx-5"></div>

      {/* Header Section */}
      <div className="ml-10 my-10 text-center">
        <h1 className="font-bold text-5xl text-white">Home That Makes You Living Life!</h1>
        <p className="font-semibold text-xl text-white my-10 font-mono">
          Are you looking for amazing Real estate? Don't worry! <br /> we got it for you
        </p>
        {/* <button className="bg-violet-500 px-5 py-2 rounded-xl text-white text-2xl font-semibold hover:bg-white hover:text-black gap-3 my-5">
          Learn More <i className="fa-solid fa-arrow-right ml-2"></i>
        </button> */}
      </div>

      {/* Main Section */}
      {/* <h1 className="text-6xl text-center my-10 font-bold text-white">Our Best Estates Are Modern</h1> */}

      <div className="flex flex-col md:flex-row gap-10 flex-wrap justify-center items-center">
        {[
          { location: "Kolkata, West Bengal, India", price: "₹50,000", image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600" },
          { location: "New Delhi, Delhi, India", price: "₹70,000", image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600" },
          { location: "Mumbai, Maharashtra, India", price: "₹1,00,000", image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600" },
          { location: "Chennai, Tamil Nadu, India", price: "₹40,000", image: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=600" },
          { location: "Guwahati, Assam, India", price: "₹40,000", image: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600" },
          { location: "Bengaluru, Karnataka, India", price: "₹70,000", image: "https://images.pexels.com/photos/2017802/pexels-photo-2017802.jpeg?auto=compress&cs=tinysrgb&w=600" },
          { location: "Hyderabad, Telangana, India", price: "₹50,000", image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600" },
          { location: "Pune, Maharashtra, India", price: "₹40,000", image: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=600" },
          { location: "Bhopal, MP, India", price: "₹40,000", image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600" },
        ].map((card, index) => (
          <div key={index} className="p-6 bg-white max-w-sm rounded-xl">
            <img className="h-25 w-15 rounded" src={card.image} alt={card.location} />
            <div className="text-xl flex flex-col justify-center">
              <h3 className="font-bold text-green-900 text-2xl">{card.location}</h3>
              <p className="text-blue-500 font-bold font-serif">{card.price}</p>
              <button className="bg-violet-500 w-fit px-5 py-1 rounded font-semibold text-center m-auto text-2xl hover:bg-green-400 hover:text-white">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Back Section */}
      {/* <div className="bg-white mt-10 flex flex-col md:flex-row py-10 px-10">
        <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600" alt="featuresImage1" className="w-1/2 rounded-full" />

        <div className="mx-5">
          <h1 className="text-5xl font-bold tracking-wider my-5">Modern, Trendy & Affordable</h1>
          <p className="text-bold text-xl tracking-wide my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quo rem officia nisi exercitationem porro?
          </p>
          <button className="bg-violet-500 w-fit px-5 py-2 rounded-lg font-semibold text-center m-auto text-2xl hover:bg-green-400 hover:text-white">
            Early Birds Books <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div> */}

      
      
    </div>
  );
};

export default GalleryFour;
