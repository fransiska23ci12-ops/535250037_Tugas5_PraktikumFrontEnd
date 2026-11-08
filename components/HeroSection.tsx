"use client";

import Carousel from "react-bootstrap/Carousel";

interface Slide {
  title: string;
  subtitle: string;
  imageUrl: string;
  buttonText: string;
}

const slides: Slide[] = [
  {
    title: "A Perfect Coffee for Your Day",
    subtitle:
      "Nikmati secangkir kopi berkualitas dengan rasa yang istimewa.",
    imageUrl:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1600",
    buttonText: "Explore Menu",
  },
  {
    title: "Taste the Best Coffee",
    subtitle:
      "Temukan pengalaman menikmati kopi dengan aroma dan cita rasa terbaik.",
    imageUrl:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600",
    buttonText: "Discover More",
  },
  {
    title: "Coffee Makes Everything Better",
    subtitle:
      "Temani setiap momen berharga dengan secangkir kopi dari Kopi Senja.",
    imageUrl:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600",
    buttonText: "Order Now",
  },
];

export default function HeroSection() {
  return (
    <Carousel
      fade
      interval={4000}
      controls
      indicators
      pause="hover"
    >
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div
            className="hero-slide"
            style={{
              backgroundImage: `url("${slide.imageUrl}")`,
            }}
          >
            <div className="hero-overlay"></div>

            <Carousel.Caption className="hero-caption">
              <span className="hero-label">
                WELCOME TO KOPI SENJA
              </span>

              <h1>{slide.title}</h1>

              <p>{slide.subtitle}</p>

              <a href="#menu" className="hero-button">
                {slide.buttonText}
              </a>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
