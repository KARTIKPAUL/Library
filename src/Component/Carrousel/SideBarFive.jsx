import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SideBarFive() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const slides = [
    { id: 1, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFy5pH8mMYfEfCW-Vu7MP8SpqR1UpK7vU2TA&s", title: "Slide 1", description: "This is the first slide." },
    { id: 2, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFy5pH8mMYfEfCW-Vu7MP8SpqR1UpK7vU2TA&s", title: "Slide 2", description: "This is the second slide." },
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
            <h3 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white">{slide.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{slide.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SideBarFive;
