import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function CarrouselFour() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const slides = [
    { id: 1, src: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 2, src: "https://images.pexels.com/photos/35183/people-homeless-man-male.jpg?auto=compress&cs=tinysrgb&w=600" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-8 p-6 bg-blue-50 dark:bg-blue-900 rounded-xl shadow-xl pb-8">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="p-4">
            <img
              src={slide.src}
              alt={`Slide ${slide.id}`}
              className="w-full rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarrouselFour;
