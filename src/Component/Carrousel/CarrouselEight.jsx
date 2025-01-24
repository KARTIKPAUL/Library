import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarrouselEight() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true, // Smooth fade transition effect
    autoplay: true, // Automatically play the slides
    autoplaySpeed: 3000, // Speed of autoplay
  };

  const slides = [
    { 
      id: 1, 
      src: "https://theplanetd.com/images/city-skylines-of-the-world-brisbane.jpg", 
      caption: "City Skyline" 
    },
    { 
      id: 2, 
      src: "https://cdn.prod.website-files.com/63a02e61e7ffb565c30bcfc7/677e4803544b9649d7135f38_65ea973aff8798ab070de71f_most%2520beautiful%2520landscapes%2520in%2520the%2520world.webp", 
      caption: "Beautiful Landscape" 
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-6 bg-gradient-to-r from-blue-800 via-indigo-600 to-purple-600 rounded-xl shadow-2xl pb-8">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative px-4 group overflow-hidden rounded-xl">
            <img
              src={slide.src}
              alt={`Slide ${slide.id}`}
              className="w-full h-[500px] object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-2xl font-bold tracking-wide">{slide.caption}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom styles for the arrows */}
      <style jsx>{`
        .slick-prev, .slick-next {
          font-size: 40px; /* Slightly bigger arrows */
          width: 50px;
          height: 50px;
          background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
          border-radius: 50%;
          position: absolute; /* Ensure arrows are positioned inside the container */
          top: 50%; /* Center them vertically */
          transform: translateY(-50%); /* Ensure exact vertical centering */
        }

        .slick-prev {
          left: -30px; /* Position the left arrow slightly inward */
        }

        .slick-next {
          right: -30px; /* Position the right arrow slightly inward */
        }

        .slick-prev:before, .slick-next:before {
          color: white; /* Set the arrow color to white */
        }

        /* Ensure the arrows are positioned inside the slider container */
        .slick-slider {
          position: relative; /* Establish the positioning context for the arrows */
        }
      `}</style>
    </div>
  );
}

export default CarrouselEight;
