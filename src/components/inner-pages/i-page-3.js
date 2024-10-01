import React, { useState } from "react";
import "./i-page-3.css";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: "/images/1.jpg",
      title: "SLIDER IMAGE MAGIC",
      description1:
        "Nulla magna irure incididunt irure nisi laboris adipisicing adipisicing ad aliquip exercitation sit duis.",
      description2: "Ex irure minim eiusmod tempor cillum consectetur ullamco.",
    },
    {
      image: "/images/2.jpg",
      title: "SLIDER IMAGE MAGIC",
      description1:
        "Nulla magna irure incididunt irure nisi laboris adipisicing adipisicing ad aliquip exercitation sit duis.",
      description2: "Ex irure minim eiusmod tempor cillum consectetur ullamco.",
    },
    {
      image: "/images/3.jpg",
      title: "SLIDER IMAGE MAGIC",
      description1:
        "Nulla magna irure incididunt irure nisi laboris adipisicing adipisicing ad aliquip exercitation sit duis.",
      description2: "Ex irure minim eiusmod tempor cillum consectetur ullamco.",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main>
      <header>
        <figure className="logo">
          <a href="/">
            <img src="/images/logo.png" alt="Logo" />
          </a>
        </figure>
        <nav>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h10"
            />
          </svg>
        </nav>
      </header>

      <section className="slider-2">
        <div className="list">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`item ${index === activeIndex ? "active" : ""}`}
            >
              <div
                className="image"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div className="content">
                <h2>{slide.title}</h2>
                <p>{slide.description1}</p>
                <p>{slide.description2}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button id="prev" onClick={handlePrev}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M5 12l4-4m-4 4 4 4"
              />
            </svg>
          </button>
          <button id="next" onClick={handleNext}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Slider;
