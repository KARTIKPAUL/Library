const GalleryThree = () => {
     
  return (
    <>
      <div className="bg-customBlue1 py-16 px-6 lg:px-12">
        <h2 className="text-4xl lg:text-6xl font-extrabold text-[#E35A1E] mb-12 text-center tracking-wider animate__animated animate__fadeIn">
          Gallery 2
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4  text-[#0084C2]  decoration-yellow-300 px-6 lg:px-0">
              This is our gallery 2 part or seassion
            </h2>
            <div className="w-20 h-1 bg-green-400 rounded-full px-6 lg:px-0 mx-6 lg:mx-0"></div>
            <p className="text-lg leading-relaxed px-6 lg:px-0">
              Let's turn moments of personal joy into acts of collective
              compassion. With each anniversary, birthday, or a special
              occasion, your donation becomes a beacon of hope for those facing
              adversity. Join us in celebrating not just milestones, but the
              enduring spirit of giving back. Together, we can create a ripple
              effect of kindness that nourishes hearts and futures alike.
            </p>
            <div>
            <button className="mx-6 lg:mx-0 mt-4 bg-[#E35A1E] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#0084C2] transition transform hover:scale-105 animate__animated animate__fadeIn animate__delay-3s duration-300">
              Kearn More
            </button>
            </div>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4 mx-6">
            <img
              src="https://images.pexels.com/photos/20356777/pexels-photo-20356777/free-photo-of-farmers-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="women"
              className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
            <img
              src="https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg"
              alt="Kids eating meal"
              className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
            <img
              src="https://images.pexels.com/photos/12451890/pexels-photo-12451890.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Girl holding food"
              className="col-span-2 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryThree;