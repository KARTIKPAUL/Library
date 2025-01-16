import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SideBarTwo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const slides = [
    { id: 1, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFy5pH8mMYfEfCW-Vu7MP8SpqR1UpK7vU2TA&s" },
    { id: 2, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFy5pH8mMYfEfCW-Vu7MP8SpqR1UpK7vU2TA&s" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-8 p-6 bg-white dark:bg-gray-800 rounded-full shadow-xl pb-8">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-4">
            <img
              src={slide.src}
              alt={`Slide ${slide.id}`}
              className="w-full rounded-full shadow-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SideBarTwo;
