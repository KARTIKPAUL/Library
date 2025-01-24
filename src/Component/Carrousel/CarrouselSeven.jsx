import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarrouselSeven() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const slides = [
    { id: 1, src: "https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Card 1", description: "This is the first card." },
    { id: 2, src: "https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Card 2", description: "This is the second card." },
    { id: 3, src: "https://images.pexels.com/photos/92248/pexels-photo-92248.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Card 3", description: "This is the third card." },
    { id: 4, src: "https://images.pexels.com/photos/242124/pexels-photo-242124.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Card 4", description: "This is the fourth card." },
    { id: 5, src: "https://images.pexels.com/photos/366283/tianjin-twilight-city-scenery-366283.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Card 5", description: "This is the fifth card." },
  ];

  return (
    <div className="w-full max-w-xl mx-auto my-8 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg pb-8">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-8 py-6 bg-white dark:bg-gray-900 rounded-lg shadow-xl">
            <img
              src={slide.src}
              alt={`Slide ${slide.id}`}
              className="w-full h-56 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white">{slide.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{slide.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

function CustomPrevArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 -left-6 transform -translate-y-1/2 text-3xl text-gray-700 dark:text-gray-300 cursor-pointer z-10"
      onClick={onClick}
    >
      {"<"}
    </div>
  );
}

function CustomNextArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 -right-6 transform -translate-y-1/2 text-3xl text-gray-700 dark:text-gray-300 cursor-pointer z-10"
      onClick={onClick}
    >
      {">"}
    </div>
  );
}

export default CarrouselSeven;
