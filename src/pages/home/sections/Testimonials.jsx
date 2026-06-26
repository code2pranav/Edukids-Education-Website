import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Icon } from "@iconify/react";

import SectionHeading from "@components/ui/SectionHeading";
import SliderArrows from "@components/ui/SliderArrows";
import { testimonials } from "@data/testimonials";

import cloudElement from "@assets/banner-bg-2.png";
import element1 from "@assets/tst-element1.svg";
import element2 from "@assets/tst-element2.svg";
import element3 from "@assets/tst-element3.svg";

const SPLIDE_OPTIONS = {
  type: "loop",
  perPage: 1,
  perMove: 1,
  gap: "1rem",
  arrows: false,
  pagination: true,
  autoplay: true,
  interval: 4000,
  pauseOnHover: true,
  pauseOnFocus: true,
  speed: 700,
};

const Testimonials = () => {
  const splideRef = useRef(null);

  return (
    <section
      id="testimonials"
      className="section-py-lg relative bg-bg overflow-hidden"
    >
      <div className="container-base relative z-20">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Parents Say About Us"
          description="The success and happiness of our students are at the heart of everything we do. But don't just take our word for it."
        />
      </div>

      <div
        className="relative max-w-225 mx-auto mt-12 z-20"
        data-aos="fade-up"
      >
        <SliderArrows
          getSplide={() => splideRef.current?.splide}
          className="hidden lg:contents [&_button]:-right-7 [&_button:last-child]:right-0"
        />

        <Splide
          ref={splideRef}
          options={SPLIDE_OPTIONS}
          aria-label="Parent testimonials"
        >
          {testimonials.map((item) => (
            <SplideSlide key={item.name}>
              <div className="px-2 lg:px-16">
                <div className="relative flex flex-col items-center justify-center h-auto lg:h-90 max-w-200 mx-auto rounded-2xl bg-primary-2 border-card px-10 py-8 text-center text-white">
                  <h4 className="text-2xl font-bold font-display">
                    {item.name}
                  </h4>

                  <span className="font-display text-gray-300">
                    {item.role}
                  </span>

                  <p className="py-5 pb-10 text-xl font-medium font-display">
                    {item.review}
                  </p>

                  <div className="flex justify-center gap-2">
                    {[...Array(5)].map((_, index) => (
                      <Icon
                        key={index}
                        icon="mingcute:star-fill"
                        className="text-2xl text-primary"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <img
                    src={element1}
                    alt=""
                    aria-hidden="true"
                    className="hidden lg:block absolute top-12 left-18 pointer-events-none select-none"
                  />

                  <img
                    src={element2}
                    alt=""
                    aria-hidden="true"
                    className="hidden lg:block absolute bottom-12 left-40 pointer-events-none select-none"
                  />

                  <img
                    src={element3}
                    alt=""
                    aria-hidden="true"
                    className="hidden lg:block absolute top-12 right-40 pointer-events-none select-none"
                  />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <img
        src={cloudElement}
        alt=""
        aria-hidden="true"
        className="absolute inset-x-0 top-0 w-full object-cover pointer-events-none select-none"
      />
    </section>
  );
};

export default Testimonials;