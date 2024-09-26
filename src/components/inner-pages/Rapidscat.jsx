import React from "react";
import sateliteImg from "../../assets/web-design.webp";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={sateliteImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-cyan-300 uppercase"
              >
                Web Design Solutions
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                Create Your Own Web Masterpiece
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                We are Sri Lanka’s oldest and most respected website design
                company. With game changing designs like keells.com, we have
                maintained a reputation as the market leader in web design for
                nearly a decade. We deliver bespoke design solutions that are
                fully mobile responsive, user-friendly, meet international
                design standards and make a direct contribution to your bottom
                line. Our sites are technically superior, optimized for
                achieving higher search engine rankings and function without
                failure or errors, even with millions of hits per month.
                Combined with our world-class support and services that include
                content writing and professional photography, we deliver a
                comprehensive solution that is unmatched by any other company in
                Sri Lanka.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
