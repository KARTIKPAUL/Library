import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Main carousel component
function CarrouselSix() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 10000, // 10 seconds interval
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const slides = [
    {
      id: 1,
      src: "https://www.shutterstock.com/image-photo/mountain-landscape-lake-range-large-260nw-1017466240.jpg",
      alt: "Slide 1",
    },
    {
      id: 2,
      src: "https://www.shutterstock.com/image-photo/mountain-landscape-lake-range-large-260nw-1017466240.jpg",
      alt: "Slide 2",
    },
    {
      id: 3,
      src: "https://www.shutterstock.com/image-photo/mountain-landscape-lake-range-large-260nw-1017466240.jpg",
      alt: "Slide 3",
    },
  ];

  return (
    <div
      className="carousel-container"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "100%",
        margin: "auto",
        padding: "32px",
        borderRadius: "20px",
        overflow: "hidden",
        background: "linear-gradient(90deg, rgba(45,45,45,0.8), rgba(0,0,0,0.6))",
      }}
    >
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="carousel-slide">
            <img
              src={slide.src}
              alt={slide.alt}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>

      {/* Custom styling for the dots */}
      <div
        className="slick-dots-container"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        {/* Custom slick-dots */}
      </div>
    </div>
  );
}

// Custom previous arrow component
function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaChevronLeft
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#fff", // White arrow
        fontSize: "2rem",
        left: "-10px", // Adjusted arrow position
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
}

// Custom next arrow component
function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaChevronRight
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#fff", // White arrow
        fontSize: "2rem",
        right: "-10px", // Adjusted arrow position
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
}

// Export carousel component
export default CarrouselSix;

// Global CSS styles
const styles = {
  carouselContainer: {
    position: "relative",
    width: "100%",
    maxWidth: "100%",
    margin: "auto",
    padding: "32px",
    borderRadius: "20px",
    overflow: "hidden",
    background: "linear-gradient(90deg, rgba(45,45,45,0.8), rgba(0,0,0,0.6))",
  },
  carouselSlide: {
    padding: "0 16px",
  },
  carouselImage: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "20px",
  },
  slickDotsContainer: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
  },
  slickDots: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
  },
};

// Global styles for dots and arrows
const globalStyles = {
  ".slick-dots": {
    display: "flex",
    justifyContent: "center",
    padding: 0,
    margin: 0,
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
  },
  ".slick-dots li button": {
    backgroundColor: "#fff", // White for inactive dots
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    opacity: 0.7,
    transition: "all 0.3s ease",
  },
  ".slick-dots li.slick-active button": {
    backgroundColor: "#1d4ed8", // Blue for active dot
    opacity: 1,
  },
  ".slick-dots li button:hover": {
    backgroundColor: "#1d4ed8", // Blue on hover
    opacity: 1,
  },
};
