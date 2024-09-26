import React from "react";
import satelitImg from "../../assets/search-engine-optimize.webp";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white py-20">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-cyan-300 uppercase"
              >
                SEO
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                Pioneers in Search Engine Optimization in Sri Lanka
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                We are the digital marketing agency that introduced Search
                Engine Optimization (SEO) to Sri Lanka in 2005. Most other
                agencies who offer this service didn’t even exist at this time.
                This makes as the most experienced digital marketing service
                provider in Sri Lanka. Our website consistently achieve number 1
                and page 1 rankings for highly competitive keywords across a
                wide range of industries. Our experience includes working in
                international markets like the USA, UK, Australia, India and the
                Middle East.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
            <div data-aos="zoom-in">
              <img
                src={satelitImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
