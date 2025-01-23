import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function CarrouselThree() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const slides = [
    { id: 1, src: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 2, src: "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600" },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-8 p-6 bg-white dark:bg-gray-800 shadow-md pb-8 rounded-2xl">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="p-2">
            <img
              src={slide.src}
              alt={`Slide ${slide.id}`}
              className="w-full rounded-2xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarrouselThree;
