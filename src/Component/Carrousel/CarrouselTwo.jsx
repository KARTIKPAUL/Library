import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "block",
        color: "#1d4ed8",
        fontSize: "2rem",
        cursor: "pointer",
        left: "-22px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      {"<"}
    </div>
  );
}

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "block",
        color: "#1d4ed8",
        fontSize: "2rem",
        cursor: "pointer",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      {">"}
    </div>
  );
}

function CarrouselTwo() {
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    arrows: false, // Disable default arrows
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const slides = [
    {
      id: 1,
      src: "https://media.istockphoto.com/id/1197092494/photo/teenage-boy-doing-homework-using-laptop.jpg?b=1&s=612x612&w=0&k=20&c=vbNfOPcbcaqxJHttT2R4tKGVccW20lNuwinN2QiPgLE=",
    },
    {
      id: 2,
      src: "https://media.istockphoto.com/id/1353808322/photo/woman-math-teacher-lecturing-online-from-home-on-her-laptop.jpg?b=1&s=612x612&w=0&k=20&c=ghDv26S3UrS1DKdNW2BpVMhIACbubV9QFbvkb5tsv6M=",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-8 p-6 bg-white dark:bg-gray-800 rounded-full shadow-xl pb-8">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-10 py-4">
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

export default CarrouselTwo;
