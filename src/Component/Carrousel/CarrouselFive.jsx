import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function CarrouselFive() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const slides = [
    { id: 1, src: "https://images.pexels.com/photos/7621136/pexels-photo-7621136.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Kartik Paul", description: "{ It's very painful to keep moving forward when nobody is clapping for you. }" },
    { id: 2, src: "https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Kartik Paul", description: "{ Making money is not our ultimate destination,it's just a milestone. }" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg pb-8">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-4">
            <img
              src={slide.src}
              alt={`Slide ${slide.id}`}
              className="w-full rounded-lg"
            />
             <p className="text-gray-600 dark:text-gray-100 text-center mt-2">{slide.description}</p>
            <h3 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white text-center">{slide.title}</h3>
           
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarrouselFive;
